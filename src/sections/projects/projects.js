const IMAGE_PATH = "src/assets/images/projects/";

export const PROJECTS = [
    {
        image: IMAGE_PATH + "hackat-web.png",
        technologies: "Symfony, Bootstrap",
        title: "Hackat'Web",
        description: "Projet de BTS SIO. Développement d'une application web permettant la gestion complète d'inscriptions à des hackathons: CRUD, favoris, gestion de comptes, sécurité...",
        github: "https://github.com/soniiix/hackathon/tree/master/hackatWeb",
        category: "WEB",
    },
    {
        image: IMAGE_PATH + "listdir.png",
        technologies: "Node JS, NPM",
        title: "listdir",
        description: "Création d'une commande permettant de lister en détail le contenu d'un répertoire. Publication sur NPM pour la rendre installable.",
        github: "https://github.com/soniiix/nodejs-listdir",
        category: "OTHER",
    },
    {
        image: IMAGE_PATH + "hackat-event.png",
        technologies: "Ionic, Express JS",
        title: "Hackat'Event",
        description: "Développement d'une application mobile permettant l'inscription à des hackathons et aux ateliers associés, ainsi que la gestion de favoris et l'ajout de commentaires.",
        github: "https://github.com/soniiix/hackathon/tree/master/hackatEvent",
        category: "MOBILE",
    },
    {
        image: IMAGE_PATH + "portfolio.png",
        technologies: "React JS, Tailwind CSS",
        title: "Portfolio",
        description: "Développement de mon portfolio avec React, dans le cadre de mon apprentissage de cette technologie. Création de la maquette avec Figma, et design du site avec Tailwind.",
        github: "https://github.com/soniiix/portfolio",
        category: "WEB",
    },
    {
        image: IMAGE_PATH + "enron-vizualizer.png",
        technologies: "Django, Python, JS",
        title: "Enron Vizualizer",
        description: "Projet de Licence Pro. Implémentation d'une application web pour visualiser les e-mails échangés lors de l'affaire Enron et création d'un script de peuplement de BDD.",
        github: "https://github.com/soniiix/enron-data-visualizer",
        category: "WEB",
    },
    {
        image: IMAGE_PATH + "afpadpc.png",
        technologies: "HTML, Bootstrap, JS",
        title: "AFPA DPC",
        description: "Mission de stage. Création d'une solution web de gestion de questionnaire destinés à des apprenants d'AFPA dans le cadre de la prévention contre les perturbateurs endocriniens.",
        github: "https://github.com/soniiix/QCLM_PEE",
        category: "WEB",
    },
];