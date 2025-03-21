'use client'
import * as S from './styles'
import PageTitle from '@atoms/PageTitle'
import InformationRow from '@atoms/InformationRow'
import ItemCard from '@molecules/ItemCard'
import BackButton from '@atoms/BackButton'
import Placeholder from '@molecules/Placeholder'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Spinner from '@atoms/Spinner'
import { animate } from '@utils/animate'
import { Fragment } from 'react'
import OrderService from '@/api/orderService'

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

export default function OrderDetails() {
    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryFn: () => OrderService.getOrder(id as string),
        queryKey: ['order', id],
        retry: 1,
    })

    const t = useTranslations('OrderDetailsPage')

    if (isLoading) {
        return (
            <S.CenteredContainer>
                <Spinner />
            </S.CenteredContainer>
        )
    }

    if (error || !data) {
        return (
            <S.CenteredContainer>
                <Placeholder message={t('orderNotFound')} />
            </S.CenteredContainer>
        )
    }

    return (
        <S.Container {...animate(CONTENT_VARIANTS)} key="orderDetails">
            <Fragment key="orderDetails">
                <S.TitleContainer>
                    <BackButton />
                    <PageTitle title={`${t('title')}`} />
                </S.TitleContainer>
                <S.Content>
                    <S.Badge status={data.status} />
                    <InformationRow label={t('orderId')} value={data?.id} />
                    <InformationRow label={t('total')} value={data?.total} />
                    <InformationRow
                        label={t('deliveryCost')}
                        value={data.delivery_cost}
                    />
                    <InformationRow
                        label={t('shippingMethod')}
                        value={data.shipping_method}
                    />
                    <InformationRow
                        label={t('deliveryEstimated')}
                        value={data.delivery_estimated}
                    />
                    <S.Line />
                    <InformationRow
                        label={t('customer.name')}
                        value={data.customer.name}
                    />
                    <InformationRow
                        label={t('customer.address')}
                        value={data.customer.address}
                    />
                    <S.Line />
                    <S.Label>{t('itemsList')}</S.Label>
                    {data.items.map((item, index) => (
                        <ItemCard item={item} key={`${item.name}-${index}`} />
                    ))}
                </S.Content>
            </Fragment>
        </S.Container>
    )
}
