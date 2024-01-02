import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { HTMLProps } from 'react'

const SOCIAL_ICONS = [
    {
        id: 'linkedin',
        icon: faLinkedinIn,
        link: 'https://linkedin.com/in/patrik-tóka-786868263'
    },
    {
        id: 'github',
        icon: faGithub,
        link: 'https://github.com/tokapatrik'
    },
    {
        id: 'email',
        icon: faAt,
        link: 'mailto:tokapatrik321@gmail.com'
    },
    {
        id: 'phone',
        icon: faPhone,
        link: 'tel:+36306170318'
    }
]

const SocialIcons: React.FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
    return (
        <div className={className}>
            {SOCIAL_ICONS.map((icon) => (
                <a key={icon.id} href={icon.link}>
                    <FontAwesomeIcon className="h-8" icon={icon.icon} />
                </a>
            ))}
        </div>
    )
}

export default SocialIcons
