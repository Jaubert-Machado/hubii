import { ReactNode } from 'react'
import RootTemplate from '@templates/RootTemplate'
import Navigation from '@organisms/Navigation'

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <RootTemplate>
            <Navigation />
            {children}
        </RootTemplate>
    )
}
