import Anchor from '@/components/anchor'
import Scroll from '@/components/scroll/Scroll'
import SocialIcons from '@/components/socialIcons'

const Hero = () => {
    return (
        <section className="common-bg relative flex flex-col justify-center pb-32 pt-[14rem] md:h-screen md:min-h-[50rem] md:pt-16" id="fooldal">
            <h1>Köszöntelek az oldalamon!</h1>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-solidblack md:text-2xl">
                Tóka Patrik vagyok <span className="font-bold">Full Stack Fejlesztő</span>, weboldalak és webshopok fejlesztésével foglalkozom.
            </p>
            <Anchor href="#rolam" className="btn mx-auto">
                Tudj meg többet!
            </Anchor>
            <Scroll className="absolute bottom-16 left-[50%] hidden translate-x-[-50%] md:block" />
            <SocialIcons className="top-50 absolute left-0 hidden flex-col gap-4 bg-solidwhite p-4 text-solidblack shadow-lg md:flex" />
        </section>
    )
}

export default Hero
