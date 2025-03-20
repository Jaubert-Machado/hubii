'use client'
import * as S from './styles'
import { OrderSchema } from '@schemas/data'
import { useRouter } from 'next/navigation'
import { OrderStatus } from 'types/order'
import { AnimatePresence } from 'motion/react'
import { animate } from '@utils/animate'

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

const ITEM_VARIANTS = {
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
    },
    initial: {
        opacity: 0,
        scale: 0.9,
        y: 20,
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: 0.1,
        },
    },
}

export default function Orders({ orders }: Props) {
    const router = useRouter()

    function onOrderCardClick(id: string) {
        return () => router.push(`/pedidos/${id}`)
    }

    return (
        <S.Container>
            <AnimatePresence>
                {orders.map((order) => (
                    <S.AnimatedOrderCard
                        layout
                        transition={{
                            duration: 0.2,
                            layout: {
                                duration: 0.2,
                            },
                        }}
                        {...animate(ITEM_VARIANTS)}
                        onClick={onOrderCardClick(order.id)}
                        key={order.id}
                        order={{
                            id: order.id,
                            costumerName: order.customer.name,
                            status: order.status,
                            image: order.items[0].imagem,
                            deliveryEstimated: order.delivery_estimated,
                        }}
                    />
                ))}
            </AnimatePresence>
        </S.Container>
    )
}
