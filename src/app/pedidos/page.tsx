'use client'
import * as S from './styles'
import Page from '@atoms/PageContent'
import PageTitle from '@atoms/PageTitle'
import OrdersFilter from '@molecules/OrdersFilter'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/orders'
import ListPlaceholder from '@molecules/ListPlaceholder'
import Spinner from '@atoms/Spinner'
import Orders from '@organisms/Orders'

export default function OrdersPage() {
    const { orderStatus, search } = useOrdersFilter()

    const { data, isLoading } = useQuery({
        queryFn: () => getOrders(orderStatus, search),
        queryKey: ['orders', orderStatus, search],
    })

    return (
        <S.Container>
            <PageTitle title="Pedidos" />
            <OrdersFilter />
            <Page>
                {data?.length === 0 && (
                    <ListPlaceholder message="Ainda não há pedidos." />
                )}
                {isLoading && <Spinner />}
                {data && data.length > 0 ? <Orders orders={data} /> : <></>}
            </Page>
        </S.Container>
    )
}
