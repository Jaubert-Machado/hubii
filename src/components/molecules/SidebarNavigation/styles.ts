import styled from 'styled-components'
import Link from '@atoms/Link'

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
`

export const NavItem = styled(Link)<{ $isActive?: boolean }>`
    &:hover {
        background-color: ${({ $isActive, theme }) =>
            $isActive ? theme.colors.primary : 'hsl(0, 0%, 90%)'};
    }

    padding: 5px 15px;
    background-color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.primary : 'transparent'};
    color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.white : theme.colors.primary};
    border-radius: 20px;
    transition: all 0.3s;
`
