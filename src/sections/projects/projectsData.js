const IMAGE_PATH = "src/assets/images/projects/";

export const PROJECTS = [
    {
        name: "hackat-web",
        cover: IMAGE_PATH + "hackat-web/cover.png",
        technologies: ["Symfony", "Bootstrap"],
        title: "Hackat'Web",
        summary: "Projet de BTS SIO. Développement d'une application web permettant la gestion complète d'inscriptions à des hackathons: CRUD, favoris, gestion de comptes, sécurité...",
        images: [],
        context: `Lors de ma 2ème année de BTS SIO, l'un des objectifs majeurs était la réalisation d'un projet métier concret. Celui-ci portait sur le développement de deux applications complémentaires en rapport avec l'organisations d'hackathons : une application web nommée "HackatWeb" et une application mobile nommée "Hackat'Event". C'est sur la première, HackatWeb, que je vais me concentrer ici.

\\
Le projet s'appuyait sur [ce document](/src/assets/docs/subject-hackathon.pdf), qui décrit le contexte, les attentes du commanditaire fictif, l'organisation générale ainsi que les besoins fonctionnels sous forme de user stories. Il a fallu adopter une approche agile pour répondre à ces besoins : chaque fonctionnalité était développée progressivement, selon des sprints.

\\
Le but principal de l'application est de permettre la consultation des informations sur les hackathons et l'inscription à ces derniers. L'application a été développée avec le framework MVC [Symfony](https://symfony.com/).`,
description: `Dans un premier temps, une attention particulière a été portée à la conception de la base de données : les entités ont été modélisées pour respecter le mieux possible le contexte, en définissant les interactions possibles (inscriptions, favoris, participants, hackathons) tout en assurant la normalisation, et la facilité d'évolution. Par exemple, l'adresse d'un hackathon est découpée en plusieurs champs (rue, code postal, ville) pour faciliter les traitements futurs.

\\
Parmi les pages principales, on retrouve : 
- une page d'accueil présentant Hackat'Agence
- une liste de hackathons avec tri, recherche et affichage détaillé
- un système d'inscription soumis à des conditions (places disponibles, dates, non-inscription préalable)
- un espace "Mes hackathons" regroupant les inscriptions et favoris du participant connecté.

\\
L'architecture de l'application respecte le modèle MVC. Elle est pensée pour séparer clairement la logique métier, la gestion des données et l'affichage, permettant ainsi une meilleure maintenabilité. L'usage de composants Symfony comme [Security](https://symfony.com/doc/current/security.html) et [Form](https://symfony.com/doc/current/forms.html) a permis d'implémenter un système d'authentification robuste (mots de passe hashés, redirections sécurisées) et des formulaires fiables. Le front, enrichi avec Bootstrap et JavaScript, offre une navigation fluide, avec par exemple une recherche de hackathons en temps réel sans rechargement de page.

\\
Le projet a été mené de manière agile avec Trello, sur une VM Debian configurée pour refléter un environnement de production. Cette expérience nous a permis d'aller au-delà d'une simple implémentation technique en abordant des problématiques de conception, de sécurité, et de gestion de projet, proches de celles rencontrées dans un contexte professionnel.`,
        github: "https://github.com/soniiix/hackathon/tree/master/hackatWeb",
        category: "WEB",
        contextType: "school",
        location: "Les Sables d'Olonne",
        date: "2024",
        teamwork: true
    },
    {
        name: "listdir",
        cover: IMAGE_PATH + "listdir/cover.png",
        technologies: ["Node JS", "NPM"],
        title: "listdir",
        summary: "Création d'une commande permettant de lister en détail le contenu d'un répertoire. Publication sur NPM pour la rendre installable.",
        images: [],
        context: `Souhaitant approfondir mes connaissances en Node.js, j'ai visionné plusieurs vidéos de Grafikart. L'une d'elles [aborde la lecture et l'écriture de fichiers](https://youtu.be/cT6b6_XzFmI?si=ksSNYuQ3G89FQnLq), un sujet qui m'a particulièrement captivé.

\\
Après avoir réalisé le TP proposé dans la vidéo, je me suis dit : et pourquoi ne pas aller plus loin ? J'ai donc eu l'idée d'améliorer l'exercice en ajoutant la possibilité de lister le contenu de n'importe quel répertoire. Puis, je me suis demandé : et si je pouvais en faire une commande globale ? Une sorte d'alternative à \`ls\` sur Linux ou \`dir\` sur Windows, mais écrite en JavaScript.

\\
J'ai trouvé ce défi intéressant, car ce genre d'outil est généralement développé en bash. C'était donc l'occasion de sortir de l'ordinaire et d'explorer une autre approche avec Node.js. Je me suis donc lancé dans l'expérience.`,
        description: `J'ai créé cette commande pour offrir une alternative simple et esthétique aux commandes classiques de listing de fichiers comme \`ls\` ou \`dir\`. Le but est de pouvoir explorer rapidement n'importe quel dossier du système, avec un affichage structuré et coloré directement dans le terminal.

\\
Dès son exécution, listdir analyse le chemin spécifié (ou le dossier courant par défaut), en récupérant des informations précises sur chaque élément : type (fichier ou dossier), taille, et date de dernière modification. Les données sont ensuite affichées sous forme de tableau, avec une attention particulière portée à l'alignement des colonnes, la lisibilité, et les couleurs, grâce à la librairie [chalk](https://www.npmjs.com/package/chalk).

\\
Un argument optionnel \`-a\` permet également d'afficher les fichiers cachés, ce qui rend l'outil plus flexible selon les besoins. La commande gère aussi les cas de répertoires vides ou inexistants, en affichant des messages clairs et informatifs.

\\
Techniquement, listdir exploite les modules natifs de Node.js pour lire le système de fichiers, enrichis de quelques fonctions personnalisées comme le formatage des tailles ou la coloration des noms de dossiers.
\\
Ce projet m'a permis de consolider mes bases en Node.js tout en découvrant les bonnes pratiques liés à la publication sur NPM.`,
        github: "https://github.com/soniiix/nodejs-listdir",
        category: "OTHER",
        contextType: "personal",
        location: "Angers",
        date: "2025",
        teamwork: false
    },
    {
        name: "hackat-event",
        cover: IMAGE_PATH + "hackat-event/cover.png",
        technologies: ["Ionic, Express JS"],
        title: "Hackat'Event",
        summary: "Développement d'une application mobile permettant l'inscription à des hackathons et aux ateliers associés, ainsi que la gestion de favoris et l'ajout de commentaires.",
        images: [],
        context: `Lors de ma 2ème année de BTS SIO, l'un des objectifs majeurs était la réalisation d'un projet métier concret. Celui-ci portait sur le développement de deux applications complémentaires en rapport avec l'organisations d'hackathons : une application web nommée "HackatWeb" et une application mobile nommée "Hackat'Event". C'est sur la deuxième, Hackat'Event, que je vais me concentrer ici.

\\
Le projet s'appuyait sur [ce document](/src/assets/docs/subject-hackathon.pdf), qui décrit le contexte, les attentes du commanditaire fictif, l'organisation générale ainsi que les besoins fonctionnels sous forme de user stories. Il a fallu adopter une approche agile pour répondre à ces besoins : chaque fonctionnalité était développée progressivement, selon des sprints.

\\
Le but principal de l'application est de permettre la consultation des informations sur les hackathons et l'inscription aux ateliers liés aux hackathons. L'application a été développée avec le framework [Ionic](https://ionicframework.com/). Un point important du projet est le développement d'un webservice ainsi qu'une API.`,
        description: `Complémentaire de Hackat'Web, l'application mobile se concentre sur la gestion des ateliers liés aux hackathons : affichage des événements, inscription, commentaires, système de favoris et espace dédié. L'un des éléments majeurs du projet a été la conception et le développement complet d'une API REST avec [Express.js](https://expressjs.com/) (framework Node.js), servant d'interface entre la base de données et l'application mobile.

\\
Cette API, développée en Node.js, expose différentes routes (GET/POST) permettant de récupérer les hackathons, les ateliers liés, les commentaires ou encore de gérer les inscriptions. Elle a été pensée pour être claire, évolutive et facilement intégrable au front grâce à un service Ionic dédié qui centralise tous les appels HTTP.

\\
La base de données utilise un modèle en "Single Table Inheritance" pour représenter les différents types d'événements (conférences, ateliers) dans une seule table, avec un champ discriminant. Ce choix structurel permet une gestion souple tout en conservant une organisation cohérente et logique des données.

\\
Parmi les fonctionnalités clés :
- liste des hackathons et ateliers liés
- consultation détaillée d'un atelier
- formulaire d'inscription connecté à l'API
- système de commentaires associé à chaque atelier
- gestion des favoris via stockage local (non persistant)
- espace favoris mis à jour dynamiquement

\\
Le projet a été mené selon une approche agile (Trello) et déployé sur une VM Debian configurée pour simuler un environnement de production. L'application repose sur une architecture clairement séparée entre le front-end et le back-end, ce qui m'a permis de bien appréhender les échanges entre services web.

\\
Le développement en TypeScript, m'a permis d'écrire un code plus robuste et structuré, avec une meilleure gestion des types et des erreurs. Ce projet a ainsi renforcé mes compétences en développement mobile hybride, en conception d'API REST, et en modélisation de données, dans un cadre proche des attentes professionnelles.`,
        github: "https://github.com/soniiix/hackathon/tree/master/hackatEvent",
        category: "MOBILE",
        contextType: "school",
        location: "Les Sables d'Olonne",
        date: "2023/2024",
        teamwork: false
    },
    {
        name: "portfolio",
        cover: IMAGE_PATH + "portfolio/cover.png",
        technologies: ["React JS", "Tailwind CSS"],
        title: "Portfolio",
        summary: "Développement de mon portfolio avec React, dans le cadre de mon apprentissage de cette technologie. Création de la maquette avec Figma, et design du site avec Tailwind.",
        images: [],
        context: `Dans le cadre de mon apprentissage de [React](https://react.dev/), j'ai entrepris le développement complet de mon portfolio afin de mettre en valeur mes projets et compétences de manière moderne et personnalisée, tout en améliorant mes compétences de cette technologie.

\\
Avant de coder quoi que ce soit, j'ai d'abord créé une maquette sur Figma, ce qui m'a permis de structurer visuellement les différentes sections du site et de réfléchir à l'expérience utilisateur. Pour le design, j'ai choisi d'utiliser Tailwind CSS, un framework CSS utilitaire qui m'a offert une grande flexibilité et une bonne rapidité d'intégration.`,
        description: "*En cours*",
        /*        
        conclusion - Ce projet a été l'occasion pour moi d'explorer les concepts clés de React mais aussi de routing avec React Router. J'ai également travaillé sur la gestion des données dynamiques pour afficher les projets depuis un fichier JSON, et sur l'adaptabilité mobile pour assurer une expérience fluide sur tous les écrans.",
        */
        github: "https://github.com/soniiix/portfolio",
        category: "WEB",
        contextType: "personal",
        location: "Angers",
        date: "2025",
        teamwork: false
    },
    {
        name: "enron-vizualizer",
        cover: IMAGE_PATH + "enron-vizualizer/cover.png",
        technologies: ["Django", "Python", "JS"],
        title: "Enron Vizualizer",
        summary: "Projet de Licence Pro. Implémentation d'une application web pour visualiser les e-mails échangés lors de l'affaire Enron et création d'un script de peuplement de BDD.",
        images: [],
        context: `L'affaire Enron est un des plus grands scandales financiers des États-Unis, mettant en lumière des pratiques de manipulation comptable et financière qui ont conduit à la faillite de l'entreprise en 2001. Au cœur de cette affaire, des milliers d'e-mails échangés entre les employés d'Enron ont servi d'indice pour comprendre les dynamiques internes de l'entreprise et l'implication de ses dirigeants.

\\
Dans le cadre de ma Licence Professionnelle, le deuxième projet d'année visait à implémenter une application web permettant de visualiser et analyser les informations contenues dans les e-mails échangés entre les employés d'Enron, ainsi que de faciliter l'exploration de la base de données des messages. Le projet était concentré sur l'analyse des interactions, des relations et des événements clés qui ont conduit à ce scandale.

\\
L'objectif principal est l'implémentation d'une application web pour visualiser des informations pertinentes contenus les e-mails échangés entre les employés d'Enron (dont quelques externes). Un deuxième objectif est le développement d'un script d'automatisation du peuplement de la base de données, à partir des fichiers (texte plain) contenus dans le jeu de données (20 Go approximativement).`,
        description: "*En cours*",
        github: "https://github.com/soniiix/enron-data-visualizer",
        category: "WEB",
        contextType: "school",
        location: "Angers",
        date: "2025",
        teamwork: true
    },
    {
        name: "afpa-dpc",
        cover: IMAGE_PATH + "afpadpc/cover.png",
        technologies: ["HTML", "Bootstrap", "JS"],
        title: "AFPA DPC",
        summary: "Mission de stage. Création d'une solution web de gestion de questionnaire destinés à des apprenants d'AFPA dans le cadre de la prévention contre les perturbateurs endocriniens.",
        images: [],
        context: `Lors de mon stage de 2ème année de BTS SIO, au sein de [DGT Concept](https://dgt-concept.com/) une entreprise spécialisée dans le développement de plateformes e-learning, j'ai eu comme mission de dématérialiser un questionnaire distribué aux apprenants de l'organisme de formation AFPA, dans le but d'en faciliter l'accès et d'en améliorer l'exploitation.

\\
L'AFPA utilisant le LMS développé par DGT Concept, l'objectif était de créer une extension intégrée à la plateforme. Cette extension devait permettre aux apprenants, directement depuis leur espace de formation, de consulter et remplir un questionnaire personnalisé en fonction de leur profil. Une fois les réponses saisies, celles-ci devaient être récupérables par le client via une interface dédiée, afin de pouvoir en assurer le suivi et l'analyse.`,
        description: `Après une phase de réflexion sur la structure de la base de données et le format des questions, le projet a été développé en local via Wamp, avec gestion de version sur GitHub. L'intégration s'est faite dans le LMS de l'AFPA, en s'appuyant sur un webservice existant pour personnaliser dynamiquement le questionnaire selon le profil de chaque utilisateur.

\\
Parmi les principales fonctionnalités :
- questionnaire dynamique divisé en plusieurs catégories (alimentation, produits ménagers, etc.)
- modification des réponses à tout moment avec validation individuelle ou globale
- interface d'administration sécurisée avec authentification
- export des réponses au format CSV / XLSX
- système de recherche et filtres dans les réponses grâce à Bootstrap Tables
- réutilisation de modèles de page pour factoriser le code

\\
Le site a été entièrement développé en HTML, CSS, JS et PHP, en suivant une logique modulaire. Ce projet m'a permis de travailler sur une solution complète, en prenant en compte les contraintes réelles d'intégration dans un environnement existant, de clarté du code et de gestion sécurisée des données.`,
        github: "https://github.com/soniiix/QCLM_PEE",
        category: "WEB",
        contextType: "professional",
        location: "Les Sables d'Olonne",
        date: "2023",
        teamwork: true
    },
];