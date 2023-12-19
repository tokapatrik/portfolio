import Image from 'next/image'
import Hero from './_components/hero'
import AboutMe from './_components/aboutMe'
import Projects from './_components/projects'
import Contact from './_components/contact'

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
        </main>
    )
}
