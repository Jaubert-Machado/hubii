'use client'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.gap.sm};
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.placeholder};
    padding-bottom: 10px;
`

export const UserInfoContainer = styled.div``

export const UserName = styled.p`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 400;
`

export const UserAddress = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 200;
`
