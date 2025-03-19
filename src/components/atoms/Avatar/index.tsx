import * as S from './styles'
import { UserCircle } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { ComponentProps } from 'react'

type Props = ComponentProps<'img'>

export default function Avatar(props: Props) {
    const theme = useTheme()

    return props.src ? (
        <S.UserAvatar {...props} />
    ) : (
        <UserCircle
            size={38}
            weight="thin"
            color={theme.colors.primary}
            data-testid="avatar-placeholder"
        />
    )
}
