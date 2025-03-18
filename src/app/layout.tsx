import { ReactNode } from 'react'
import RootTemplate from '@templates/RootTemplate'

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props) {
    return <RootTemplate>{children}</RootTemplate>
}
