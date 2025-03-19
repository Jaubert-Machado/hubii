'use client'

import * as S from './styles'
import Sidebar from '@organisms/Sidebar'
import { ReactNode } from 'react'
import { OrdersFilterProvider } from '@providers/OrdersFilterProvider'

type Props = {
    children: ReactNode
}

export default function OrdersTemplate({ children }: Props) {
    return (
        <OrdersFilterProvider>
            <S.Container>
                <Sidebar />
                <S.Content>{children}</S.Content>
            </S.Container>
        </OrdersFilterProvider>
    )
}
