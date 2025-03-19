import * as S from './styles'
import PageTitle from '@atoms/PageTitle'
import { getOrder } from '@/api/orders'
import InformationRow from '@atoms/InformationRow'
import ItemCard from '@molecules/ItemCard'

type Params = {
    params: Promise<{ id: string }>
}

export default async function OrderDetails({ params }: Params) {
    const { id } = await params
    const order = await getOrder(id)

    if (!order) {
        return <div>Order not found</div>
    }

    return (
        <S.Container>
            <PageTitle title={`Detalhes do pedido n.${id}`} />
            <S.Content>
                <S.Badge status={order.status} />
                <InformationRow label="Total:" value={order?.total} />
                <InformationRow
                    label="Custo de envio:"
                    value={order.delivery_cost}
                />
                <InformationRow
                    label="Método de envio:"
                    value={order.shipping_method}
                />
                <InformationRow
                    label="Data de entrega:"
                    value={order.delivery_estimated}
                />
                <S.Line />
                <InformationRow
                    label="Nome do cliente:"
                    value={order.customer.name}
                />
                <InformationRow
                    label="Endereço:"
                    value={order.customer.address}
                />
                <S.Line />
                <S.Label>Items:</S.Label>
                {order.items.map((item, index) => (
                    <ItemCard item={item} key={`${item.name}-${index}`} />
                ))}
            </S.Content>
        </S.Container>
    )
}
