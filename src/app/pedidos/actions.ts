'use server'

import { OrdersSchema } from '@schemas/data'
import { OrderStatus, orderStatusMap } from 'types/order'
import { readJsonFile } from '@utils/json'

export async function getOrders(
    orderStatus: OrderStatus | undefined,
    search: string
) {
    const data = await readJsonFile('./src/database/database.json')
    const parsedData = OrdersSchema.parse(data)
    const lowerCaseSearch = search.toLowerCase().trim()

    return parsedData.orders.filter((order) => {
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
}
