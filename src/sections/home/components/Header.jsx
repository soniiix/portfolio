import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between h-22 border-b-1 border-[#4e6299] px-8 py-5 font-manrope text-white lg:px-26">
            <a href="">
                <img className="h-10 w-10" src="src/assets/images/logo.png" />
            </a>
            <Navbar />
        </header>
    );
}