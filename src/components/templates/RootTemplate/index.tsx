import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import ThemeProvider from '@providers/ThemeProvider'
import QueryProvider from '@providers/QueryProvider'
import { Toaster } from 'react-hot-toast'

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
            <QueryProvider>
                <html lang="pt">
                    <body className={`${roboto.variable}`}>{children}</body>
                </html>
                <Toaster position="bottom-right" />
            </QueryProvider>
        </ThemeProvider>
    )
}
