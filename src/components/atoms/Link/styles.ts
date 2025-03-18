import styled from 'styled-components'
import Link from 'next/link'

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    gap: 8px;
    align-items: center;
`
