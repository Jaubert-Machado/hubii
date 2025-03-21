'use client'

import styled from 'styled-components'
import { motion } from 'motion/react'

export const HamgurguerButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border: none;
    position: absolute;
    right: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
`
export const NavigationContainer = motion.create(styled.div`
    width: 80%;
    height: 100%;
    margin-left: auto;
    z-index: 2;

    padding: ${({ theme }) => theme.padding.sm};
    background-color: ${({ theme }) => theme.colors.white};
`)

export const Container = motion.create(styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`)

export const BackgroundOverlay = motion.create(styled.div`
    position: absolute;
    inset: 0;
    background-color: blue;
    z-index: 1;
    background-color: hsla(0, 0%, 0%, 0.3);
`)
