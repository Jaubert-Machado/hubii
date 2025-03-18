'use client'
import * as S from './styles'
import Page from '@atoms/PageContent'
import PageTitle from '@atoms/PageTitle'
import OrdersFilter from '@molecules/OrdersFilter'
import Orders from '@organisms/Orders'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/app/pedidos/actions'

export default function OrdersPage() {
    const { orderStatus, search } = useOrdersFilter()
    const { data } = useQuery({
        queryFn: () => getOrders(orderStatus, search),
        queryKey: ['orders', orderStatus, search],
    })

    return (
        <S.Container>
            <PageTitle title="Pedidos" />
            <OrdersFilter />
            <Page>{data && <Orders orders={data} />}</Page>
        </S.Container>
    )
}
