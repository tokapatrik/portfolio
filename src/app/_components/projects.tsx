import Image from 'next/image'

type Project = {
    id: string
    img: string
    name: string
    desc: string
    logos: string[]
    url?: string
}

const PROJECTS: Project[] = [
    {
        id: 'egyesuletonline',
        img: 'egyesuletonline.webp',
        name: 'EgyesületOnline',
        desc: 'Nyilvántartó szoftver egyesületek és más társadalmi szervezetek részére. Mérettől, taglétszámtól és működési módtól függetlenül minden egyesület, szervezet számára gyors és pontos nyilvántartás.',
        logos: ['php.svg', 'mysql.svg', 'bootstrap.svg'],
        url: 'https://egyesuletonline.hu/'
    },
    {
        id: 'goldenhour',
        img: 'goldenhour.webp',
        name: 'Goldenhour',
        desc: 'E-kereskedelmi platform fejlesztés. Minőségi, trendi és minimalista ékszerek forgalmazására szolgáló webshop készítés. WordPress fejlesztés egyedi igények alapján.',
        logos: ['wp.svg', 'woo.svg', 'elementor.svg', 'php.svg', 'mysql.svg'],
        url: 'https://goldenhour.hu/'
    },
    {
        id: 'trendydesign',
        img: 'trendydesign.webp',
        name: 'Trendy Design',
        desc: 'Egyedi weboldal tervezés és fejlesztés. Keresőoptimalizált, biztonságos, modern és látványos weboldal fejlesztés faipari vállalat számára.',
        logos: ['next.svg', 'react.svg', 'tailwind.svg', 'amplify.svg']
    },
    {
        id: 'anaprendszer',
        img: 'anaprendszer.webp',
        name: 'A Naprendszer',
        desc: 'HTML Canvas alapú ismeretterjesztő minigame animációkkal. Űrhajó segítségével járhatjuk be a Naprendszer bolygóit és tudhatunk meg hasznos információkat a bolygókról.',
        logos: ['javascript.svg', 'canvas.svg', 'bootstrap.svg'],
        url: 'https://anaprendszer.hu/'
    }
]

const Projects = () => {
    return (
        <section className="bg-solidwhite pb-0">
            <div className="m-auto max-w-7xl">
                <h2>Projektek</h2>
                <p className="m-auto mb-16 max-w-5xl text-center">Nézz körül néhány izgalmas korábbi munkám között.</p>
                {PROJECTS.map((project) => (
                    <ProjectBlock key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

const ProjectBlock = ({ project }: { project: Project }) => {
    return (
        <div className="mb-16 flex flex-col gap-6 lg:flex-row">
            <Image className="h-auto w-auto max-w-3xl px-4 lg:px-0" src={`/${project.img}`} width={1000} height={600} alt={`${project.name} project image`} />
            <div className="flex flex-col justify-center text-center lg:text-left">
                <h4 className="mb-8">{project.name}</h4>
                <p className="mb-2">{project.desc}</p>
                {project.url && (
                    <a className="mb-6 block w-full" href={project.url}>
                        Tovább az oldalra
                    </a>
                )}
                <div className="flex justify-center gap-4 align-middle lg:justify-start">
                    {project.logos.map((logo, i) => (
                        <Image key={i} src={`/${logo}`} width={50} height={50} alt={`${logo.split('.')[0]} logo`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
