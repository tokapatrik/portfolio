import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/layout/footer'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../components/layout/header'

const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    variable: '--font-sourceSans'
})

export const metadata: Metadata = {
    metadataBase: new URL('https://tokapatrik.hu'),
    title: 'Tóka Patrik - Full Stack Fejlesztő',
    description: 'Fedezd fel kreatív és innovatív webes projekteimet, ahol a technológia és dizájn találkozik. Nézd meg munkáimat és ismerj meg!',
    creator: 'Tóka Patrik',
    keywords: [
        'Tóka Patrik',
        'Next.js',
        'React',
        'JavaScript',
        'Full Stack Fejlesztő',
        'Webfejlesztés',
        'Frontend Fejlesztés',
        'Backend Fejlesztés',
        'UI/UX Design',
        'React Fejlesztés',
        'Next.js Fejlesztés',
        'Webalkalmazások',
        'Optimalizálás',
        'Egyedi Weboldalak',
        'Portfólió',
        'Teljesítmény optimalizálás',
        'Modern webes technológiák',
        'Kreatív webmegoldások',
        'Webes projektek',
        'Webshop',
        'Webshop készítés',
        'Webáruház',
        'Webáruház készítés',
        'TypeScript',
        'React',
        'Next',
        'AWS',
        'NodeJS',
        'Express',
        'GIT',
        'Github',
        'Docker',
        'SQL/NoSQL databases',
        'PHP',
        'HTML',
        'CSS',
        'JavaScript'
    ],
    openGraph: {
        title: 'Tóka Patrik - Full Stack Fejlesztő',
        description: 'Fedezd fel kreatív és innovatív webes projekteimet, ahol a technológia és dizájn találkozik. Nézd meg munkáimat és ismerj meg!',
        images: [
            {
                url: 'https://tokapatrik.hu/og_image.webp'
            }
        ]
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="hu">
            <body className={`${sourceSans.variable} font-sans leading-[2] text-darkgray`}>
                <Header />
                {children}
                <Footer />
                <SpeedInsights />
                <Analytics />
                <ToastContainer />
            </body>
        </html>
    )
}
