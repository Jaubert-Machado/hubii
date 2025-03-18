'use client'

import Input from '@atoms/Input'
import FilterBagde from '@atoms/FilterBagde'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { OrderStatus } from 'types/order'
import { ChangeEvent } from 'react'

const BADGES: {
    title: string
    status: OrderStatus
}[] = [
    {
        title: 'Entregue',
        status: 'delivered',
    },
    {
        title: 'Pendente',
        status: 'pending',
    },
    {
        title: 'Cancelado',
        status: 'canceled',
    },
]

export default function OrdersFilter() {
    const { setFilter, onChange, filter } = useOrdersFilter()
    const theme = useTheme()

    function onBadgeClick(status: OrderStatus) {
        return () => setFilter(status)
    }

    function onInputChange(e: ChangeEvent<HTMLInputElement>) {
        return () => onChange(e)
    }

    return (
        <>
            <Input
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
                onChange={onInputChange}
            />
            <S.FilterBadgeContainer>
                {BADGES.map((badge) => (
                    <FilterBagde
                        onClick={onBadgeClick(badge.status)}
                        title={badge.title}
                        isActive={filter === badge.status}
                        key={badge.title}
                    />
                ))}
            </S.FilterBadgeContainer>
        </>
    )
}
