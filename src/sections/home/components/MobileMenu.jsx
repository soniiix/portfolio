import { useState } from "react";

const SECTIONS = [
    {
        title: "Accueil",
        anchorId: "#home",
    },
    {
        title: "À propos",
        anchorId: "#about",
    },
    {
        title: "Réalisations",
        anchorId: "#projects",
    },
    {
        title: "Expérience",
        anchorId: "#experience",
    },
];

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="z-10 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-blue hover:cursor-pointer hover:bg-btn-hover">
                <button
                    onClick={toggleMenu}
                    className="flex flex-col space-y-2 p-2 hover:cursor-pointer focus:outline-none"
                >
                    <span
                        className={`block h-0.5 w-6 rounded bg-white transition-transform ${
                            isOpen ? "translate-y-[5px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 rounded bg-white transition-transform ${
                            isOpen ? "-translate-y-[5px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            <div
                className={`fixed rounded-l-[16px] top-0 right-0 z-5 h-full w-58 transform bg-blue text-white shadow-lg transition-all duration-300 ${
                    isOpen ? "right-0" : "right-[-100%]"
                }`}
            >
                <div className="flex flex-col pt-30 pb-10 h-full w-full justify-between">
                    <div className="flex flex-col text-left">
                        {SECTIONS.map((section) => 
                            <a 
                                onClick={toggleMenu}
                                href={section.anchorId}
                                className="pl-16 py-5 w-full font-semibold hover:bg-btn-hover">
                                {section.title}
                            </a>
                        )}
                    </div>
                    <div className="flex items-center justify-center">
                    <a 
                        onClick={toggleMenu}
                        href="#contact"
                        className="rounded-[20px] bg-white text-blue px-[30px] py-[12px] font-bold hover:cursor-pointer">
                        Me contacter
                    </a>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}