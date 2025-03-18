'use client'

import * as S from './styles'
import UserHeader from '@molecules/UserHeader'
import SidebarNavigation from '@molecules/SidebarNavigation'
import { Gear, Package } from '@phosphor-icons/react'

const LINKS = [
    { href: '/pedidos', label: 'Pedidos', icon: <Package size={18} /> },
    { href: '/pedidos/1', label: 'Settings', icon: <Gear size={18} /> },
]

export default function Sidebar() {
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
