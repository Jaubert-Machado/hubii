'use client'

import { Gear, Package } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { useWindowWidth } from '@hooks/useWindowWidth'
import Sidebar from '@organisms/Sidebar'
import MobileNavigation from '@organisms/MobileNavigation'

const user = {
    name: 'Jaubert Machado',
    address: 'Rua das Flores, 123',
    picture: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&scale=120',
}

export default function Navigation() {
    const t = useTranslations('Sidebar')
    const width = useWindowWidth()

    const LINKS = [
        { href: '/pedidos', label: t('orders'), icon: <Package size={18} /> },
        {
            href: '/configuracoes',
            label: t('settings'),
            icon: <Gear size={18} />,
        },
    ]

    if (width < 768) {
        return <MobileNavigation user={user} links={LINKS} />
    }

    return <Sidebar user={user} links={LINKS} />
}
