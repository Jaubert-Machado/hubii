'use client'
import * as S from './styles'
import PageTitle from '@atoms/PageTitle'
import OrdersFilter from '@molecules/OrdersFilter'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/orders'
import Placeholder from '@molecules/Placeholder'
import Spinner from '@atoms/Spinner'
import Orders from '@organisms/Orders'
import { useDebounce } from '@hooks/useDebounce'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

export default function OrdersPage() {
    const { orderStatus, search } = useOrdersFilter()
    const debouncedSearch = useDebounce(search, 300)
    const t = useTranslations('OrdersPage')

    const { data, isLoading } = useQuery({
        queryFn: () => getOrders(orderStatus, debouncedSearch),
        queryKey: ['orders', orderStatus, debouncedSearch],
    })

    const noData = data && data.length === 0
    const validData = typeof data !== 'string' && data && data.length > 0

    if (typeof data === 'string') {
        toast.error(data)
    }

    return (
        <S.Container>
            <PageTitle title={t('title')} />
            <OrdersFilter />
            <S.Content>
                {isLoading && <Spinner />}
                {noData && !isLoading && (
                    <Placeholder message={t('placeholder')} />
                )}
                {validData && <Orders orders={data} />}
            </S.Content>
        </S.Container>
    )
}
