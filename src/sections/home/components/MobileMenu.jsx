import { useEffect, useState } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';

const SECTIONS = [
    {
        title: "Accueil",
        anchorId: "/#home",
        icon: <IoHome />
    },
    {
        title: "À propos",
        anchorId: "/#about",
        icon: <FaUser/>
    },
    {
        title: "Réalisations",
        anchorId: "/#projects",
        icon: <RiStackFill style={{marginTop: "1px"}} size={18}/>
    },
    {
        title: "Expérience",
        anchorId: "/#experience",
        icon: <MdOutlineWork size={18}/>
    },
];

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    useEffect(() => {
        const handleScroll = () => {
            if(isOpen) {
                toggleMenu();
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isOpen])

    return (
        <>
            <div 
                onClick={toggleMenu}
                className="z-40 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-blue hover:cursor-pointer hover:bg-btn-hover focus:bg-btn-hover active:bg-btn-hover"
            >
                <button 
                    aria-label="Ouvrir le menu"
                    className="flex flex-col space-y-2 p-2 hover:cursor-pointer focus:outline-none"
                >
                    <span
                        className={`block h-[0.126rem] w-6 rounded bg-white transition-transform ${
                            isOpen ? "translate-y-[5px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-[0.126rem] w-6 rounded bg-white transition-transform ${
                            isOpen ? "-translate-y-[5px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            <div
                className={`fixed rounded-l-[16px] top-0 right-0 z-30 h-full w-58 transform bg-blue text-white shadow-lg transition-all duration-300 ${
                    isOpen ? "right-0" : "right-[-100%]"
                }`}
            >
                <div className="flex flex-col pt-30 pb-10 h-full w-full justify-between">
                    <ul className="font-semibold">
                        {SECTIONS.map((section, index) => (
                            <li key={index}>
                                <HashLink 
                                    smooth
                                    key={index}
                                    to={section.anchorId}
                                    onClick={toggleMenu}
                                    className="flex items-start pl-10 py-5 hover:cursor-pointer hover:bg-btn-hover focus:bg-btn-hover active:bg-btn-hover"
                                >
                                    <div className="me-8 mt-1 h-3.5 w-3.5 shrink-0">
                                        {section.icon}
                                    </div>
                                    {section.title}
                                </HashLink>
                            </li>
                        ))}
                        <li>
                            <a 
                                aria-label="Lien vers mon profil Github"
                                href="https://github.com/soniiix"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={toggleMenu}
                                className="flex items-start pl-10 py-5 hover:cursor-pointer hover:bg-btn-hover focus:bg-btn-hover active:bg-btn-hover"
                            >
                                <div className="me-8 mt-0.5 h-3.5 w-3.5 shrink-0">
                                    <IoLogoGithub size={20}/>
                                </div>
                                Github
                            </a>
                        </li>
                        <li>
                            <a 
                                aria-label="Lien vers mon profil LinkedIn"
                                href="https://www.linkedin.com/in/quentin-couzinet/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={toggleMenu}
                                className="flex items-start pl-10.5 py-5 hover:cursor-pointer hover:bg-btn-hover focus:bg-btn-hover active:bg-btn-hover"
                            >
                                <div className="me-8 mt-0.5 h-3.5 w-3.5 shrink-0">
                                    <GrLinkedinOption size={19}/>
                                </div>
                                LinkedIn
                            </a>
                        </li>
                    </ul>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <HashLink
                            smooth
                            to="/#contact"
                            onClick={toggleMenu}
                            className="rounded-full bg-white hover:bg-[#e6e6e6] focus:bg-[#e6e6e6] active:bg-[#e6e6e6] text-blue px-[30px] py-[12px] font-bold hover:cursor-pointer transition-colors duration-200"
                        >
                            Me contacter
                        </HashLink>
                    </div>
                </div>
            </div>
        </>
    );
}