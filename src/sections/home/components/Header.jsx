import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";

export function Header({ baseScrolled = false }) {
    const [scrolled, setScrolled] = useState(baseScrolled);
    const headerRef = useRef(null)

    const headerSpecs = scrolled ? "bg-dark-blue border-[#363c44] shadow-sm" : "bg-[#3C538F] border-[#4e6299]";

    useEffect(() => {
        if (!baseScrolled){
            const handleScroll = () => {
                if (document.body.scrollTop > headerRef.current.offsetHeight || 
                    document.documentElement.scrollTop > headerRef.current.offsetHeight) {
                    setScrolled(true)
                } else {
                    setScrolled(false)
                }
            }
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }
    }, [])

    return (
        <header ref={headerRef} className={"transition-colors duration-300 z-20 sticky top-0 w-full flex h-21 justify-center border-b-1 " + headerSpecs}>
            <div className="flex w-full max-w-[1920px] flex-row items-center justify-between px-8 py-5 font-manrope text-white lg:px-26">
                <a href="/" aria-label="Accueil - Logo personnel de Quentin">
                    <img className="h-10 w-10" src="/logo.png" alt="Logo personnel de Quentin"/>
                </a>
                <Navbar scrolled={scrolled}/>
            </div>
        </header>
    );
}