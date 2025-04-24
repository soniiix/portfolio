import { Analytics } from '@vercel/analytics/react';
import { Home } from "./sections/home/Home"
import { About } from "./sections/about/About"
import { Projects } from "./sections/projects/Projects"
import { Contact } from "./sections/contact/Contact"
import { Experience } from "./sections/experience/Experience"
import { Footer } from "./sections/footer/Footer"
import { Header } from "./sections/home/components/Header"

function App() {
    return (
        <>
            <Analytics />
            <Header />
            <Home/>
            <About/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
