'use client'
import * as S from './styles'
import OrderCard from '@molecules/OrderCard'
import { OrderSchema } from '@schemas/data'
import { OrderStatus } from 'types/order'
import { getFullDate } from '@utils/data'

export const statusMap: Record<string, OrderStatus> = {
    Pendente: 'pending',
    Entregue: 'delivered',
    Cancelado: 'canceled',
}

type Props = {
    orders: OrderSchema
}

export default function Orders({ orders }: Props) {
    return (
        <S.Container>
            {orders.map((order) => (
                <OrderCard
                    key={order.id}
                    order={{
                        id: order.id,
                        costumerName: order.customer.name,
                        status: statusMap[order.status],
                        image: order.items[0].imagem,
                        deliveryEstimated: getFullDate(
                            order.delivery_estimated
                        ),
                    }}
                />
            ))}
        </S.Container>
    )
}
