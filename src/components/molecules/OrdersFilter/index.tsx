'use client'

import Input from '@atoms/Input'
import FilterBagde from '@atoms/FilterBagde'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { OrderStatus } from 'types/order'
import { ChangeEvent } from 'react'
import { useTranslations } from 'next-intl'

export default function OrdersFilter() {
    const { setOrderStatus, onSearchChange, orderStatus, search } =
        useOrdersFilter()
    const theme = useTheme()
    const t = useTranslations('OrderDetailsPage')

    const BADGES: {
        title: string
        status: OrderStatus
    }[] = [
        {
            title: t('status.delivered'),
            status: 'delivered',
        },
        {
            title: t('status.pending'),
            status: 'pending',
        },
        {
            title: t('status.canceled'),
            status: 'canceled',
        },
    ]

    function onBadgeClick(status: OrderStatus) {
        return () => {
            if (orderStatus === status) {
                return setOrderStatus(undefined)
            }

            setOrderStatus(status)
        }
    }

    function onSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
        onSearchChange(e.target.value)
    }

    return (
        <>
            <Input
                value={search}
                placeholder="Pesquisar por nome do cliente"
                icons={[
                    {
                        position: 'right',
                        icon: (
                            <MagnifyingGlass
                                size={18}
                                color={theme.colors.placeholder}
                            />
                        ),
                    },
                ]}
                onChange={onSearchInputChange}
            />
            <S.FilterBadgeContainer>
                {BADGES.map((badge) => (
                    <FilterBagde
                        onClick={onBadgeClick(badge.status)}
                        status={badge.status}
                        title={badge.title}
                        isActive={orderStatus === badge.status}
                        key={badge.title}
                    />
                ))}
            </S.FilterBadgeContainer>
        </>
    )
}
