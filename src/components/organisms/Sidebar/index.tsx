'use client'

import * as S from './styles'
import SidebarNavigation from '@molecules/SidebarNavigation'
import { Gear, Package } from '@phosphor-icons/react'
import UserHeader from '@molecules/UserHeader'
import { useTranslations } from 'next-intl'

export default function Sidebar() {
    const t = useTranslations('Sidebar')

    const LINKS = [
        { href: '/pedidos', label: t('orders'), icon: <Package size={18} /> },
        { href: '/settings', label: t('settings'), icon: <Gear size={18} /> },
    ]

    return (
        <S.Container>
            <UserHeader
                user={{
                    name: 'Jaubert Machado',
                    address: 'Rua das Flores, 123',
                }}
            />
            <SidebarNavigation links={LINKS} />
        </S.Container>
    )
}
