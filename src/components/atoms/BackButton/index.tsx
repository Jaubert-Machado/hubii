'use client'

import * as S from './styles'
import { ComponentProps } from 'react'
import { ArrowLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

type Props = ComponentProps<'button'>

export default function BackButton(props: Props) {
    const router = useRouter()

    function onClick() {
        router.back()
    }

    return (
        <S.Button onClick={onClick}>
            <ArrowLeft size={24} />
        </S.Button>
    )
}
