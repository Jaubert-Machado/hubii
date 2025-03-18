import { getOrders } from './actions'

export default async function Orders() {
    const orders = await getOrders()

    return <>{JSON.stringify(orders, null, 2)}</>
}
