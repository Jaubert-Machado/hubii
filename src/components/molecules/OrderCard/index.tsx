import * as S from './styles'
import OrderImage from '@atoms/OrderImage'
import { OrderStatus } from 'types/order'
import { elipser } from '@utils/string'

export type OrderCardData = {
    id: string
    status: OrderStatus
    deliveryEstimated: string
    costumerName: string
    image?: string
}

type Props = {
    order: OrderCardData
}

export default function OrderCard({
    order: { id, status, image, deliveryEstimated, costumerName },
}: Props) {
    return (
        <S.Container>
            <OrderImage src={image} />
            <S.InformationContainer>
                <S.InformationRow>
                    <S.InformationLabel>Nome do cliente:</S.InformationLabel>
                    <S.InformationValue>
                        {elipser(costumerName, 20)}
                    </S.InformationValue>
                </S.InformationRow>
                <S.InformationRow>
                    <S.InformationLabel>Número do pedido:</S.InformationLabel>
                    <S.InformationValue>{id}</S.InformationValue>
                </S.InformationRow>
                <S.InformationRow>
                    <S.InformationLabel>Data de entrega:</S.InformationLabel>
                    <S.InformationValue>{deliveryEstimated}</S.InformationValue>
                </S.InformationRow>
                <S.Badge status={status} />
            </S.InformationContainer>
        </S.Container>
    )
}
