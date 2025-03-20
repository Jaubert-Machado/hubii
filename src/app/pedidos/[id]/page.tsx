'use client'
import * as S from './styles'
import PageTitle from '@atoms/PageTitle'
import { getOrder } from '@/api/orders'
import InformationRow from '@atoms/InformationRow'
import ItemCard from '@molecules/ItemCard'
import BackButton from '@atoms/BackButton'
import Placeholder from '@molecules/Placeholder'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

export default function OrderDetails() {
    const { id } = useParams()

    const { data } = useQuery({
        queryFn: () => getOrder(id as string),
        queryKey: ['order', id],
    })

    const t = useTranslations('OrderDetailsPage')

    if (typeof data === 'string' || !data) {
        return (
            <S.PlaceholderContainer>
                <Placeholder message={t('orderNotFound')} />
            </S.PlaceholderContainer>
        )
    }

    return (
        <S.Container>
            <S.TitleContainer>
                <BackButton />
                <PageTitle title={`${t('title')}${id}`} />
            </S.TitleContainer>
            <S.Content>
                <S.Badge status={data.status} />
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
        </S.Container>
    )
}
