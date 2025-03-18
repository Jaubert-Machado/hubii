'use client'

import styled from 'styled-components'
import { OrderStatus } from 'types/order'

const STATUS_COLORS = {
    pending: 'hsl(48, 100%, 45%)',
    canceled: 'hsl(0, 59%, 47%)',
    delivered: 'hsl(121, 59%, 47%)',
}

export const Container = styled.div<{ $status: OrderStatus }>`
    background-color: ${({ $status }) => STATUS_COLORS[$status]};
    max-width: min-content;
    padding: ${({ theme }) => theme.padding.xs}
        ${({ theme }) => theme.padding.md};
    border-radius: 50px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
`
