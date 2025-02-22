import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function Home() {
    return (
        <section id="home" className="bg-gradient h-screen w-full">
            <Header />
            <Hero />
        </section>
    );
}