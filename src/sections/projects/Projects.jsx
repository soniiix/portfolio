import { Title } from "../home/components/Title";
import { FilterButton } from "./components/FilterButton";
import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { PROJECTS } from "./projectsData.js"

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
        <section id="projects" className="scroll-mt-20 flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
            <div className="h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40">
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
                                key={project.title}
                                image={project.image}
                                title={project.title}
                                technologies={project.technologies}
                                description={project.description}
                                github={project.github}
                                name={project.name}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}