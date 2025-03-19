import * as S from './styles'
import { OrderStatus } from 'types/order'
import { ComponentProps } from 'react'
import InformationRow from '@atoms/InformationRow'
import ItemImage from '@atoms/ItemImage'
import { useTranslations } from 'next-intl'

export type OrderCardData = {
    id: string
    status: OrderStatus
    deliveryEstimated: string
    costumerName: string
    image?: string
}

type Props = {
    order: OrderCardData
} & ComponentProps<'button'>

export default function OrderCard({
    order: { id, status, image, deliveryEstimated, costumerName },
    ...props
}: Props) {
    const t = useTranslations('OrdersPage')

    return (
        <S.Container {...props}>
            <ItemImage src={image} />
            <S.InformationContainer>
                <InformationRow
                    label={t('card.customer')}
                    value={costumerName}
                    limit={20}
                />
                <InformationRow label={t('card.orderId')} value={id} />
                <InformationRow
                    label={t('card.deliveryEstimated')}
                    value={deliveryEstimated}
                />
                <S.Badge status={status} />
            </S.InformationContainer>
        </S.Container>
    )
}
