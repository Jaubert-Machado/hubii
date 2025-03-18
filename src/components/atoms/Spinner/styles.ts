'use client'

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite;
`
