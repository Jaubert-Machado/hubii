import * as S from './styles'
import { elipser } from '@utils/string'
import Avatar from '@atoms/Avatar'

type Props = {
    user: {
        name: string
        address: string
        picture?: string
    }
}

export default function UserHeader({
    user: { name, address, picture },
}: Props) {
    return (
        <S.Container>
            <Avatar src={picture} />
            <S.UserInfoContainer>
                <S.UserName>{elipser(name, 20)}</S.UserName>
                <S.UserAddress>{elipser(address, 20)}</S.UserAddress>
            </S.UserInfoContainer>
        </S.Container>
    )
}
