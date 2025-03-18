import * as S from './styles'
import { UserCircle } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

type Props = {
    src?: string
}

export default function Avatar({ src }: Props) {
    const theme = useTheme()

    return src ? (
        <S.UserAvatar src={src} />
    ) : (
        <UserCircle size={38} weight="thin" color={theme.colors.primary} />
    )
}
