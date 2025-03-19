'use client'

import styled from 'styled-components'

export const InformationLabel = styled.span`
    font-size: ${({ theme }) => theme.fontSize.md};
    color ${({ theme }) => theme.colors.text};
    font-weight: 300;
`

export const InformationValue = styled.p`
    font-size: ${({ theme }) => theme.fontSize.md};
    color ${({ theme }) => theme.colors.text};
    font-weight: 600;
`

export const InformationRow = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.gap.xs};
`
