import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import ThemeProvider from '@providers/ThemeProvider'

type Props = {
    children: ReactNode
}

const roboto = Roboto({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export default function RootTemplate({ children }: Props) {
    return (
        <ThemeProvider>
            <html lang="pt">
                <body className={`${roboto.variable}`}>{children}</body>
            </html>
        </ThemeProvider>
    )
}
