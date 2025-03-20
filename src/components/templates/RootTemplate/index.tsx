import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import ThemeProvider from '@providers/ThemeProvider'
import QueryProvider from '@providers/QueryProvider'
import { Toaster } from 'react-hot-toast'
import { getLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import Sidebar from '@organisms/Sidebar'
import { animate } from '@utils/animate'
import * as S from './styles'

type Props = {
    children: ReactNode
}

const roboto = Roboto({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const CONTAINER_VARIANTS = {
    animate: {
        opacity: 1,
    },
    initial: {
        opacity: 0,
    },
}

export default async function RootTemplate({ children }: Props) {
    const locale = await getLocale()

    return (
        <NextIntlClientProvider>
            <QueryProvider>
                <ThemeProvider>
                    <html lang={locale}>
                        <body className={`${roboto.variable}`}>
                            <S.Container
                                {...animate(CONTAINER_VARIANTS)}
                                transition={{
                                    duration: 0.4,
                                }}
                            >
                                <Sidebar />
                                {children}
                            </S.Container>
                        </body>
                    </html>
                </ThemeProvider>
            </QueryProvider>
            <Toaster position="bottom-right" />
        </NextIntlClientProvider>
    )
}
