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
            <div className="bg-linear-to-r from-[#0240C7] to-[#42A3EA] h-full text-white">
                <div className="max-w-[1920px] px-8 py-18 md:px-24 lg:px-40">
                    <h1 className="font-manrope font-extrabold text-3xl">{project.title}</h1>
                </div>
            </div>
            <div className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
                <div className="font-manrope h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40">
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
                        Fonctionnalités dévelopées
                    </h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, possimus earum fuga ipsam molestias quisquam necessitatibus pariatur velit facilis ea ex explicabo harum aut natus magnam eum sint laboriosam veritatis.
                    </span>
                </div>
            </div>
        </>
    )
}