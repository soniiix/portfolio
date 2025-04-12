const IMAGE_PATH = "src/assets/images/projects/";

export const PROJECTS = [
    {
        name: "hackat-web",
        image: IMAGE_PATH + "hackat-web.png",
        technologies: ["Symfony", "Bootstrap"],
        title: "Hackat'Web",
        description: "Projet de BTS SIO. Développement d'une application web permettant la gestion complète d'inscriptions à des hackathons: CRUD, favoris, gestion de comptes, sécurité...",
        context: `Lors de ma 2ème année de BTS SIO, l'un des objectifs majeurs était la réalisation d'un projet métier concret. Celui-ci portait sur le développement de deux applications complémentaires en rapport avec l'organisations d'hackathons : une application web nommée "HackatWeb" et une application mobile nommée "Hackat'Event". C'est sur la première, HackatWeb, que je vais me concentrer ici.

\\
Le projet s'appuyait sur [ce document](/src/assets/docs/subject-hackathon.pdf), qui décrit le contexte, les attentes du commanditaire fictif, l'organisation générale ainsi que les besoins fonctionnels sous forme de user stories. Il a fallu adopter une approche agile pour répondre à ces besoins : chaque fonctionnalité était développée progressivement, selon des sprints.

\\
Le but principal de l'application est de permettre la consultation des informations sur les hackathons et l'inscription à ces derniers. L'application a été développée avec le framework MVC [Symfony](https://symfony.com/).`,
        github: "https://github.com/soniiix/hackathon/tree/master/hackatWeb",
        category: "WEB",
        contextType: "school",
        date: "2024",
        teamwork: true
    },
    {
        name: "listdir",
        image: IMAGE_PATH + "listdir.png",
        technologies: ["Node JS", "NPM"],
        title: "listdir",
        description: "Création d'une commande permettant de lister en détail le contenu d'un répertoire. Publication sur NPM pour la rendre installable.",
        context: `Souhaitant approfondir mes connaissances en Node.js, j'ai visionné plusieurs vidéos de Grafikart. L'une d'elles [aborde la lecture et l'écriture de fichiers](https://youtu.be/cT6b6_XzFmI?si=ksSNYuQ3G89FQnLq), un sujet qui m'a particulièrement captivé.

\\
Après avoir réalisé le TP proposé dans la vidéo, je me suis dit : et pourquoi ne pas aller plus loin ? J'ai donc eu l'idée d'améliorer l'exercice en ajoutant la possibilité de lister le contenu de n'importe quel répertoire. Puis, je me suis demandé : et si je pouvais en faire une commande globale ? Une sorte d'alternative à \`ls\` sur Linux ou \`dir\` sur Windows, mais écrite en JavaScript.

\\
J'ai trouvé ce défi intéressant, car ce genre d'outil est généralement développé en bash. C'était donc l'occasion de sortir de l'ordinaire et d'explorer une autre approche avec Node.js. Je me suis donc lancé dans l'expérience.`,
        github: "https://github.com/soniiix/nodejs-listdir",
        category: "OTHER",
        contextType: "personal",
        date: "2025",
        teamwork: false
    },
    {
        name: "hackat-event",
        image: IMAGE_PATH + "hackat-event.png",
        technologies: ["Ionic, Express JS"],
        title: "Hackat'Event",
        description: "Développement d'une application mobile permettant l'inscription à des hackathons et aux ateliers associés, ainsi que la gestion de favoris et l'ajout de commentaires.",
        context: `Lors de ma 2ème année de BTS SIO, l'un des objectifs majeurs était la réalisation d'un projet métier concret. Celui-ci portait sur le développement de deux applications complémentaires en rapport avec l'organisations d'hackathons : une application web nommée "HackatWeb" et une application mobile nommée "Hackat'Event". C'est sur la deuxième, Hackat'Event, que je vais me concentrer ici.

\\
Le projet s'appuyait sur [ce document](/src/assets/docs/subject-hackathon.pdf), qui décrit le contexte, les attentes du commanditaire fictif, l'organisation générale ainsi que les besoins fonctionnels sous forme de user stories. Il a fallu adopter une approche agile pour répondre à ces besoins : chaque fonctionnalité était développée progressivement, selon des sprints.

\\
Le but principal de l'application est de permettre la consultation des informations sur les hackathons et l'inscription aux ateliers liés aux hackathons. L'application a été développée avec le framework [Ionic](https://ionicframework.com/). Un point important du projet est le développement d'un webservice ainsi qu'une API.`,
        github: "https://github.com/soniiix/hackathon/tree/master/hackatEvent",
        category: "MOBILE",
        contextType: "school",
        date: "2023/2024",
        teamwork: false
    },
    {
        name: "portfolio",
        image: IMAGE_PATH + "portfolio.png",
        technologies: ["React JS", "Tailwind CSS"],
        title: "Portfolio",
        description: "Développement de mon portfolio avec React, dans le cadre de mon apprentissage de cette technologie. Création de la maquette avec Figma, et design du site avec Tailwind.",
        context: `Dans le cadre de mon apprentissage de [React](https://react.dev/), j'ai entrepris le développement complet de mon portfolio afin de mettre en valeur mes projets et compétences de manière moderne et personnalisée, tout en améliorant mes compétences de cette technologie.

\\
Avant de coder quoi que ce soit, j'ai d'abord créé une maquette sur Figma, ce qui m'a permis de structurer visuellement les différentes sections du site et de réfléchir à l'expérience utilisateur. Pour le design, j'ai choisi d'utiliser Tailwind CSS, un framework CSS utilitaire qui m'a offert une grande flexibilité et une bonne rapidité d'intégration.`,
        /*        
        work: "Ce projet a été l'occasion pour moi d'explorer les concepts clés de React mais aussi de routing avec React Router. J'ai également travaillé sur la gestion des données dynamiques pour afficher les projets depuis un fichier JSON, et sur l'adaptabilité mobile pour assurer une expérience fluide sur tous les écrans.",
        */
        github: "https://github.com/soniiix/portfolio",
        category: "WEB",
        contextType: "personal",
        date: "2025",
        teamwork: false
    },
    {
        name: "enron-vizualizer",
        image: IMAGE_PATH + "enron-vizualizer.png",
        technologies: ["Django", "Python", "JS"],
        title: "Enron Vizualizer",
        description: "Projet de Licence Pro. Implémentation d'une application web pour visualiser les e-mails échangés lors de l'affaire Enron et création d'un script de peuplement de BDD.",
        context: `L'affaire Enron est un des plus grands scandales financiers des États-Unis, mettant en lumière des pratiques de manipulation comptable et financière qui ont conduit à la faillite de l'entreprise en 2001. Au cœur de cette affaire, des milliers d'e-mails échangés entre les employés d'Enron ont servi d'indice pour comprendre les dynamiques internes de l'entreprise et l'implication de ses dirigeants.

\\
Dans le cadre de ma Licence Professionnelle, le deuxième projet d'année vise à implémenter une application web permettant de visualiser et analyser les informations contenues dans les e-mails échangés entre les employés d'Enron, ainsi que de faciliter l'exploration de la base de données des messages. Le projet se concentrera sur l'analyse des interactions, des relations et des événements clés qui ont conduit à ce scandale.

\\
L'objectif principal est l'implémentation d'une application web pour visualiser des informations pertinentes contenus les e-mails échangés entre les employés d'Enron (dont quelques externes). Un deuxième objectif est le développement d'un script d'automatisation du peuplement de la base de données, à partir des fichiers (texte plain) contenus dans le jeu de données (20 Go approximativement).`,
        github: "https://github.com/soniiix/enron-data-visualizer",
        category: "WEB",
        contextType: "school",
        date: "2025",
        teamwork: true
    },
    {
        name: "afpa-dpc",
        image: IMAGE_PATH + "afpadpc.png",
        technologies: ["HTML", "Bootstrap", "JS"],
        title: "AFPA DPC",
        description: "Mission de stage. Création d'une solution web de gestion de questionnaire destinés à des apprenants d'AFPA dans le cadre de la prévention contre les perturbateurs endocriniens.",
        context: `Lors de mon stage de 2ème année de BTS SIO, au sein de [DGT Concept](https://dgt-concept.com/) une entreprise spécialisée dans le développement de plateformes e-learning, j'ai eu comme mission de dématérialiser un questionnaire distribué aux apprenants de l'organisme de formation AFPA, dans le but d'en faciliter l'accès et d'en améliorer l'exploitation.

\\
L'AFPA utilisant le LMS développé par DGT Concept, l'objectif était de créer une extension intégrée à la plateforme. Cette extension devait permettre aux apprenants, directement depuis leur espace de formation, de consulter et remplir un questionnaire personnalisé en fonction de leur profil. Une fois les réponses saisies, celles-ci devaient être récupérables par le client via une interface dédiée, afin de pouvoir en assurer le suivi et l'analyse.`,
        github: "https://github.com/soniiix/QCLM_PEE",
        category: "WEB",
        contextType: "professional",
        date: "2023",
        teamwork: true
    },
];