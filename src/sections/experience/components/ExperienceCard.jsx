import { FaArrowRightLong } from "react-icons/fa6";

export function ExperienceCard({ title, company, period, location, missions, reportLink }) {
    return (
        <div className="mt-6 flex flex-col rounded-[16px] bg-gray px-8 py-7 font-manrope font-semibold gap-y-4">
            <div className="flex flex-col max-[925px]:gap-y-4 min-[925px]:flex-row min-[925px]:items-center justify-between">
                <h2 className="text-xl font-bold">
                    {title} • {company}
                </h2>
                <span className="text-lg min-[925px]:text-xl">
                    {period}
                </span>
            </div>
            <span className="text-blue text-lg">
                {location}
            </span>
            <ul className="list-disc marker:text-blue pl-4 space-y-8">
                {missions.map((mission) => 
                    <li key={mission} className="mb-4">{mission}</li>
                )}
            </ul>
            <div className="flex flex-row justify-end">
                <a
                    href={reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2.5 rounded-[22px] border-2 px-3.5 py-1 font-semibold text-blue hover:border-blue hover:bg-blue hover:text-white"
                >
                    <span>Compte rendu de stage</span>
                    <FaArrowRightLong style={{ marginTop: "1px" }}/>
                </a>
            </div>
            
        </div>
    )
}