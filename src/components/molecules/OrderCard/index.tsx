import * as S from './styles'
import { OrderStatus } from 'types/order'
import { ComponentProps } from 'react'
import InformationRow from '@atoms/InformationRow'
import ItemImage from '@atoms/ItemImage'

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
    return (
        <S.Container {...props}>
            <ItemImage src={image} />
            <S.InformationContainer>
                <InformationRow
                    label="Nome do cliente:"
                    value={costumerName}
                    limit={20}
                />
                <InformationRow label="Número do pedido:" value={id} />
                <InformationRow
                    label="Data de entrega:"
                    value={deliveryEstimated}
                />
                <S.Badge status={status} />
            </S.InformationContainer>
        </S.Container>
    )
}
