import { motion } from "framer-motion";
import { Title } from "../home/components/Title";
import { AboutCard } from "./components/AboutCard";
import { RiCodeSSlashFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";

const educationHistory = [
    "2018 : Stage de 3ème en assistance et services informatiques, première expérience professionnelle.",
    "2022 : BAC général spécialités Numériques et Sciences Informatiques, mention Assez Bien.",
    "2024 : BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.",
    "2025 : Licence Professionnelle Métiers de l'Informatique, parcours applications web."
];

export function About() {
    return (
        <section id="about" className="scroll-mt-20 flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
            <div className="h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40 ">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <Title size={"4xl"} title={"À propos"} />
                </motion.div>
                <motion.div
                    className="mt-7 grid w-full grid-cols-1 gap-9 lg:grid-cols-2"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <AboutCard
                        body={[
                            "Bonjour 👋  moi c'est Quentin, je suis étudiant en MBA Développeur Fullstack chez MyDigitalSchool Angers.",
                            <br />,
                            <br />,
                            "J'ai intégré le ",
                            <a 
                                href='https://grouperoyer.com' 
                                className="underline underline-offset-4 hover:text-blue active:text-blue transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Groupe Royer
                            </a>,
                            " en tant qu'alternant développeur web, où je contribue au développement et à la maintenance de plateformes Prestashop et de projets web liés au service e-commerce.",
                        ]}
                        width={2}
                    />
                    <AboutCard
                        title={"Mon parcours scolaire"}
                        body={[
                            <ul className="space-y-3 min-[1074px]:space-y-8">
                                {educationHistory.map((stage, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="me-3 mt-1 h-3.5 w-3.5 shrink-0 text-blue">
                                            <RiCodeSSlashFill />
                                        </div>
                                        {stage}
                                    </li>
                                ))}
                            </ul>,
                        ]}
                    />
                    <div className="flex flex-col gap-9">
                        <AboutCard
                            title={"Mes objectifs"}
                            body={[
                                "Mon objectif est de devenir un Développeur web polyvalent, capable de gérer aussi bien le front que le back-end sur des projets concrets et variés.",
                                <br />,
                                <br />,
                                "En alternance au sein du Groupe Royer, je cherche à renforcer mes compétences techniques et à contribuer activement aux projets web de l'équipe."
                            ]}
                        />
                        <AboutCard
                            body={[
                                <div className="flex flex-row items-center justify-around">
                                    <a
                                        className="group relative flex flex-row items-center justify-between gap-2 sm:gap-3"
                                        href="https://github.com/soniiix"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 group-hover:after:w-full">
                                            Github
                                        </span>
                                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-row items-center justify-center rounded-full bg-white text-blue hover:cursor-pointer ml-1 sm:ml-2 px-[8px]">
                                            <IoLogoGithub size={30} />
                                        </div>
                                    </a>
                                    <a
                                        className="group relative flex flex-row items-center justify-between gap-2 sm:gap-3"
                                        href="https://www.linkedin.com/in/quentin-couzinet/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue after:transition-all after:duration-300 group-hover:after:w-full">
                                            LinkedIn
                                        </span>
                                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-row items-center justify-center rounded-full bg-white text-blue hover:cursor-pointer ml-1 sm:ml-2 px-[10px]">
                                            <GrLinkedinOption size={28} />
                                        </div>
                                    </a>
                                </div>,
                            ]}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}