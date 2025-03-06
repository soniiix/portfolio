import { Title } from "../home/components/Title";
import { ExperienceCard } from "./components/ExperienceCard";
import { EXPERIENCES } from "./experienceData";

export function Experience() {
    return (
        <section id="experience" className="scroll-mt-20 flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
            <section className="h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40">
                <Title size={"4xl"} title={"Expérience"} />
                <div className="flex flex-col">
                    {EXPERIENCES.map((experience, index) =>
                        <ExperienceCard 
                            key={index}
                            title={experience.title}
                            company={experience.company}
                            period={experience.period}
                            location={experience.location}
                            missions={experience.missions}
                            reportLink={experience.reportLink}
                        />
                    )}
                </div>
            </section>
        </section>
    );
}