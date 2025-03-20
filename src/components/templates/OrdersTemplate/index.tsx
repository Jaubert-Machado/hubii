'use client'

import * as S from './styles'
import { ReactNode } from 'react'
import { OrdersFilterProvider } from '@providers/OrdersFilterProvider'

type Props = {
    children: ReactNode
}

export default function OrdersTemplate({ children }: Props) {
    return (
        <OrdersFilterProvider>
            <S.Content>{children}</S.Content>
        </OrdersFilterProvider>
    )
}
