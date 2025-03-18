import * as S from './styles'
import { ComponentProps } from 'react'

export const orderStatusMap = {
    pending: 'Pendente',
    delivered: 'Entregue',
    canceled: 'Cancelado',
} as const

export type OrderStatus = keyof typeof orderStatusMap

type Props = {
    status: OrderStatus
} & ComponentProps<'div'>

export default function OrderStatusBadge({ status, ...props }: Props) {
    return (
        <S.Container $status={status} {...props}>
            {orderStatusMap[status]}
        </S.Container>
    )
}
