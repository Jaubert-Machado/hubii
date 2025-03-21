'use client'

import { Link } from '@atoms/Link'
import * as S from './styles'
import { Hamburger } from '@phosphor-icons/react'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import UserHeader from '@molecules/UserHeader'
import SidebarNavigation from '@molecules/SidebarNavigation'
import { animate } from '@utils/animate'
import { useTheme } from 'styled-components'

type Props = {
    user: {
        name: string
        address: string
        picture?: string
    }
    links: Link[]
}

const CONTAINER_VARIANTS = {
    initial: {
        x: '100%',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: '100%',
        opacity: 0,
    },
}

const BACKGROUND_VARIANTS = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

export default function MobileNavigation({ user, links }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const theme = useTheme()

    function handleToggle() {
        setIsOpen((prev) => !prev)
    }

    function onNavigate() {
        setIsOpen(false)
    }

    return (
        <>
            <S.HamgurguerButton onClick={handleToggle}>
                <Hamburger size={40} color={theme.colors.text} />
            </S.HamgurguerButton>
            <AnimatePresence>
                {isOpen && (
                    <S.Container
                        {...animate(CONTAINER_VARIANTS)}
                        transition={{
                            easings: 'easeInOut',
                        }}
                    >
                        <S.NavigationContainer>
                            <UserHeader user={user} />
                            <SidebarNavigation
                                links={links}
                                onNavigate={onNavigate}
                            />
                        </S.NavigationContainer>
                        <S.BackgroundOverlay
                            onClick={handleToggle}
                            {...animate(BACKGROUND_VARIANTS)}
                            transition={{
                                delay: 0.3,
                            }}
                        />
                    </S.Container>
                )}
            </AnimatePresence>
        </>
    )
}
