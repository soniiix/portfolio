import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";

/**
 * @param {string} title
 * @param {string} description
 * @param {string} image The source link of the image.
 * @param {string} technologies
 * @param {string} github The link to the project's Github repository.
 * @returns {JSX.Element}
 */
export function ProjectCard({ title, description, image, technologies, github }) {
    return (
        <div className="h-full rounded-[16px] bg-gray">
            <img src={image} className="h-40 w-full rounded-t-[16px] object-cover"/>
            <div className="flex flex-col gap-2 px-8 py-5 font-manrope">
                <span className="text-sm font-bold text-blue">
                    {technologies.toUpperCase()}
                </span>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-2 font-semibold">{description}</p>
                <div className="mt-6 flex flex-row items-start justify-end">
                    <a href={github}>
                        <IoLogoGithub size={33} color="#0788FF" />
                    </a>
                    <a
                        href="#"
                        className="ml-3 flex flex-row items-center gap-1 rounded-[22px] border-2 px-3.5 py-1 font-semibold text-blue hover:border-blue hover:bg-blue hover:text-white"
                    >
                        <span>En savoir plus</span>
                        <TbExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
}