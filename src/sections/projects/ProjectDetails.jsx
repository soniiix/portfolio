import { useParams, Navigate } from "react-router";
import ReactMarkdown from "react-markdown";
import { Header } from "../home/components/Header";
import { Footer } from "../footer/Footer"
import { PROJECTS } from "./projectsData";
import { GoStack, GoTag, GoClock, GoBriefcase, GoMortarBoard, GoHome, GoPeople, GoPerson, GoLocation  } from "react-icons/go";
import { RxDownload, RxArrowRight, RxFigmaLogo } from "react-icons/rx";
import { CgNpm } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { CATEGORIES } from "./Projects";
import Carousel from "./components/Carousel";
import { motion } from "framer-motion";

const PROJECTS_TYPE = [
    {value: "professional", label: "Professionnel", icon: <GoBriefcase className="mt-0.5"/>},
    {value: "school", label: "Scolaire", icon: <GoMortarBoard className="mt-0.5"/>},
    {value: "personal", label: "Personnel", icon: <GoHome className="mt-0.5"/>}
]

export function ProjectDetails() {
    const {projectName} = useParams();

    const project = PROJECTS.find(project => project.name == projectName);

    if (!project) return <Navigate to="/" replace />;

    const nextProject = PROJECTS.indexOf(project) == PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[PROJECTS.indexOf(project) + 1];
    const projectType = PROJECTS_TYPE.find(type => type.value == project.contextType);

    let referenceTitle;
    let referenceDescription;
    let referenceIcon;
    switch(project.reference.name){
        case "report":
            referenceTitle = "Rapport";
            referenceDescription = "Télécharger";
            referenceIcon = <RxDownload size={49}/>
            break;
        case "npm":
            referenceTitle = "NPM";
            referenceDescription = "Voir le package";
            referenceIcon = <CgNpm size={49}/>
            break;
        case "figma":
            referenceTitle = "Figma";
            referenceDescription = "Maquette";
            referenceIcon = <RxFigmaLogo size={49}/>
            break;
    }

    return (
        <>
            <Header baseScrolled={true}/>
            <div className="flex justify-center bg-linear-to-r from-[#0240C7] to-[#42A3EA] h-full text-white">
                <div className="w-full max-w-[1920px] px-8 py-18 md:px-24 lg:px-40">
                    {/*
                    <span className="text-sm text-[##fffff5db] font-medium font-manrope">{"Projets > " + project.title}</span>
                    */}
                    <motion.h1
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="font-manrope font-extrabold text-[32px]"
                    >
                        {project.title}
                    </motion.h1>
                </div>
            </div>
            <div className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 font-manrope h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40">
                    <aside className="flex flex-col">
                        <motion.h2
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="text-2xl font-bold mb-5"
                        >
                            À&nbsp;propos
                        </motion.h2>
                        <motion.div 
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="flex flex-col min-[560px]:max-lg:grid min-[560px]:grid-cols-2 min-[850px]:grid-cols-3 px-8 py-5 bg-gray h-fit rounded-2xl"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <GoClock className="mt-0.5"/>
                                <span>{project.date}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <GoTag className="mt-0.5"/>
                                <span>
                                    {CATEGORIES.find(category => category.value == project.category).label}
                                </span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <GoStack className="mt-0.5"/>
                                <span className="whitespace-nowrap">{project.technologies.join(", ")}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                {projectType.icon}
                                <span className="whitespace-nowrap">{projectType.label}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                {project.teamwork ? <GoPeople className="mt-0.5"/> : <GoPerson className="mt-0.5"/>}
                                <span className="whitespace-nowrap">{project.teamwork ? "Travail en équipe" : "Travail seul"}</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <GoLocation className="mt-0.5"/>
                                <span className="whitespace-nowrap">{project.location}</span>
                            </div>
                        </motion.div>
                    </aside>
                    <div className="flex flex-col">
                        <motion.h2 
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="text-2xl font-bold mb-4"
                        >
                            Contexte
                        </motion.h2>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <ReactMarkdown
                                components={{
                                    a: ({ node, ...props }) => (
                                    <a
                                        {...props}
                                        className="underline underline-offset-4 hover:text-blue transition-colors duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                    )
                                }}
                            >
                                {project.context}
                            </ReactMarkdown>
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <Carousel images={project.images}/>
                        </motion.div>
                        <h2 className="text-2xl font-bold my-4">
                            Description
                        </h2>
                        <span>
                            <ReactMarkdown
                                components={{
                                    a: ({ node, ...props }) => (
                                        <a
                                            {...props}
                                            className="underline underline-offset-4 hover:text-blue transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <ul
                                            {...props}
                                            className="list-disc list-inside marker:text-blue"
                                        />
                                    )
                                }}
                            >
                                {project.description}
                            </ReactMarkdown>
                        </span>
                        <h2 className="text-2xl font-bold mt-10 mb-5">
                            Voir plus
                        </h2>
                        <div className="flex flex-col min-[1390px]:flex-row gap-4 min-[1390px]:gap-9">
                            <motion.a
                                viewport={{ once: true }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                href={project.reference.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 transition-colors duration-200 flex flex-row items-center justify-between rounded-[22px] border-2 px-6 py-3 font-semibold text-blue hover:border-blue hover:bg-blue hover:text-white"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-xl font-bold text-white text-nowrap">{referenceTitle}</span>
                                    <span className="text-nowrap">{referenceDescription}</span>
                                </div>
                                {referenceIcon}
                            </motion.a>
                            <motion.a
                                viewport={{ once: true }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 transition-colors duration-200 flex flex-row items-center justify-between rounded-[22px] border-2 px-6 py-3 font-semibold text-blue hover:border-blue hover:bg-blue hover:text-white"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-xl font-bold text-white text-nowrap">Github</span>
                                    <span className="text-nowrap">Voir le dépôt</span>
                                </div>
                                <IoLogoGithub size={50}/>
                            </motion.a>
                            <motion.a
                                viewport={{ once: true }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                href={"/project/" + nextProject.name}
                                className="flex-1 transition-colors duration-200 flex flex-row items-center justify-between rounded-[22px] border-2 px-6 py-3 font-semibold text-blue hover:border-blue hover:bg-blue hover:text-white"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-xl font-bold text-white text-nowrap">{nextProject.title}</span>
                                    <span className="text-nowrap">Projet suivant</span>
                                </div>
                                <RxArrowRight size={50}/>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}