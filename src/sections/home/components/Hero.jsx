import { Title } from "./Title";
import { TbDownload } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";

export function Hero() {
    return (
        <div className="flex justify-center">
            <section className="w-full max-w-[1920px] grid grid-cols-1 gap-0 px-8 text-white max-[1210px]:text-center min-[1210px]:grid-cols-2 lg:pt-10 lg:pb-16 xl-2:px-26">
            <div className="flex flex-col items-center justify-center py-40 min-[1210px]:items-start min-[1210px]:pl-10">
                <Title title="Quentin Couzinet" size="6xl" />
                <span className="mt-3 font-manrope text-2xl font-bold">
                    Étudiant en Licence Professionnelle Métiers{" "}
                    <br className="max-sm:hidden"/> de l'Informatique, parcours
                    Applications web.
                </span>
                {/* ACTION BUTTONS */}
                <div className="mt-5 grid w-full grid-cols-5 gap-x-2 gap-y-3 font-manrope max-[1210px]:justify-center sm:flex sm:flex-row sm:gap-0">
                    <a
                        href="#projects"
                        className="col-span-5 flex flex-row items-center justify-center rounded-[20px] bg-blue px-[30px] py-[12px] text-center font-bold hover:cursor-pointer hover:bg-btn-hover"
                    >
                        Voir mes réalisations
                    </a>
                    <a
                        href="src/assets/docs/resume.pdf"
                        download="CV_QuentinCouzinet.pdf"
                        className="col-span-3 flex flex-row items-start justify-center rounded-[20px] bg-white px-[10px] py-[12px] font-bold text-nowrap text-blue hover:cursor-pointer hover:bg-[#e6e6e6] sm:ml-2 sm:px-[30px]"
                    >
                        Mon CV &nbsp;
                        <TbDownload size={20} style={{ marginTop: 1 }} />
                    </a>
                    <a
                        href="https://github.com/soniiix"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center rounded-[20px] bg-white text-blue hover:cursor-pointer hover:bg-[#e6e6e6] sm:ml-2 sm:px-[10px]"
                    >
                        <IoLogoGithub size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/quentin-couzinet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center rounded-[20px] bg-white pb-0.5 text-blue hover:cursor-pointer hover:bg-[#e6e6e6] sm:ml-2 sm:px-[10px]"
                    >
                        <GrLinkedinOption size={28} />
                    </a>
                </div>
            </div>
            <div className="hidden pt-3 min-[1210px]:flex min-[1210px]:flex-row min-[1210px]:items-center min-[1210px]:justify-start">
                <img src="src/assets/images/code-snippet.png"></img>
            </div>
        </section>
        </div>
        
    );
}
