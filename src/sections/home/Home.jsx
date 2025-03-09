import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function Home() {
    return (
        <section id="home" className="scroll-mt-22 bg-gradient h-full w-full">
            <Hero />
        </section>
    );
}