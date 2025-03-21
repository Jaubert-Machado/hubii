'use client'

import * as S from './styles'
import { Link } from '@atoms/Link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

type Props = {
    links: Link[]
}

export default function SidebarNavigation({ links }: Props) {
    const pathname = usePathname()

    return (
        <S.Nav>
            {links.map(({ href, label, icon }) => {
                const isActive = pathname.includes(href)

                const animate = isActive
                    ? {
                          rotate: [0, 10, -10, 0],
                          transition: {
                              duration: 0.5,
                          },
                      }
                    : {}

                return (
                    <S.NavItem
                        icon={<motion.div animate={animate}>{icon}</motion.div>}
                        key={href}
                        href={href}
                        label={label}
                        $isActive={isActive}
                    />
                )
            })}
        </S.Nav>
    )
}
