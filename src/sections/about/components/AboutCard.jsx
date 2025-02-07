/**
 * @param {string} title The optional title of the card.
 * @param {Array.<JSX.Element>} body The text of the card.
 * @param {number} width The width of the card.
 * @returns {React.JSX.Element}
 */
export function AboutCard({ title, body, width }) {
    width = width == 2 ? "col-span-1 lg:col-span-2" : "col-span-1";
    return (
        <div className={"rounded-[16px] bg-gray p-8 font-manrope " + width}>
            {title && (
                <h1 className="mb-4 text-xl font-bold text-blue">{title}</h1>
            )}
            <p className="font-semibold">
                {body.map((element, index) => (
                    <span key={index}>{element}</span>
                ))}
            </p>
        </div>
    );
}