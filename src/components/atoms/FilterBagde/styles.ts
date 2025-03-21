'use client'

import styled from 'styled-components'

export const Button = styled.button<{ $isActive: boolean; $status: string }>`
    &:hover {
        scale: 1;
    }

    &:active {
        scale: 0.96;
    }

    cursor: pointer;
    max-width: min-content;
    background-color: ${({ theme, $status }) => theme.colors.badges[$status]};
    border: 1px solid ${({ theme, $status }) => theme.colors.badges[$status]};
    border-radius: 20px;
    padding: 4px ${({ theme }) => theme.padding.md};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s;
    scale: 0.96;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
`
