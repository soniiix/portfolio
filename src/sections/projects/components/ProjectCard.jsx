import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.image The source link of the image.
 * @param {string} props.technologies
 * @param {string} props.github The link to the project's Github repository.
 * @param {string} props.name The name to use for the project details page link.
 * @returns {JSX.Element}
 */
export function ProjectCard({ title, description, image, technologies, github, name, className }) {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`flex flex-col rounded-2xl bg-gray ${className}`}
        >
            <Link
                to={"/project/" + name}
                className="relative overflow-hidden rounded-t-[16px]" 
                aria-label={"Lien vers la page de détails du projet " + title}
            >
                <img 
                    src={image} 
                    className="h-40 w-full object-cover transition-transform duration-500 ease-out hover:scale-110 active:scale-110"
                    alt={"Illustration du projet " + title}
                />
            </Link>
            <div className="flex flex-col flex-grow gap-2 px-8 py-5 font-manrope">
                <span className="text-sm font-bold text-blue">
                    {technologies.join(", ").toUpperCase()}
                </span>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-2 font-medium">{description}</p>
                <div className="flex-grow"></div>
                <div className="mt-3 flex flex-row items-center justify-end">
                    <a
                        aria-label={"Lien vers le dépôt Github du projet " + title}
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub size={33} color="#0788FF" />
                    </a>
                    <Link
                        to={"/project/" + name}
                        className="ml-2.5 transition-colors duration-200 flex flex-row items-center gap-1 rounded-[22px] border-2 px-3.5 py-1 font-semibold text-blue border-blue hover:bg-blue hover:text-white active:bg-blue active:text-white"
                        aria-label={"Lien vers la page de détails du projet " + title}
                    >
                        <span>En savoir plus</span>
                        <TbExternalLink />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}