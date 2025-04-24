import { motion } from "framer-motion";
import { Title } from "./Title";
import { TbDownload } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { HashLink } from 'react-router-hash-link';

export function Hero() {
    return (
        <div className="flex justify-center">
            <section className="flex w-full max-w-[1600px] flex-row items-center justify-around px-8 text-white max-[1210px]:text-center lg:pt-10 lg:pb-16 min-[1424px]:px-26">
                <div className="flex flex-col items-center justify-center py-40 min-[1210px]:items-start">
                    <motion.div
                        className="mt-5 grid w-full grid-cols-1 gap-y-3 font-manrope max-[1210px]:justify-center sm:flex sm:flex-row sm:gap-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <Title title="Quentin Couzinet" size="6xl" />
                    </motion.div>
                    <motion.span
                        className="mt-3 font-manrope text-2xl font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        Étudiant en Licence Professionnelle Métiers{" "}
                        <br className="max-sm:hidden" /> de l'Informatique, parcours Applications web.
                    </motion.span>
                    {/* ACTION BUTTONS */}
                    <motion.div
                        className="mt-5 grid w-full grid-cols-1 gap-y-3 font-manrope max-[1210px]:justify-center sm:flex sm:flex-row sm:gap-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <HashLink
                            smooth
                            to="/#projects"
                            className="flex flex-row items-center justify-center rounded-full bg-blue px-[30px] py-[12px] text-center font-bold hover:cursor-pointer hover:bg-btn-hover transition-colors duration-200"
                        >
                            Voir mes réalisations
                        </HashLink>
                        <a
                            href="/docs/resume.pdf"
                            download="CV_QuentinCouzinet.pdf"
                            className="flex flex-row items-start justify-center rounded-full bg-white px-[10px] py-[12px] font-bold text-nowrap text-blue hover:cursor-pointer hover:bg-[#e6e6e6] transition-colors duration-200 sm:ml-2 sm:px-[30px]"
                        >
                            <span className="md:hidden">Télécharger mon CV &nbsp;</span>
                            <span className="hidden md:block">Mon CV &nbsp;</span>
                            <TbDownload size={20} style={{ marginTop: 1 }} />
                        </a>
                        <a
                            href="https://github.com/soniiix"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex md:flex-row md:items-center md:justify-center rounded-full bg-white text-blue hover:cursor-pointer hover:bg-[#e6e6e6] transition-colors duration-200 ml-2 px-[10px]"
                            aria-label="Lien vers mon profil Github"
                        >
                            <IoLogoGithub size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/quentin-couzinet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex md:flex-row md:items-center md:justify-center rounded-full bg-white pb-0.5 text-blue hover:cursor-pointer hover:bg-[#e6e6e6] transition-colors duration-200 ml-2 px-[10px]"
                            aria-label="Lien vers mon profil LinkedIn"
                        >
                            <GrLinkedinOption size={28} />
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    className="hidden pt-3 min-[1210px]:flex min-[1210px]:flex-row min-[1210px]:items-center min-[1210px]:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <img
                        src="/images/code-snippet.png"
                        alt="Image de code JavaScript"
                        className="max-w-[500px]"
                    />
                </motion.div>
            </section>
        </div>
    );
}
