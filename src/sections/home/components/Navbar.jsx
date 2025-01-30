import { NavLink } from "./NavLink";

export function Navbar() {
    return (
        <nav className="hidden md:flex md:flex-grid md:items-center text-base md:gap-2 lg:gap-3">
            <NavLink title="Accueil"/>
            <NavLink title="À propos"/>
            <NavLink title="Réalisations"/>
            <NavLink title="Compétences"/>
            <button className="rounded-[20px] bg-blue px-[30px] py-[12px] font-bold hover:cursor-pointer hover:bg-btn-hover">
                Me contacter
            </button>
        </nav>
    );
}
