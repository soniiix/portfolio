/**
 * @param {Object} props
 * @param {string} props.title The text of the title.
 * @param {string} props.size The size of the title.
 * @returns {JSX.Element}
 */
export function Title({ title, size }) {
    const sizes = {
        "4xl": "text-3xl md:text-4xl",
        "6xl": "text-5xl md:text-6xl"
    }
    
    return (
        <h1 className={"font-thicccboi " + sizes[size]}>
            {title}
        </h1>
    );
}