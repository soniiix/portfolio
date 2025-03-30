export function FilterButton({ title, active, value, onClick }) {
    let bgColor = active ? "bg-blue" : "bg-gray";

    return (
        <button
            className={
                bgColor +
                " transition-colors duration-200 rounded-full px-[32px] py-[10px] font-manrope font-bold hover:cursor-pointer hover:bg-blue"
            }
            onClick={onClick}
            value={value}
        >
            {title}
        </button>
    );
}