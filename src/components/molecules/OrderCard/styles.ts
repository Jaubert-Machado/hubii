'use client'

import styled from 'styled-components'
import OrderStatusBadge from '@atoms/OrderStatusBadge'

export const Container = styled.button`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.padding.sm};
    gap: ${({ theme }) => theme.gap.sm};
    background-color: transparent;
    cursor: pointer;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`

export const Badge = styled(OrderStatusBadge)`
    margin-top: auto;
`
