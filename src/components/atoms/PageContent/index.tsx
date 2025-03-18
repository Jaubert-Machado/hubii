import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
    children: ReactNode
}

export default function PageContent({ children }: Props) {
    return <S.Container>{children}</S.Container>
}
