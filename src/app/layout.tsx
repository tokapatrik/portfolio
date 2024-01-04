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
    title: 'Tóka Patrik - Full Stack Fejlesztő',
    description: 'Fedezd fel kreatív és innovatív webes projekteimet, ahol a technológia és dizájn találkozik. Nézd meg munkáimat és ismerj meg!'
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
