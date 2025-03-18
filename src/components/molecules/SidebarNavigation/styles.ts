import styled from 'styled-components'
import Link from '@atoms/Link'

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
`

export const NavItem = styled(Link)<{ $isActive?: boolean }>`
    padding: 5px 10px;
    background-color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.primary : 'transparent'};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ $isActive, theme }) =>
        $isActive ? 'white' : theme.colors.primary};
    border-radius: 6px;
    transition: all 0.3s;
`
