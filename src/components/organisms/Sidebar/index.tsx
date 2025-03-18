'use client'

import * as S from './styles'
import UserHeader from '@molecules/UserHeader'

export default function Sidebar() {
    return (
        <S.Container>
            <UserHeader
                user={{
                    name: 'Jaubert Machado',
                    address: 'Rua das Flores, 123',
                    picture: 'https://avatar.iran.liara.run/public/18',
                }}
            />
        </S.Container>
    )
}
