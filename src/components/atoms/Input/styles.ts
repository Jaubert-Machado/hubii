'use client'
import styled from 'styled-components'

export const InputContainer = styled.div`
    &:focus-within {
        border: black solid 1px;
    }

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.padding.xs} 15px;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: border 0.2s;
`

export const Input = styled.input`
    border: none;
    flex: 1;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }
`
