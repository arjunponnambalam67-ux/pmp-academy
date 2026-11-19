# Capstone PMP Academy — première version à valider

## Démarrage

Application statique sans dépendance ni abonnement. Elle utilise les modules JavaScript natifs : **ne pas ouvrir directement `index.html` en `file://`**.

```bash
cd pmp-academy
python -m http.server 8080
```

Ouvrir `http://localhost:8080` sur ordinateur. Pour l'installation PWA, utiliser un hébergement HTTPS (GitHub Pages, Netlify, Cloudflare Pages) ou localhost.

## Déploiement gratuit

1. Créer un dépôt GitHub contenant tous les fichiers du dossier `pmp-academy`.
2. Dans Settings > Pages, sélectionner Deploy from a branch et la branche principale, dossier `/ (root)`.
3. Ouvrir l'adresse HTTPS publiée, puis utiliser « Installer l'application » ou « Ajouter à l'écran d'accueil » selon le navigateur.
4. L'application et les trois fiches intégrées sont mises en cache lors de la première installation réussie du service worker. L'accès hors ligne aux fiches importées n'est **pas garanti** : leurs données restent dans le stockage local du navigateur.

## Ajouter des fiches

Depuis **Mes cours**, saisir titre, module, chapitre et coller le Markdown complet. Les titres `#`, `##`, `###` sont reconnus ; le sommaire est généré automatiquement. Les blocs pédagogiques utilisent `> [!definition]`, `> [!retenir]`, `> [!attention]`, `> [!exemple]`, `> [!methode]`. Les tableaux utilisent la syntaxe Markdown classique. Import conservé dans localStorage, exportable via Statistiques.

Pour un contenu durable versionné et déployable sur plusieurs appareils, ajouter l'objet fiche au fichier `content/lessons.js` et republier. Cette opération n'écrase pas les autres fiches.

## Limitations réelles

- Pas de compte ni synchronisation entre appareils.
- Pas encore de QCM, flashcards, répétition espacée, notes par section, export PDF dédié, moteur mathématique LaTeX, lecteur immersif, signets de sections, ou import automatique de conversations ChatGPT.
- L'impression navigateur offre une sortie PDF de base, non une mise en page PDF validée.
- La recherche fonctionne dans les titres et le texte des fiches chargées ; l'indexation est simple.
- Le sommaire mobile s'ouvre et se ferme par bouton ou tap extérieur, sans geste de glissement.
- Tests automatisés navigateur et audit WCAG complets non exécutés.
- L'icône SVG est incluse ; pour une compatibilité PWA maximale, prévoir aussi des icônes PNG 192 et 512 px.
- Les données locales peuvent être perdues si le navigateur est réinitialisé. Exporter régulièrement le JSON.

## Provenance

Voir `INVENTAIRE.md`. Les deux fiches reconstruites ne sont pas les originaux complets. Le PMBOK 8e édition fourni est sous licence personnelle et n'est **pas** inclus dans l'application ; les contenus pédagogiques sont des explications originales, non une republication du livre.
