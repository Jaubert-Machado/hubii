'use client'

import { Link } from '@atoms/Link'
import * as S from './styles'
import { Hamburger } from '@phosphor-icons/react'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import UserHeader from '@molecules/UserHeader'
import SidebarNavigation from '@molecules/SidebarNavigation'
import { animate } from '@utils/animate'

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

    function handleToggle() {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <S.HamgurguerButton onClick={handleToggle}>
                <Hamburger size={40} />
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
                            <SidebarNavigation links={links} />
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
