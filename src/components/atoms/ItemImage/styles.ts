'use client'
import styled from 'styled-components'

export const Image = styled.img`
    aspect-ratio: 2 / 1;
    width: 120px;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    object-fit: cover;
`

export const Placeholder = styled.div`
    aspect-ratio: 2 / 1;
    width: 120px;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme }) => theme.colors.placeholder};
    display: flex;
    align-items: center;
    justify-content: center;
`
