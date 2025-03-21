'use client'

import styled from 'styled-components'

export const InformationLabel = styled.span`
    font-weight: 300;
`

export const InformationValue = styled.p`
    font-weight: 600;
    margin-left: 2px;
`

export const InformationRow = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.text};
    flex-wrap: wrap;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.sm};
    }
`
