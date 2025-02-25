import { useState } from "react";

const SECTIONS = ";";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="z-10 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-blue hover:cursor-pointer hover:bg-btn-hover">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col space-y-2 p-2 hover:cursor-pointer focus:outline-none"
                >
                    <span
                        className={`block h-0.5 w-6 rounded bg-white transition-transform ${
                            isOpen ? "translate-y-[5px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 rounded bg-white transition-transform ${
                            isOpen ? "-translate-y-[5px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            <div
                className={`fixed top-0 right-0 z-5 h-screen w-64 transform bg-blue text-white shadow-lg transition-all duration-300 ${
                    isOpen ? "right-0" : "right-[-100%]"
                }`}
            ></div>
        </>
    );
}