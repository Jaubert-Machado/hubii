'use client'

import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    max-width: 250px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: ${({ theme }) => theme.padding.sm};
    border: 1px solid ${({ theme }) => theme.colors.primary};
`
