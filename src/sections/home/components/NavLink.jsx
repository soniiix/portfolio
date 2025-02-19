/**
 * @param {Object} props
 * @param {string} props.title The title of the link.
 * @param {string} props.anchorId The id of the anchor the link refers to.
 * @returns {JSX.Element}
 */
export function NavLink({ title, anchorId = "" }) {
    return (
        <a
            href={anchorId.startsWith("#") ? anchorId : `#${anchorId}`}
            className="rounded-[20px] px-[17px] py-[12px] font-semibold hover:bg-[#4e6299]"
        >
            {title}
        </a>
    );
}
