export function NavLink({ title, anchor = "" }) {
    return (
        <a href={anchor} className="rounded-[20px] px-[17px] py-[12px] font-semibold hover:bg-[#4e6299]">
            {title}
        </a>
    );
}
