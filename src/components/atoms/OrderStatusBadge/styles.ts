'use client'

import styled from 'styled-components'
import { OrderStatus } from 'types/order'

export const Container = styled.div<{ $status: OrderStatus }>`
    background-color: ${({ $status, theme }) => theme.colors.badges[$status]};
    max-width: min-content;
    padding: ${({ theme }) => theme.padding.xs}
        ${({ theme }) => theme.padding.md};
    border-radius: 50px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
`
