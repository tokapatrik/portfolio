import Scroll from '@/components/ui/scroll/Scroll'

const Hero = () => {
    return (
        <section className="hero__bg h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-6xl">
                <h1>Köszöntelek az oldalon!</h1>
                <p className="text-center mb-8">
                    Tóka Patrik vagyok Full Stack fejlesztő, weboldalak teljeskörű készítésével foglalkozom. Az online térben töltött évek alatt számos projekten dolgoztam, hogy ügyfeleim részére
                    egyedi, modern és felhasználóbarát weboldalakat alkothassak
                </p>
                <button>Tudj meg többet!</button>
            </div>
            <Scroll className="absolute bottom-16" />
        </section>
    )
}

export default Hero
