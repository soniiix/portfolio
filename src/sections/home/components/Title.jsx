export function Title({ title, size }) {
    const sizes = {
        "6xl": "text-5xl md:text-6xl"
    }
    
    return (
        <h1 className={"font-thicccboi " + sizes[size]}>
            {title}
        </h1>
    );
}