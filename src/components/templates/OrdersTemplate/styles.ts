'use client'
import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    gap: ${({ theme }) => theme.gap.md};
    padding: ${({ theme }) => theme.padding.md};
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
`
