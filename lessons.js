export const lessons = [
 {id:'introduction',module:'Fondamentaux',chapter:'Introduction',title:'Introduction au management de projet',status:'reconstruction pédagogique — original à vérifier',minutes:14,body:`# Introduction au management de projet

> [!attention] Provenance : cette fiche est une reconstruction pédagogique originale à partir des notions de la formation. Elle ne prétend pas reproduire mot à mot la fiche précédente, non intégralement récupérée.

## Projet et management de projet

Un projet est une entreprise temporaire destinée à créer un produit, un service ou un résultat unique. Temporaire signifie qu'il possède un début et une fin, et non que ses effets doivent être temporaires.

Le management de projet consiste à appliquer des connaissances, compétences, outils et techniques aux activités du projet pour satisfaire ses exigences et produire de la valeur.

### Projet et opérations

| Projet | Opérations |
|---|---|
| Temporaire | Continues |
| Produit un résultat unique | Répète des activités récurrentes |
| Exemple : déployer un nouveau système radio | Exemple : assurer la maintenance quotidienne |

## Création de valeur

La réussite ne se résume pas à livrer un produit dans les délais et le budget. Les bénéfices attendus, l'utilité pour les parties prenantes et l'alignement stratégique comptent aussi.

> [!exemple] Un système livré dans les temps mais inutilisable par les opérateurs peut respecter son planning sans créer la valeur attendue.

## Approches de développement

### Prédictive

Les exigences sont relativement stables et les travaux peuvent être planifiés en détail à l'avance.

### Adaptative

Le travail progresse par itérations, avec des retours fréquents et des ajustements du backlog.

### Hybride

Une partie des travaux suit une planification prédictive, tandis que d'autres éléments sont élaborés de manière adaptative.

## Principes de jugement PMP

> [!retenir] Le chef de projet analyse la situation, collabore avec les parties prenantes, traite les causes et protège la valeur avant de décider.

> [!attention] Ne confondez pas conformité au plan et création de valeur : un changement peut être nécessaire pour préserver le bénéfice du projet.

## Références

Guide PMBOK 8e édition, parties « Standard pour le management de projet » et introduction du Guide. Synthèse pédagogique originale, non reproduction du texte du PMI.`},
 {id:'perimetre',module:'Domaines de performance',chapter:'Périmètre',title:'Périmètre — exigences, WBS et maîtrise',status:'reconstruction pédagogique — original à vérifier',minutes:19,body:`# Domaine de performance : Périmètre

> [!attention] Provenance : cette fiche a été rédigée pour tester la plateforme. Le cours antérieur détaillé n'est pas disponible ici sous forme intégrale vérifiée ; son remplacement nécessitera l'original.

## Finalité du domaine

Le management du périmètre vise à définir, préciser, faire accepter et maîtriser le travail nécessaire pour fournir les livrables attendus.

### Périmètre produit et périmètre projet

| Périmètre du produit | Périmètre du projet |
|---|---|
| Fonctionnalités et caractéristiques du livrable | Travail nécessaire pour produire le livrable |
| Exemple : radio chiffrée avec autonomie de 12 heures | Conception, essais, documentation et livraison |

## Recueillir et analyser les exigences

Les exigences sont collectées auprès des parties prenantes, analysées, priorisées et rendues vérifiables.

> [!exemple] « La radio doit être performante » n'est pas assez testable. « La liaison doit atteindre le débit défini dans les conditions d'essai contractuelles » est plus vérifiable.

### Traçabilité

Une matrice de traçabilité relie les exigences aux objectifs, livrables, essais et critères d'acceptation.

## Structurer le travail avec la WBS

La structure de découpage du projet (*Work Breakdown Structure*) décompose le périmètre en éléments maîtrisables.

### Règle des 100 %

La WBS doit représenter l'intégralité du périmètre approuvé, sans omission ni travail hors périmètre.

### Lots de travaux

Un lot de travaux est un élément de la WBS pouvant être estimé, affecté, planifié et contrôlé.

> [!methode] Construire une WBS : identifier les livrables, les décomposer, vérifier l'exhaustivité, définir les lots de travaux, documenter le dictionnaire de la WBS.

## Référence de base du périmètre

Elle comprend généralement l'énoncé du périmètre, la WBS et le dictionnaire de la WBS approuvés.

## Vérifier, valider et maîtriser

### Vérification de la qualité

La vérification examine la conformité du livrable aux critères de qualité.

### Validation du périmètre

La validation vise l'acceptation formelle des livrables par le client ou le commanditaire habilité.

### Maîtrise du périmètre

Elle surveille les écarts et gère les modifications de la référence de base par le processus de changement approprié.

> [!attention] Une demande orale d'ajout de fonctionnalité ne suffit pas à modifier la référence de base. Analyser d'abord les impacts et appliquer la gouvernance des changements.

## Exemple de décision PMP

Un client demande une fonctionnalité supplémentaire pendant les essais. Le chef de projet documente la demande, évalue les impacts sur périmètre, échéancier, coûts et risques, puis la soumet au mécanisme de décision applicable avant d'engager le travail.

## Références

Guide PMBOK 8e édition, domaine de performance « Périmètre », section 2.2. Fiche de démonstration originale à remplacer par la fiche historique complète.`},
 {id:'echeancier',module:'Domaines de performance',chapter:'Échéancier',title:'Échéancier — CPM, marges, PERT et pilotage',status:'cours reconstitué depuis les éléments visibles de cette conversation',minutes:28,body:`# Domaine de performance : Échéancier

> [!definition] L'échéancier organise les activités, leurs dépendances, leurs durées, leurs ressources et leurs jalons. Il aide à mesurer les écarts et à prévoir la date de fin.

## 1. Notions fondamentales

| Notion | Définition | Exemple |
|---|---|---|
| Activité | Travail à réaliser | Tester un prototype |
| Durée | Temps écoulé nécessaire | 5 jours ouvrés |
| Effort | Quantité de travail mobilisée | 15 jours-personnes |
| Jalon | Événement sans durée | Validation de conception |
| Dépendance | Relation logique entre activités | Tester après fabrication |
| Référence de base | Échéancier approuvé | Livraison prévue le 15 juin |
| Prévision | Projection actualisée | Livraison estimée le 22 juin |

### Effort et durée

20 jours-personnes avec deux personnes à temps plein peuvent représenter 10 jours si le travail est parfaitement partageable. Un essai de vieillissement de 72 heures n'est pas nécessairement compressible en ajoutant des personnes.

> [!attention] Doubler les ressources ne divise pas automatiquement la durée par deux.

## 2. Planification par vagues successives

La *rolling wave planning* détaille les activités proches tout en conservant une planification générale des travaux éloignés.

| Horizon | Niveau de détail |
|---|---|
| Mois 1 à 3 | Activités détaillées et estimations précises |
| Mois 4 à 6 | Lots de travaux et jalons principaux |
| Mois 7 à 12 | Grandes phases et estimations provisoires |

Au fil de l'avancement, les activités futures sont précisées. Cette technique peut s'appliquer dans différents environnements de projet.

## 3. Planifier la gestion de l'échéancier

Ce processus définit les règles de construction, d'actualisation et de contrôle : unités de durée, précision, calendriers, tolérances, mesure et fréquence des mises à jour.

### ITTO : planifier

| Intrants | Outils et techniques | Extrants |
|---|---|---|
| Charte, plan de management, périmètre, approche de développement, EEF, OPA | Jugement d'expert, analyse, réunions | Plan de gestion de l'échéancier |

> [!retenir] Planifier la gestion définit les règles ; ce n'est pas encore construire le planning détaillé.

## 4. Élaborer l'échéancier

### Quatre étapes

1. Définir les activités à partir des lots de travaux.
2. Déterminer leur séquence et les dépendances.
3. Estimer effort, ressources et durées.
4. Ajuster et optimiser le planning jusqu'à obtenir un modèle réalisable.

### ITTO : élaborer

| Intrants | Outils et techniques | Extrants |
|---|---|---|
| Activités, attributs, jalons, estimations, réseau, ressources, risques, accords et plans | Décomposition, PDM, estimations, CPM, chaîne critique, compression, optimisation | Échéancier, référence de base, données d'échéancier, demandes de changement |

## 5. Les quatre dépendances PDM

| Relation | Sens | Exemple |
|---|---|---|
| Fin-début (FD) | B commence après la fin de A | Essais après assemblage |
| Début-début (DD) | B commence après le début de A | Documentation pendant développement |
| Fin-fin (FF) | B finit après la fin de A | Rapport final après vérification |
| Début-fin (DF) | B finit après le début de A | Ancienne permanence après arrivée de relève |

Une *avance* (lead) permet un chevauchement ; un *retard logique* (lag) ajoute une attente. FD + 2 jours signifie que B débute deux jours après la fin de A.

## 6. Chemin critique : exemple CPM

Le CPM identifie la séquence qui détermine la durée minimale du projet dans un réseau donné.

| Activité | Travail | Durée | Prédécesseurs |
|---|---|---|---|
| A | Exigences | 3 | Aucun |
| B | Conception | 5 | A |
| C | Commande | 4 | A |
| D | Assemblage | 6 | B et C |
| E | Préparation des essais | 3 | B |
| F | Essais finaux | 2 | D et E |

### Dates au plus tôt

Formule : **EF = ES + durée**. Si plusieurs prédécesseurs existent : **ES = maximum des EF prédécesseurs**.

- A : ES 0, EF 3.
- B : ES 3, EF 8.
- C : ES 3, EF 7.
- D : ES max(8,7) = 8, EF 14.
- E : ES 8, EF 11.
- F : ES max(14,11) = 14, EF 16.

Durée minimale : **16 jours ouvrés**, avec une origine t = 0.

### Dates au plus tard

Formule : **LS = LF − durée**. Si plusieurs successeurs existent : **LF = minimum des LS successeurs**.

| Activité | Durée | ES | EF | LS | LF | Marge totale |
|---|---:|---:|---:|---:|---:|---:|
| A | 3 | 0 | 3 | 0 | 3 | 0 |
| B | 5 | 3 | 8 | 3 | 8 | 0 |
| C | 4 | 3 | 7 | 4 | 8 | 1 |
| D | 6 | 8 | 14 | 8 | 14 | 0 |
| E | 3 | 8 | 11 | 11 | 14 | 3 |
| F | 2 | 14 | 16 | 14 | 16 | 0 |

### Chemin critique

**A → B → D → F = 3 + 5 + 6 + 2 = 16 jours.** Les chemins A-C-D-F et A-B-E-F durent respectivement 15 et 13 jours.

Si C passe de 4 à 7 jours, A-C-D-F devient 18 jours : le chemin critique change.

## 7. Marge totale et marge libre

**Marge totale (MT) = LS − ES = LF − EF**. Elle indique le décalage possible sans repousser la fin du projet dans le modèle considéré.

**Marge libre (ML) = minimum des ES successeurs − EF**, pour le réseau FD simplifié.

Pour C : MT = 4 − 3 = 1 jour et ML = 8 − 7 = 1 jour. Pour E : ML = 14 − 11 = 3 jours.

> [!attention] Une marge négative peut apparaître si une contrainte de date impose une échéance plus courte que la durée calculée. Plusieurs chemins critiques peuvent coexister.

## 8. Estimation des durées

| Technique | Principe |
|---|---|
| Analogie | Utiliser une activité similaire |
| Paramétrique | Appliquer un ratio mesurable |
| Ascendante | Additionner les estimations détaillées |
| Delphi | Faire converger les avis d'experts |
| PERT | Combiner trois scénarios |
| Planning poker | Estimer collectivement des efforts relatifs |

### PERT à trois points

**Te = (O + 4M + P) / 6**, où O est optimiste, M plus probable et P pessimiste.

Avec O = 4, M = 7, P = 16 : **Te = (4 + 28 + 16) / 6 = 8 jours**.

Écart-type : **σ = (P − O) / 6 = 2 jours** ; variance : **σ² = 4 jours²**.

> [!retenir] L'écart-type exprime une incertitude et ne constitue pas automatiquement une réserve ajoutée au planning.

## 9. Compression et optimisation

### Crashing

Ajouter des ressources ou des dépenses pour accélérer certaines activités. Le coût augmente souvent.

### Fast tracking

Faire se chevaucher des activités auparavant séquentielles. Les risques de reprises et d'erreurs augmentent.

### Exemple de crashing

Deux chemins durent 20 et 18 jours. On peut réduire de 3 jours une activité présente uniquement sur le premier chemin pour 2 000 € par jour.

| Compression | Chemin 1 | Chemin 2 | Durée du projet |
|---|---:|---:|---:|
| 0 | 20 | 18 | 20 |
| 1 | 19 | 18 | 19 |
| 2 | 18 | 18 | 18 |
| 3 | 17 | 18 | 18 |

La troisième journée coûte 2 000 € sans raccourcir la fin du projet.

### Nivellement et lissage

Le nivellement résout les conflits de capacité et peut repousser la date de fin. Le lissage optimise les ressources dans les marges disponibles sans modifier l'échéance imposée dans le modèle classique.

### Chaîne critique

La chaîne critique tient compte des contraintes de ressources et peut utiliser des tampons de temps pour protéger les échéances.

## 10. Suivre et maîtriser l'échéancier

Le processus suit la performance réelle, actualise les prévisions et traite les changements. Les modifications de la référence de base suivent la maîtrise intégrée des changements.

### ITTO : suivre et maîtriser

| Intrants | Outils et techniques | Extrants |
|---|---|---|
| Références de base, échéancier, données de performance, calendriers, backlog | Analyse des écarts, tendances, EVM, CPM, vélocité, revues | Informations de performance, prévisions, changements, mises à jour |

### Valeur acquise

**SV = EV − PV** et **SPI = EV / PV**.

Avec PV = 800 000 € et EV = 680 000 € : SV = −120 000 € et SPI = 0,85.

> [!attention] Le SV est exprimé en valeur budgétée, pas en jours de retard. Un SPI de 0,85 ne prouve pas une fin de projet avec 15 % de retard calendaire.

### Prévision Agile

Avec 120 points d'effort restants et une vélocité de 30 points par sprint, prévoir environ **4 sprints**, si capacité et périmètre restent comparables.

## 11. Vérifier les résultats

Examiner la réalisation des jalons, la fiabilité des prévisions et la capacité à détecter et traiter les écarts. Un Gantt élégant ne garantit pas un échéancier réaliste.

## 12. Mémo de calcul

| Calcul | Formule |
|---|---|
| Fin au plus tôt | EF = ES + durée |
| Début au plus tard | LS = LF − durée |
| Marge totale | LS − ES |
| Marge libre | min ES successeurs − EF |
| PERT | (O + 4M + P) / 6 |
| SV | EV − PV |
| SPI | EV / PV |
| Sprints | Backlog / vélocité |

## Références

Guide PMBOK 8e édition, domaine de performance 2.3, pages 48–61. Contenu pédagogique reconstitué à partir du cours visible dans cette conversation ; les éléments interactifs d'origine ne sont pas reproduits mot à mot.`}
];
