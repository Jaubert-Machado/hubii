'use client'

import * as S from './styles'
import { ComponentProps } from 'react'
import { ArrowLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

type Props = Omit<ComponentProps<'button'>, 'onClick'>

export default function BackButton(props: Props) {
    const router = useRouter()

    function onClick() {
        router.back()
    }

    return (
        <S.Button onClick={onClick} {...props}>
            <ArrowLeft size={24} data-testid="back-button-icon" />
        </S.Button>
    )
}
