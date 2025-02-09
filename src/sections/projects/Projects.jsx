import { Title } from "../home/components/Title";
import { FilterButton } from "./components/FilterButton";
import { useState } from "react";

const PROJECTS = [
    {
        technologies: "Symfony, Bootstrap",
        title: "Hackat'Web",
        description:
            "Projet de BTS SIO. Développement d'une application web permettant la gestion complète d'inscriptions à des hackathons : CRUD, favoris, gestion de comptes, sécurité...",
        github: "https://github.com/soniiix/hackathon/tree/master/hackatWeb",
        category: "WEB",
    },
    {
        technologies: "Node JS, NPM",
        title: "listdir",
        description:
            "Création d'une commande permettant de lister en détail le contenu d'un répertoire. Publication sur NPM pour la rendre installable.",
        github: "https://github.com/soniiix/nodejs-listdir",
        category: "OTHER",
    },
];

const CATEGORIES = [
    {label: "Tout", value: "ALL"},
    {label: "Web", value: "WEB"},
    {label: "Mobile", value: "MOBILE"},
    {label: "Autre", value: "OTHER"}
]

export function Projects() {
    const [currentFilter, setCurrentFilter] = useState("ALL");

    const handleFilterClick = (e) => {
        setCurrentFilter(e.target.value);
    };

    return (
        <section className="h-full w-full bg-dark-blue px-8 py-20 text-white md:px-24 lg:px-40">
            <Title size={"4xl"} title={"Mes réalisations"} />
            <div className="mt-7 flex flex-row gap-3">
                {CATEGORIES.map((category) =>
                    <FilterButton
                        key={category.value} 
                        title={category.label}
                        active={currentFilter === category.value}
                        value={category.value}
                        onClick={handleFilterClick}
                    />
                )}        
            </div>
            <div className="grid grid-cols-3">
                {PROJECTS
                    .filter((product) => 
                        product.category === currentFilter || currentFilter === "ALL"
                    )
                    .map((product) => 
                        //@TODO add an AboutCard component
                        product.title
                    )
                }
            </div>
        </section>
    );
}