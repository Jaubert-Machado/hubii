import * as S from './styles'
import { OrderSchema } from '@schemas/data'
import ItemImage from '@atoms/ItemImage'
import InformationRow from '@atoms/InformationRow'
import { useTranslations } from 'next-intl'

type Props = {
    item: Omit<OrderSchema[0]['items'][0], 'price'> & {
        price: string
    }
}

export default function ItemCard({
    item: { imagem, name, quantity, price },
}: Props) {
    const t = useTranslations('OrderDetailsPage')

    return (
        <S.Container>
            <ItemImage src={imagem} alt={name} />
            <S.InformationContainer>
                <InformationRow label={t('items.name')} value={name} />
                <InformationRow label={t('items.quantity')} value={quantity} />
                <InformationRow label={t('items.price')} value={price} />
            </S.InformationContainer>
        </S.Container>
    )
}
