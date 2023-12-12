import Navbar from './navbar'

const Header = () => {
    return (
        <header className="shadow-header fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-4 bg-white px-8 py-8 md:px-32">
            <span className="header__text whitespace-nowrap">Tóka Patrik</span>
            <Navbar />
        </header>
    )
}

export default Header
