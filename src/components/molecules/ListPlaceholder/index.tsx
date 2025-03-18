import * as S from './styles'
import PlaceholderGraphic from '@atoms/PlaceholderGraphic'

type Props = {
    message: string
}

export default function ListPlaceholder({ message }: Props) {
    return (
        <S.Container>
            <PlaceholderGraphic />
            <S.Message>{message}</S.Message>
        </S.Container>
    )
}
