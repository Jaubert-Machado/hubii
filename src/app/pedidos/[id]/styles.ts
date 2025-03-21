'use client'

import styled from 'styled-components'
import PageContent from '@atoms/PageContent'
import OrderStatusBadge from '@atoms/OrderStatusBadge'
import { motion } from 'motion/react'

export const Container = motion.create(styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.padding.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow: visible;
`)

export const Content = styled(PageContent)`
    flex-direction: column;
    gap: ${({ theme }) => theme.padding.xs};
    position: relative;
`

export const Badge = styled(OrderStatusBadge)`
    position: absolute;
    right: ${({ theme }) => theme.padding.sm};
`
export const Line = styled.span`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Label = styled.span`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.gap.md};
`

export const CenteredContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
