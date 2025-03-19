import * as S from './styles'
import { elipser } from '@utils/string'

type Props = {
    label: string
    value: string | number
    limit?: number
}

export default function InformationRow({ label, value, limit }: Props) {
    return (
        <S.InformationRow>
            <S.InformationLabel>{label}</S.InformationLabel>
            <S.InformationValue>
                {limit && typeof value === 'string'
                    ? elipser(value, limit)
                    : value}
            </S.InformationValue>
        </S.InformationRow>
    )
}
