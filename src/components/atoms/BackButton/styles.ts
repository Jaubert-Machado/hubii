'use client'

import styled from 'styled-components'

export const Button = styled.button`
    &:hover {
        scale: 1.02;
    }

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: scale 0.2s;
`
