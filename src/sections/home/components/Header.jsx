import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null)

    const headerSpecs = scrolled ? "bg-dark-blue border-[#363c44] shadow-md" : "bg-[#3C538F] border-[#4e6299]";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                headerRef.current.getBoundingClientRect().bottom >=
                document.getElementById('about').getBoundingClientRect().top - 20
            );
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <header ref={headerRef} className={"z-2 sticky top-0 w-full flex h-22 justify-center border-b-1  " + headerSpecs}>
            <div className="flex w-full max-w-[1920px] flex-row items-center justify-between px-8 py-5 font-manrope text-white lg:px-26">
                <a href="">
                    <img className="h-10 w-10" src="src/assets/images/logo.png"/>
                </a>
                <Navbar />
            </div>
        </header>
    );
}