import { Title } from "../home/components/Title";
import { ExperienceCard } from "./components/ExperienceCard";

export function Experience() {
    return (
        <section className="h-full w-full bg-dark-blue px-8 py-20 text-white md:px-24 lg:px-40 border-b-1 border-[#363c44]">
            <Title size={"4xl"} title={"Expérience"} />
            <div className="flex flex-col">
                <ExperienceCard 
                    title="Développeur web stagiaire"
                    company="DGT Concept"
                    period="JANVIER - MARS 2024"
                    location="Les Sables d'Olonne (85)"
                    missions={[
                        {
                            title: "Création du site web de Sanako France avec WordPress",
                            items: [
                                "Création des pages, ",
                                "mise en place d'un formulaire de contact relié au CRM Sellsy, ",
                                "intégration d'une zone de téléchargement avec accès restreint."
                            ]
                        }
                    ]}
                    reportLink="src/assets/docs/reports/report-dgt-2.pdf"
                />
            </div>
        </section>
    );
}