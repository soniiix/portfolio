import { HashLink } from "react-router-hash-link";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Navbar({ scrolled }) {
    return (
        <>
            <nav className="hidden md:flex md:flex-grid md:items-center text-base md:gap-2 lg:gap-3">
                <NavLink title="Accueil" anchorId="home" scrolled={scrolled}/>
                <NavLink title="À propos" anchorId="about" scrolled={scrolled}/>
                <NavLink title="Réalisations" anchorId="projects" scrolled={scrolled}/>
                <NavLink title="Expérience" anchorId="experience" scrolled={scrolled}/>
                <HashLink smooth to="/#contact" className="rounded-full bg-blue px-[28px] py-[12px] font-bold hover:cursor-pointer hover:bg-btn-hover transition-colors duration-200">
                    Me contacter
                </HashLink>
            </nav>
            <div className="md:hidden flex flex-row">
                <MobileMenu/>
            </div>
        </>
    );
}
