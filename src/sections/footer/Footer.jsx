import { IoLogoGithub } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue font-manrope font-medium">
            <div className="h-full w-full max-w-[1920px] flex flex-col items-center gap-5 py-8 text-white">
                <div className="flex flex-row items-center gap-10">
                    <a
                        href="https://github.com/soniiix"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray hover:cursor-pointer"
                        aria-label="Lien vers mon profil Github"
                    >
                        <IoLogoGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/quentin-couzinet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Lien vers mon profil LinkedIn"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray hover:cursor-pointer">
                            <GrLinkedinOption size={21}/>
                        </div>
                    </a>
                </div>
                <span>
                    2025 © Quentin Couzinet
                </span>
                <Link to="/privacy-policy" className="underline underline-offset-4 hover:text-blue active:text-blue transition-colors duration-200">
                    Politique de confidentialité
                </Link>
            </div>
        </footer>
    );
}