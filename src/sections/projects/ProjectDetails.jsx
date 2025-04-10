import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { Header } from "../home/components/Header";
import { Title } from "../home/components/Title";
import { PROJECTS } from "./projectsData";

export function ProjectDetails() {
    const {projectName} = useParams();

    const project = PROJECTS.find(project => project.name == projectName)

    return (
        <>
            <Header baseScrolled={true}/>
            <div className="flex justify-center bg-linear-to-r from-[#0240C7] to-[#42A3EA] h-full text-white">
                <div className="w-full max-w-[1920px] px-8 py-18 md:px-24 lg:px-40">
                    <h1 className="font-manrope font-extrabold text-3xl">{project.title}</h1>
                </div>
            </div>
            <div className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
                <div className="flex flex-row justify-between gap-25 font-manrope h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40">
                    <aside className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">
                            À&nbsp;propos
                        </h2>
                        <span className="py-1 px-2 bg-blue text-white rounded-md font-semibold text-sm text-center mb-2">CATÉGORIE</span>
                        <span className="text-center mb-2">{project.category}</span>
                        <span className="py-1 px-2 bg-blue text-white rounded-md font-semibold text-sm text-center mb-2">TECHNOLOGIES</span>
                        <ul className="text-center">
                        {project.technologies.map(technology => 
                            <li>{technology}</li>
                        )}
                        </ul>
                    </aside>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">
                            Contexte
                        </h2>
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
                        <h2 className="text-2xl font-bold my-4">
                            Description
                        </h2>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, possimus earum fuga ipsam molestias quisquam necessitatibus pariatur velit facilis ea ex explicabo harum aut natus magnam eum sint laboriosam veritatis.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}