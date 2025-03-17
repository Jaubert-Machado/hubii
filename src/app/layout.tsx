import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import ThemeProvider from '@providers/ThemeProvider'

const roboto = Roboto({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <ThemeProvider>
            <html lang="pt">
                <body className={`${roboto.variable}`}>{children}</body>
            </html>
        </ThemeProvider>
    )
}
