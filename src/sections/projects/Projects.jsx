import { motion } from "framer-motion";
import { Title } from "../home/components/Title";
import { FilterButton } from "./components/FilterButton";
import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { PROJECTS } from "./projectsData.js"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

export const CATEGORIES = [
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
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <Title size={"4xl"} title={"Mes réalisations"} />
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mt-7 max-[540px]:grid max-[540px]:grid-cols-2 flex flex-row gap-3"
                >
                    {CATEGORIES.map((category) =>
                        <FilterButton
                            key={category.value} 
                            title={category.label}
                            active={currentFilter === category.value}
                            value={category.value}
                            onClick={handleFilterClick}
                        />
                    )}        
                </motion.div>
                <motion.div 
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <div
                        key={currentFilter}
                        className="mt-6 hidden md:grid md:grid-cols-2 gap-9 xl:grid-cols-3">
                        {PROJECTS
                            .filter((project) => 
                                project.category === currentFilter || currentFilter === "ALL"
                            )
                            .map((project) => 
                                <ProjectCard 
                                    key={project.title}
                                    image={project.cover}
                                    title={project.title}
                                    technologies={project.technologies}
                                    description={project.summary}
                                    github={project.github}
                                    name={project.name}
                                />
                            )
                        }
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="mt-6 md:hidden"
                >
                    <Swiper 
                        key={currentFilter}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        spaceBetween={30}
                    >
                        {PROJECTS
                            .filter((project) => 
                                project.category === currentFilter || currentFilter === "ALL"
                            )
                            .map((project) => 
                                <SwiperSlide key={project.title}>
                                    <ProjectCard
                                        key={project.title}
                                        image={project.cover}
                                        title={project.title}
                                        technologies={project.technologies}
                                        description={project.summary}
                                        github={project.github}
                                        name={project.name}
                                        className="h-[460px]"
                                    />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}