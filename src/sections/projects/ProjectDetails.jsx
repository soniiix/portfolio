import { useParams } from "react-router";
import { Header } from "../home/components/Header";
import { Title } from "../home/components/Title";

export function ProjectDetails() {
    const {projectName} = useParams();

    return (
        <>
            <Header baseScrolled={true}/>
            <div className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
                <div className="h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40 ">
                    <Title title={"Projet : " + projectName} size="4xl"/>
                </div>
            </div>
        </>
    )
}