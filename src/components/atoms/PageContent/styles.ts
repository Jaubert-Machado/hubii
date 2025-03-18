'use client'

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: transparent;
    flex: 1;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.padding.md};
    justify-content: center;
    align-items: center;
`
