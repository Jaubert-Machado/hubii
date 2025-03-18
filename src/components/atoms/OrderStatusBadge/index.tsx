import * as S from './styles'
import { ComponentProps } from 'react'
import { OrderStatus, orderStatusMap } from 'types/order'

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
