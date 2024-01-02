import SocialIcons from '../socialIcons'

const Footer = () => {
    return (
        <footer className="bg-black text-solidwhite">
            <div className="m-auto max-w-7xl">
                <div className="flex flex-col gap-16  py-16 md:flex-row-reverse md:justify-between md:py-24">
                    <div>
                        <h5>Közösség</h5>
                        <SocialIcons className="flex gap-4" />
                    </div>
                    <div>
                        <h5>Tóka Patrik</h5>
                        <span className="block">Tóka Patrik vagyok Full Stack Developer, weboldalak teljeskörű fejlesztésével foglalkozom.</span>
                    </div>
                </div>
                <hr />
                <div className="flex justify-center py-6 text-sm">Copyright © {new Date().getFullYear()} Tóka Patrik - Minden jog fenntartva</div>
            </div>
        </footer>
    )
}

export default Footer
