import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export function ExperienceCard({ title, company, period, location, missions, reportLink }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 flex flex-col rounded-2xl bg-gray px-8 py-7 font-manrope font-semibold gap-y-4"
        >
            <div className="hover:cursor-pointer flex flex-row items-center justify-between"  onClick={handleClick}>
                <h2 className="flex text-xl font-bold">
                    {title} 
                    <span className="hidden sm:flex">&nbsp;•&nbsp;</span>
                    <br className="sm:hidden"/> 
                    {company}
                </h2>
                <span className="flex items-center text-lg">
                    {isOpen
                        ? <FaChevronUp/>
                        : <FaChevronDown/>
                    }
                </span>
            </div>
            {isOpen && <>
            <span className="text-lg">
                {period}
            </span>
            <span className="text-blue text-lg">
                {location}
            </span>
            <ul className="list-disc marker:text-blue pl-4 space-y-8">
                {missions.map((mission, index) => 
                    <li key={index} className="mb-4">
                        {mission.title}&nbsp;:
                        <p className="font-medium">
                            {mission.items.map((item, index) => 
                                <span key={index}>{item}</span>
                            )}
                        </p>
                        
                    </li>
                )}
            </ul>
            <div className="flex flex-row justify-end">
                <a
                    href={reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 flex flex-row items-center gap-2.5 rounded-full border-2 px-3.5 py-1 font-semibold text-blue hover:border-blue hover:bg-blue hover:text-white"
                >
                    <span>Compte rendu de stage</span>
                    <FaArrowRightLong style={{ marginTop: "1px" }}/>
                </a>
            </div>
            </>}
        </motion.div>
    )
}