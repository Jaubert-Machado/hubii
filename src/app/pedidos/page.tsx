'use client'
import * as S from './styles'
import PageTitle from '@atoms/PageTitle'
import OrdersFilter from '@molecules/OrdersFilter'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { useQuery } from '@tanstack/react-query'
import OrderService from '@/api/orderService'
import Placeholder from '@molecules/Placeholder'
import Spinner from '@atoms/Spinner'
import Orders from '@organisms/Orders'
import { useDebounce } from '@hooks/useDebounce'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'
import { animate } from '@utils/animate'
import { Fragment } from 'react'

const CONTENT_VARIANTS = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

export default function OrdersPage() {
    const { orderStatus, search } = useOrdersFilter()
    const debouncedSearch = useDebounce(search, 300)
    const t = useTranslations('OrdersPage')
    const errors = useTranslations('errors')

    const { data, isLoading, error } = useQuery({
        queryFn: () => OrderService.getOrders(orderStatus, debouncedSearch),
        queryKey: ['orders', orderStatus, debouncedSearch],
        retry: 1,
    })

    const noData = data && data.length === 0
    const validData = data && data.length > 0

    if (error) {
        toast.error(error.message)

        return (
            <S.Content>
                <Placeholder
                    type="server-error"
                    message={errors('serverError')}
                />
            </S.Content>
        )
    }

    return (
        <S.Container {...animate(CONTENT_VARIANTS)} key="ordersList">
            <Fragment key="ordersList">
                <PageTitle title={t('title')} />
                <OrdersFilter />
                <S.Content>
                    {isLoading && <Spinner />}
                    {noData && !isLoading && (
                        <Placeholder type="empty" message={t('placeholder')} />
                    )}
                    {validData && <Orders orders={data} />}
                </S.Content>
            </Fragment>
        </S.Container>
    )
}
