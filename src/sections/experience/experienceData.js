const REPORTS_PATH = "src/assets/docs/reports/";

export const EXPERIENCES = [
    {
        title: "Développeur web stagiaire",
        company: "DGT Concept",
        period: "JANVIER - MARS 2024",
        location: "Les Sables d'Olonne (85)",
        missions: [
            {
                title: "Développement d'une solution web de gestion de questionnaire pour l'organisme de formation AFPA",
                items: [
                    "Création et intégration de formulaires dynamiques, ",
                    "stockage et traitement des réponses utilisateurs dans une partie administration."
                ]
            },
            {
                title: "Modification et amélioration du LMS de DGT Concept",
                items: [
                    "Ajout de nouvelles fonctionnalités, ",
                    "intégration d'outils de formation (e-learning), ",
                    "ajout des services Zoom et BigBlueButton à la plateforme, ",
                    "correction de bugs et optimisation du code, ",
                    "tests et validation des fonctionnalités."
                ]
            },
            {
                title: "Recherche et intégration d'un outil de gestion de projet",
                items: [
                    "Analyse des besoins de l'entreprise, ",
                    "comparaison des solutions disponibles, ",
                    "Proposition et configuration de l'outil retenu."
                ]
            }
        ],
        reportLink: REPORTS_PATH + "report-dgt-2.pdf"
    },
    {
        title: "Développeur web stagiaire",
        company: "DGT Concept",
        period: "MAI - JUIN 2023",
        location: "Les Sables d'Olonne (85)",
        missions: [
            {
                title: "Création du site web de Sanako France avec WordPress",
                items: [
                    "Création des pages principales présentant les produits et services de l'entreprise, ",
                    "mise en place d'un formulaire de contact relié au CRM Sellsy, ",
                    "intégration d'une zone de téléchargement avec accès restreint."
                ]
            },
            {
                title: "Amélioration d'une extension WordPress (PHP)",
                items: [
                    "Adaptation du code pour un nouvel utilisateur, ",
                    "création d'un webservice pour la gestion des inscriptions, ",
                    "rédaction de documentations techniques & notices d'installation et d'utilisation."
                ]
            },
            {
                title: "Correction d'erreurs PHP sur une plateforme de formation",
                items: [
                    "Utilisation de Sentry pour identifier les erreurs, ",
                    "correction des bugs liés à la migration PHP 5 → PHP 7, ",
                    "suivi des modifications via Plesk et documentation des corrections."
                ]
            },
        ],
        reportLink: REPORTS_PATH + "report-dgt-1.pdf"
    }
]