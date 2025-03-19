import * as S from './styles'
import PageTitle from '@atoms/PageTitle'
import { getOrder } from '@/api/orders'
import InformationRow from '@atoms/InformationRow'
import ItemCard from '@molecules/ItemCard'
import BackButton from '@atoms/BackButton'
import { getTranslations } from 'next-intl/server'
import Placeholder from '@molecules/Placeholder'

type Params = {
    params: Promise<{ id: string }>
}

export default async function OrderDetails({ params }: Params) {
    const { id } = await params
    const order = await getOrder(id)
    const t = await getTranslations('OrderDetailsPage')

    if (typeof order === 'string' || !order) {
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
                <S.Badge status={order.status} />
                <InformationRow label={t('total')} value={order?.total} />
                <InformationRow
                    label={t('deliveryCost')}
                    value={order.delivery_cost}
                />
                <InformationRow
                    label={t('shippingMethod')}
                    value={order.shipping_method}
                />
                <InformationRow
                    label={t('deliveryEstimated')}
                    value={order.delivery_estimated}
                />
                <S.Line />
                <InformationRow
                    label={t('customer.name')}
                    value={order.customer.name}
                />
                <InformationRow
                    label={t('customer.address')}
                    value={order.customer.address}
                />
                <S.Line />
                <S.Label>{t('itemsList')}</S.Label>
                {order.items.map((item, index) => (
                    <ItemCard item={item} key={`${item.name}-${index}`} />
                ))}
            </S.Content>
        </S.Container>
    )
}
