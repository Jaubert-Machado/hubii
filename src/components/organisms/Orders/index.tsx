'use client'
import * as S from './styles'
import OrderCard from '@molecules/OrderCard'
import { OrderSchema } from '@schemas/data'
import { getFullDate } from '@utils/date'
import { useRouter } from 'next/navigation'
import { OrderStatus } from 'types/order'

type Orders = Omit<
    OrderSchema[0],
    'status' | 'total' | 'delivery_cost' | 'items'
> & {
    status: OrderStatus
    total: string
    delivery_cost: string
    items: {
        name: string
        quantity: number
        price: string
        imagem?: string
    }[]
}

type Props = {
    orders: Orders[]
}

export default function Orders({ orders }: Props) {
    const router = useRouter()

    function onOrderCardClick(id: string) {
        return () => router.push(`/pedidos/${id}`)
    }

    return (
        <S.Container>
            {orders.map((order) => (
                <OrderCard
                    onClick={onOrderCardClick(order.id)}
                    key={order.id}
                    order={{
                        id: order.id,
                        costumerName: order.customer.name,
                        status: order.status,
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
