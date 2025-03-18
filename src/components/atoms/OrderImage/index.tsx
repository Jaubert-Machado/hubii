import * as S from './styles'
import { ComponentProps } from 'react'
import { Package } from '@phosphor-icons/react'

type Props = ComponentProps<'img'>

export default function OrderImage(props: Props) {
    return props.src ? (
        <S.Image {...props} />
    ) : (
        <S.Placeholder>
            <Package size={100} weight="duotone" color="white" />
        </S.Placeholder>
    )
}
