import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type Props = {
    children: ReactNode
} & ComponentProps<'div'>

export default function PageContent({ children, ...props }: Props) {
    return <S.Container {...props}>{children}</S.Container>
}
