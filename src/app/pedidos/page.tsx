import { getOrders } from './actions'
import * as S from './styles'
import Page from '@atoms/PageContent'
import PageTitle from '@atoms/PageTitle'
import OrdersFilter from '@molecules/OrdersFilter'
import Orders from '@organisms/Orders'

export default async function OrdersPage() {
    const orders = await getOrders()

    return (
        <S.Container>
            <PageTitle title="Pedidos" />
            <OrdersFilter />
            <Page>
                <Orders orders={orders} />
            </Page>
        </S.Container>
    )
}
