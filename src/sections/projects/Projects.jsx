import { Title } from "../home/components/Title";
import { FilterButton } from "./components/FilterButton";
import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";

const PROJECTS = [
    {
        image: "src/assets/images/projects/hackat-web.png",
        technologies: "Symfony, Bootstrap",
        title: "Hackat'Web",
        description:
            "Projet de BTS SIO. Développement d'une application web permettant la gestion complète d'inscriptions à des hackathons: CRUD, favoris, gestion de comptes, sécurité...",
        github: "https://github.com/soniiix/hackathon/tree/master/hackatWeb",
        category: "WEB",
    },
    {
        image: "src/assets/images/projects/listdir.png",
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
            <div className="mt-7 max-[540px]:grid max-[540px]:grid-cols-2 flex flex-row gap-3">
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
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-9 xl:grid-cols-3">
                {PROJECTS
                    .filter((project) => 
                        project.category === currentFilter || currentFilter === "ALL"
                    )
                    .map((project) => 
                        <ProjectCard 
                            image={project.image}
                            title={project.title}
                            technologies={project.technologies}
                            description={project.description}
                            github={project.github}
                        />
                    )
                }
            </div>
        </section>
    );
}