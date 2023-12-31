'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Anchor from '@/components/anchor'
import Image from 'next/image'

const NAV_LINKS = [
    {
        name: 'Főoldal',
        href: '#fooldal'
    },
    {
        name: 'Rólam',
        href: '#rolam'
    },
    {
        name: 'Projektek',
        href: '#projektek'
    },
    {
        name: 'Kapcsolat',
        href: '#kapcsolat'
    }
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed left-0 top-0 z-10 w-full  bg-white font-bold uppercase tracking-wide text-solidblack shadow-strong">
            <div className="m-auto max-w-[1600px]">
                <div className="flex flex-wrap items-center py-4">
                    <div className="flex items-center gap-2">
                        <Image alt="logo" src={'/logo.webp'} height={30} width={30} />
                        <span className="flex-none whitespace-nowrap">Tóka Patrik</span>
                    </div>
                    <div className="ml-auto flex flex-none items-center">
                        <nav className="hidden gap-16 md:flex">
                            <NavLinks setIsOpen={setIsOpen} />
                        </nav>
                        <FontAwesomeIcon className="h-6 md:hidden" icon={faBars} onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)} />
                    </div>
                </div>
                <nav className={`flex w-full flex-col items-center gap-4 pb-8 pt-4 md:hidden ${!isOpen && 'hidden'}`}>
                    <NavLinks setIsOpen={setIsOpen} />
                </nav>
            </div>
        </header>
    )
}

const NavLinks = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <>
            {NAV_LINKS.map((link, i) => (
                <Anchor className="transition duration-300 hover:text-primary" key={i} href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                </Anchor>
            ))}
        </>
    )
}

export default Header
