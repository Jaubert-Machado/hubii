'use client'
import styled from 'styled-components'

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
`
