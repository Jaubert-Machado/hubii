'use client'

import * as S from './styles'
import { User } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

type Props = ComponentProps<'img'>

export default function Avatar(props: Props) {
    return (
        <S.Container>
            {props.src ? (
                <S.UserAvatar {...props} />
            ) : (
                <User
                    size={25}
                    weight="thin"
                    color="white"
                    data-testid="avatar-placeholder"
                />
            )}
        </S.Container>
    )
}
