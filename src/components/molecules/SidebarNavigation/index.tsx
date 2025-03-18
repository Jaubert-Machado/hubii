import * as S from './styles'
import { Link } from '@atoms/Link'
import { usePathname } from 'next/navigation'

type Props = {
    links: Link[]
}

export default function SidebarNavigation({ links }: Props) {
    const pathname = usePathname()

    return (
        <S.Nav>
            {links.map(({ href, label, icon }) => {
                const isActive = pathname === href

                return (
                    <S.NavItem
                        icon={icon}
                        key={href}
                        href={href}
                        label={label}
                        $isActive={isActive}
                    />
                )
            })}
        </S.Nav>
    )
}
