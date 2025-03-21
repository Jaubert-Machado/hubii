import { OrderSchema, OrdersSchema } from '@schemas/data'
import { OrderStatus, orderStatusMap } from 'types/order'
import { readJsonFile } from '@utils/json'
import { getFullDate } from '@utils/date'
import localizeCurrency from '@utils/currency'

export const statusMap: Record<string, OrderStatus> = {
    Pendente: 'pending',
    Entregue: 'delivered',
    Cancelado: 'canceled',
}

class OrderService {
    private static orderNormalize(order: OrderSchema[0]) {
        return {
            ...order,
            delivery_cost: localizeCurrency(order.delivery_cost),
            total: localizeCurrency(order.total),
            status: statusMap[order.status],
            delivery_estimated: getFullDate(order.delivery_estimated),
            items: order.items.map((item) => ({
                ...item,
                price: localizeCurrency(item.price),
            })),
        }
    }

    public static async getOrders(
        orderStatus: OrderStatus | undefined,
        search: string
    ) {
        const data = await readJsonFile('./src/database/database.json')
        const parsedData = OrdersSchema.safeParse(data)

        if (!parsedData.success) {
            throw new Error(
                'Erro ao buscar pedidos, tente novamente mais tarde.'
            )
        }

        const lowerCaseSearch = search.toLowerCase().trim()

        return parsedData.data.orders
            .filter((order) => {
                const customerName = order.customer.name.toLowerCase()

                if (orderStatus !== undefined) {
                    const status = orderStatusMap[orderStatus]
                    if (status !== order.status) {
                        return false
                    }
                }

                if (lowerCaseSearch.includes(' ')) {
                    const [firstName, lastName] = lowerCaseSearch.split(' ')
                    return (
                        customerName.includes(firstName) &&
                        customerName.includes(lastName)
                    )
                }

                return customerName
                    .split(' ')
                    .some((part) => part.startsWith(lowerCaseSearch))
            })
            .map((order) => {
                return OrderService.orderNormalize(order)
            })
    }

    public static async getOrder(id: string) {
        const data = await readJsonFile('./src/database/database.json')
        const parsedData = OrdersSchema.safeParse(data)

        if (!parsedData.success) {
            throw new Error(
                'Erro ao buscar pedido, tente novamente mais tarde.'
            )
        }

        const order = parsedData.data.orders.find((order) => order.id === id)

        if (!order) {
            throw new Error('Pedido não encontrado.')
        }

        return OrderService.orderNormalize(order)
    }
}

export default OrderService
