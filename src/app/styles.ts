'use client'

import styled from 'styled-components'

export const Layout = styled.div`
    height: 100%;
    display: flex;
    gap: ${({ theme }) => theme.gap.md};
    padding: ${({ theme }) => theme.padding.md};
`
