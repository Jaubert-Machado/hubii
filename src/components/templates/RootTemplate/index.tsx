import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import ThemeProvider from '@providers/ThemeProvider'
import QueryProvider from '@providers/QueryProvider'
import { Toaster } from 'react-hot-toast'
import { getLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
    children: ReactNode
}

const roboto = Roboto({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export default async function RootTemplate({ children }: Props) {
    const locale = await getLocale()

    return (
        <NextIntlClientProvider>
            <QueryProvider>
                <ThemeProvider>
                    <html lang={locale}>
                        <body className={`${roboto.variable}`}>{children}</body>
                    </html>
                </ThemeProvider>
            </QueryProvider>
            <Toaster position="bottom-right" />
        </NextIntlClientProvider>
    )
}
