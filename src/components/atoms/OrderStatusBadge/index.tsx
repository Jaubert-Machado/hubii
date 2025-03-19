import * as S from './styles'
import { ComponentProps } from 'react'
import { OrderStatus } from 'types/order'
import { useTranslations } from 'next-intl'

type Props = {
    status: OrderStatus
} & ComponentProps<'div'>

export default function OrderStatusBadge({ status, ...props }: Props) {
    const t = useTranslations('OrderDetailsPage')

    const orderStatusMap = {
        pending: t('status.pending'),
        delivered: t('status.delivered'),
        canceled: t('status.canceled'),
    }

    return (
        <S.Container $status={status} {...props}>
            {orderStatusMap[status]}
        </S.Container>
    )
}
