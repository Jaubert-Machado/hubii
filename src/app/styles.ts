'use client'
import styled from 'styled-components'
import { motion } from 'motion/react'

export const Container = motion.create(styled.div`
    height: 100%;
    display: flex;
    gap: ${({ theme }) => theme.gap.md};
    padding: ${({ theme }) => theme.padding.md};
`)

export const SidebarContainer = styled.div`
    flex: 1;
    max-width: 250px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.padding.sm};
    border: 1px solid ${({ theme }) => theme.colors.primary};
`
