import { ComponentProps } from 'react'
import * as S from './styles'

type Props = {
    title: string
    isActive: boolean
} & ComponentProps<'button'>

export default function FilterBagde({ title, isActive, ...props }: Props) {
    return (
        <S.Button $isActive={isActive} {...props}>
            {title}
        </S.Button>
    )
}
