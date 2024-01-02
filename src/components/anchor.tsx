'use client'

import React, { HTMLProps } from 'react'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const Anchor: React.FC<AnchorProps> = ({ className, href, children, onClick }) => {
    const hanndleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(e)
        }

        e.preventDefault()

        const navigateTo = href?.split('#')[1]
        const toElement = navigateTo ? document.getElementById(navigateTo) : null

        if (toElement) {
            toElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <a className={className} href={href} onClick={hanndleAnchorClick}>
            {children}
        </a>
    )
}

export default Anchor
