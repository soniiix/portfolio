import React from "react";
import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between h-25 border-b-1 border-[#4e6299] px-8 py-6 font-manrope text-white lg:px-26">
            <a href="">
                <img className="h-10 w-10" src="/images/logo.png" />
            </a>
            <Navbar />
        </header>
    );
}
