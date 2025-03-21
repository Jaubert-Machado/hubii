import * as S from './styles'
import UserHeader from '@molecules/UserHeader'
import SidebarNavigation from '@molecules/SidebarNavigation'
import { Link } from '@atoms/Link'

type Props = {
    user: {
        name: string
        address: string
        picture?: string
    }
    links: Link[]
}

export default function Sidebar({ user, links }: Props) {
    return (
        <S.Container>
            <UserHeader user={user} />
            <SidebarNavigation links={links} />
        </S.Container>
    )
}
