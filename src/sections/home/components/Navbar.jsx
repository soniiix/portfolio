import { NavLink } from "./NavLink";

export function Navbar() {
    return (
        <nav className="hidden md:flex md:flex-grid md:items-center text-base md:gap-2 lg:gap-3">
            <NavLink title="Accueil" anchorId="home"/>
            <NavLink title="À propos" anchorId="about"/>
            <NavLink title="Réalisations" anchorId="projects"/>
            <NavLink title="Expérience" anchorId="experience"/>
            <a href="#contact" className="rounded-[20px] bg-blue px-[30px] py-[12px] font-bold hover:cursor-pointer hover:bg-btn-hover">
                Me contacter
            </a>
        </nav>
    );
}
