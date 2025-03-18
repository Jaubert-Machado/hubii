'use client'

import styled from 'styled-components'

export const Button = styled.button<{ $isActive: boolean }>`
    &:hover {
        scale: 1;
    }

    &:active {
        scale: 0.96;
    }

    cursor: pointer;
    max-width: min-content;
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.primary : 'transparent'};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    padding: 4px ${({ theme }) => theme.padding.md};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme, $isActive }) =>
        $isActive ? 'white' : theme.colors.primary};
    transition: all 0.2s;
    scale: 0.96;
`
