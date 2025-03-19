import * as S from './styles'
import { OrderSchema } from '@schemas/data'
import ItemImage from '@atoms/ItemImage'
import InformationRow from '@atoms/InformationRow'

type Props = {
    item: Omit<OrderSchema[0]['items'][0], 'price'> & {
        price: string
    }
}

export default function ItemCard({
    item: { imagem, name, quantity, price },
}: Props) {
    return (
        <S.Container>
            <ItemImage src={imagem} alt={name} />
            <S.InformationContainer>
                <InformationRow label="Nome do item:" value={name} />
                <InformationRow label="Quantidade:" value={quantity} />
                <InformationRow label="Preço:" value={price} />
            </S.InformationContainer>
        </S.Container>
    )
}
