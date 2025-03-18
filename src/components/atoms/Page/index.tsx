import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
    children: ReactNode
}

export default function Page({ children }: Props) {
    return <S.Container>{children}</S.Container>
}
