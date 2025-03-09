/**
 * @param {Object} props
 * @param {string} props.title The title of the link.
 * @param {string} props.anchorId The id of the anchor the link refers to.
 * @param {boolean} props.scrolled The scroll state of the parent header.
 * @returns {JSX.Element}
 */
export function NavLink({ title, anchorId = "", scrolled }) {
    const linkHover = scrolled ? "hover:bg-[#2C323A]" : "hover:bg-[#4e6299]"

    return (
        <a
            href={anchorId.startsWith("/#") ? anchorId : `/#${anchorId}`}
            className={"rounded-[20px] px-[17px] py-[12px] font-semibold " + linkHover}
        >
            {title}
        </a>
    );
}
