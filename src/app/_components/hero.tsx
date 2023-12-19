import Scroll from '@/components/ui/scroll/Scroll'

const Hero = () => {
    return (
        <section className="common-bg relative flex flex-col justify-center pb-32 pt-[14rem] md:h-screen md:min-h-[50rem] md:pt-16">
            <h1>Köszöntelek az oldalon!</h1>
            <p className="mx-auto mb-8 max-w-3xl text-center text-xl text-solidblack md:text-2xl">
                Tóka Patrik vagyok <span className="font-bold">Full Stack Developer</span>, weboldalak teljeskörű fejlesztésével foglalkozom.
            </p>
            <button className="mx-auto">Tudj meg többet!</button>
            <Scroll className="absolute bottom-16 left-[50%] hidden translate-x-[-50%] md:block" />
        </section>
    )
}

export default Hero
