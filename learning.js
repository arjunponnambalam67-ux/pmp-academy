// Additive V3 features. Existing capstone-pmp-v1 fields retain their names and meaning.
export function headingsFor(body) {
  const seen = new Map();
  return [...body.matchAll(/^(#{1,4})\s+(.+)$/gm)].map(m => {
    const base = m[2].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    const count = (seen.get(base) || 0) + 1; seen.set(base, count);
    return {depth:m[1].length, title:m[2], id:base + (count > 1 ? '-'+count : '')};
  });
}
export function metrics(all, state) {
  const count = key => all.filter(l => (state[key] || []).includes(l.id)).length;
  const done = count('done');
  return {total:all.length, done, remaining:all.length-done, review:count('later'), percent:all.length?Math.round(done/all.length*100):0};
}
export function readingPercent(top, bottom, viewport) {
  return Math.round(Math.max(0, Math.min(1, (viewport-top)/Math.max(1,bottom-top)))*100);
}
export function validateQuiz(value) {
  if (!value || typeof value.title!=='string' || !value.title.trim() || typeof value.source!=='string' || !value.source.trim() || !Array.isArray(value.questions) || !value.questions.length || value.questions.length>500) throw Error('Indiquez un titre, une source et 1 à 500 questions.');
  value.questions.forEach((q,i)=> {
    if (!q || typeof q.prompt!=='string' || !q.prompt.trim() || !Array.isArray(q.choices) || q.choices.length<2 || q.choices.length>8 || q.choices.some(c=>typeof c!=='string'||!c.trim()) || !Number.isInteger(q.answer) || q.answer<0 || q.answer>=q.choices.length || typeof q.explanation!=='string' || !q.explanation.trim()) throw Error('Question '+(i+1)+' : énoncé, 2 à 8 choix, indice de réponse (depuis 0) et correction requis.');
  });
  return value;
}
export function validateBackup(v) {
  if (!v || typeof v!=='object' || Array.isArray(v)) throw Error('Sauvegarde invalide.');
  for (const k of ['done','favs','later']) if (!Array.isArray(v[k]) || v[k].some(x=>typeof x!=='string')) throw Error('Liste invalide : '+k);
  for (const k of ['notes','positions']) if (v[k]!==undefined && (!v[k] || typeof v[k]!=='object' || Array.isArray(v[k]))) throw Error('Champ invalide : '+k);
  if (!v.notes) throw Error('Notes manquantes.');
  if (Object.values(v.notes).some(x=>typeof x!=='string')) throw Error('Notes invalides.');
  if (v.custom!==undefined && (!Array.isArray(v.custom) || v.custom.some(l=>!l || ['id','title','module','chapter','body'].some(k=>typeof l[k]!=='string'||!l[k].trim())))) throw Error('Fiche importée invalide.');
  if (v.custom && new Set(v.custom.map(l=>l.id)).size!==v.custom.length) throw Error('Identifiants de fiches dupliqués.');
  if (v.positions && Object.values(v.positions).some(x=>!Number.isFinite(x)||x<0)) throw Error('Position invalide.');
  if (v.theme!==undefined && !['light','dark'].includes(v.theme)) throw Error('Thème invalide.');
  if (v.font!==undefined && (!Number.isFinite(v.font)||v.font<12||v.font>32)) throw Error('Taille de texte invalide.');
  if (v.quizzes!==undefined) { if(!Array.isArray(v.quizzes)) throw Error('QCM invalides.'); v.quizzes.forEach(validateQuiz); }
  if (v.quizHistory!==undefined && (!Array.isArray(v.quizHistory) || v.quizHistory.some(h=>!h || !Number.isFinite(h.score)||!Number.isFinite(h.total)))) throw Error('Historique invalide.');
  if (v.difficult!==undefined && (!Array.isArray(v.difficult) || v.difficult.some(d=>!d || ['lessonId','headingId','title'].some(k=>typeof d[k]!=='string')))) throw Error('Notions invalides.');
  if (v.readingProgress!==undefined && (!v.readingProgress || typeof v.readingProgress!=='object' || Array.isArray(v.readingProgress) || Object.values(v.readingProgress).some(p=>!Number.isFinite(p)||p<0||p>100))) throw Error('Progression invalide.');
  return v;
}
export function flashcardsFor(all) {
  return all.flatMap(l => {
    let section = l.title, sectionId = ''; const hs=headingsFor(l.body); let hi=0;
    return l.body.split('\n').flatMap(line => {
      if (/^#{1,4}\s/.test(line)) { const h=hs[hi++]; section=h.title; sectionId=h.id; }
      const m=line.match(/^> \[!(definition|retenir)\] (.+)/i);
      return m ? [{lessonId:l.id, title:section, headingId:sectionId, answer:m[2], source:l.title, status:l.status}] : [];
    });
  });
}
