'use client'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    padding-bottom: 10px;
`

export const UserInfoContainer = styled.div``

export const UserAvatar = styled.img`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 38px;
    width: 38px;
    border-radius: 50%;
`

export const UserName = styled.p`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 400;
`

export const UserAddress = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 200;
`
