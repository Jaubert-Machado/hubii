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

function orderNormalize(order: OrderSchema[0]) {
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

export async function getOrders(
    orderStatus: OrderStatus | undefined,
    search: string
) {
    try {
        const data = await readJsonFile('./src/database/database.json')

        const parsedData = OrdersSchema.parse(data)
        const lowerCaseSearch = search.toLowerCase().trim()

        // Aqui houve a necessidade de fazer uma lógica mais robusta invés de usar somente um .includes,
        // para filtrar os pedidos por nome do cliente, pois o nome do cliente pode ser composto por
        // mais de uma palavra e quero a comparação sendo feita por ambos os nomes mas sem pegar por
        // exemplo o "ão" do João.
        return parsedData.orders
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
                return orderNormalize(order)
            })
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        }
    }
}

export async function getOrder(id: string) {
    try {
        const data = await readJsonFile('./src/database/database.json')

        const parsedData = OrdersSchema.parse(data)

        const order = parsedData.orders.find((order) => order.id === id)

        if (!order) {
            return 'Pedido não encontrado'
        }

        return orderNormalize(order)
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        }
    }
}
