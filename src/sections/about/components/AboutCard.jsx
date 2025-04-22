import { motion } from "framer-motion";

/**
 * @param {Object} props
 * @param {string} [props.title] The optional title of the card.
 * @param {Array.<JSX.Element>} props.body The text of the card.
 * @param {number} [props.width] The width of the card.
 * @returns {JSX.Element}
 */
export function AboutCard({ title, body, width }) {
    width = width == 2 ? "col-span-1 lg:col-span-2" : "col-span-1";
    return (
        <motion.div
            className={"rounded-2xl bg-gray p-8 font-manrope " + width}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            {title && (
                <h1 className="mb-4 text-xl font-bold text-blue">{title}</h1>
            )}
            <div className="font-medium">
                {body.map((element, index) => (
                    <span key={index}>{element}</span>
                ))}
            </div>
        </motion.div>
    );
}