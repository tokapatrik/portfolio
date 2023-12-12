import Image from 'next/image'
import Hero from './_components/hero'
import AboutMe from './_components/aboutMe'

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutMe />
        </main>
    )
}
