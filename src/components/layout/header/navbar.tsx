'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NAV_LINKS = [
    {
        name: 'Főoldal',
        href: '/'
    },
    {
        name: 'Rólam',
        href: '/'
    },
    {
        name: 'Projektek',
        href: '/'
    },
    {
        name: 'Kapcsolat',
        href: '/'
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <FontAwesomeIcon className="h-6 md:hidden" icon={faBars} onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)} />
            <nav className={`header__nav md:header__nav-row ${!isOpen && 'hidden'}`}>
                {NAV_LINKS.map((link, i) => (
                    <a className="header__text hover:text-primary transition duration-300" key={i} href={link.href}>
                        {link.name}
                    </a>
                ))}
            </nav>
        </>
    )
}

export default Navbar
