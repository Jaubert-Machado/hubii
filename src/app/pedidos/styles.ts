'use client'
import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.padding.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
`
