import Navbar from './navbar'

const Header = () => {
    return (
        <header className="fixed z-20 top-0 left-0 w-full flex justify-between items-center px-8 md:px-32 py-8 bg-white">
            <span className="header__text">Tóka Patrik</span>
            <Navbar />
        </header>
    )
}

export default Header
