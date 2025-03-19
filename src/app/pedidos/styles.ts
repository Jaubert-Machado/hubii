'use client'
import styled from 'styled-components'
import PageContent from '@atoms/PageContent'

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.padding.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow: visible;
`

export const Content = styled(PageContent)`
    justify-content: center;
    align-items: center;
`
