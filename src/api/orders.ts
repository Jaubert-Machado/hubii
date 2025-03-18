import { OrdersSchema } from '@schemas/data'
import { OrderStatus, orderStatusMap } from 'types/order'
import { readJsonFile } from '@utils/json'
import toast from 'react-hot-toast'

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
    } catch (error) {
        if (error instanceof Error) {
            toast.error(error.message)
        }
    }
}
