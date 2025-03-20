import { ComponentProps } from 'react'
import * as S from './styles'

type Props = {
    title: string
    isActive: boolean
    status: string
} & ComponentProps<'button'>

export default function FilterBagde({
    title,
    isActive,
    status,
    ...props
}: Props) {
    return (
        <S.Button $isActive={isActive} $status={status} {...props}>
            {title}
        </S.Button>
    )
}
