import { ComponentProps } from 'react'
import * as S from './styles'
import { OrderStatus } from 'types/order'

type Props = {
    title: string
    isActive: boolean
    status: OrderStatus
} & ComponentProps<'button'>

export default function FilterBagde({
    title,
    isActive,
    status,
    ...props
}: Props) {
    return (
        <S.Button $isActive={isActive} $status={status} {...props}>
            {title}
        </S.Button>
    )
}
