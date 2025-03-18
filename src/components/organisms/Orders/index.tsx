'use client'
import * as S from './styles'
import OrderCard from '@molecules/OrderCard'
import { OrderSchema } from '@schemas/data'
import { OrderStatus } from '@atoms/OrderStatusBadge'

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
                        status: statusMap[order.status],
                        image: order.items[0].imagem,
                        deliveryEstimated: order.delivery_estimated,
                    }}
                />
            ))}
        </S.Container>
    )
}
