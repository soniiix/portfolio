import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="flex h-22 justify-center border-b-1 border-[#4e6299]">
            <div className="flex w-full max-w-[1920px] flex-row items-center justify-between px-8 py-5 font-manrope text-white lg:px-26">
                <a href="">
                    <img className="h-10 w-10" src="src/assets/images/logo.png"/>
                </a>
                <Navbar />
            </div>
        </header>
    );
}