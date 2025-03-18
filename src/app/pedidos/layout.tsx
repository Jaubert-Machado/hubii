import { ReactNode } from 'react'
import OrdersTemplate from '@templates/OrdersTemplate'

export default function OrdersLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return <OrdersTemplate>{children}</OrdersTemplate>
}
