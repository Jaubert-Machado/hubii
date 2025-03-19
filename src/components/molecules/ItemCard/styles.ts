'use client'

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.padding.sm};
    gap: ${({ theme }) => theme.gap.sm};
    background-color: transparent;
    height: 120px;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
`
