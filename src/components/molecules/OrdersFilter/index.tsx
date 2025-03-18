'use client'

import Input from '@atoms/Input'
import FilterBagde from '@atoms/FilterBagde'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { useOrdersFilter } from '@hooks/useOrdersContext'
import { OrderStatus } from 'types/order'
import { useCallback } from 'react'
import { debounce } from '@utils/debounce'

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
    const { setOrderStatus, onChange, orderStatus } = useOrdersFilter()
    const theme = useTheme()

    function onBadgeClick(status: OrderStatus) {
        return () => {
            if (orderStatus === status) {
                return setOrderStatus(undefined)
            }

            setOrderStatus(status)
        }
    }

    const debouncedOnChange = useCallback(debounce(onChange, 300), [onChange])

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
                onChange={(e) => debouncedOnChange(e)}
            />
            <S.FilterBadgeContainer>
                {BADGES.map((badge) => (
                    <FilterBagde
                        onClick={onBadgeClick(badge.status)}
                        title={badge.title}
                        isActive={orderStatus === badge.status}
                        key={badge.title}
                    />
                ))}
            </S.FilterBadgeContainer>
        </>
    )
}
