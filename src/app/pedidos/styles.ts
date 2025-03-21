'use client'
import styled from 'styled-components'
import PageContent from '@atoms/PageContent'
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
    justify-content: center;
    align-items: center;
`
