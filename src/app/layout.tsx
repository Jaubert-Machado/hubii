import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import ThemeProvider from '@providers/ThemeProvider'
import * as S from './styles'
import Sidebar from '@organisms/Sidebar'
import Page from '@atoms/Page'

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
                <body className={`${roboto.variable}`}>
                    <S.Layout>
                        <Sidebar />
                        <Page>{children}</Page>
                    </S.Layout>
                </body>
            </html>
        </ThemeProvider>
    )
}
