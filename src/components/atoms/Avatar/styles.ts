'use client'

import styled from 'styled-components'

export const UserAvatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    overflow: hidden;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
