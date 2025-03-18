'use client'

import * as S from './styles'
import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export type Link = {
    href: string
    label: string
    icon: ReactNode
}

type Props = Link & LinkProps

export default function Link({ href, label, icon, ...props }: Props) {
    return (
        <S.NavLink href={href} {...props}>
            {icon}
            {label}
        </S.NavLink>
    )
}
