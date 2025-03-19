import * as S from './styles'
import PlaceholderGraphic from '@atoms/PlaceholderGraphic'

type Props = {
    message: string
}

export default function Placeholder({ message }: Props) {
    return (
        <S.Container>
            <PlaceholderGraphic />
            <S.Message>{message}</S.Message>
        </S.Container>
    )
}
