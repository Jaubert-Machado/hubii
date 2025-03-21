'use client'
import styled from 'styled-components'
import { motion } from 'motion/react'

export const Container = motion.create(styled.div`
    height: 100%;
    display: flex;
    gap: ${({ theme }) => theme.gap.md};
    padding: ${({ theme }) => theme.padding.md};
`)
