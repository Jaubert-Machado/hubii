import * as S from './styles'

type Props = {
    title: string
}

export default function PageTitle({ title }: Props) {
    return <S.Title>{title}</S.Title>
}
