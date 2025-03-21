import * as S from './styles'
import PlaceholderSVG from '@assets/PlaceholderSVG'
import { useCallback } from 'react'
import ServerDownSVG from '@assets/ServerDownSVG'

type Props = {
    type: 'empty' | 'server-error'
    message: string
}

export default function Placeholder({ message, type }: Props) {
    const svgNode = useCallback(() => {
        switch (type) {
            case 'empty':
                return <PlaceholderSVG />
            case 'server-error':
                return <ServerDownSVG />
        }
    }, [type])

    return (
        <S.Container>
            {svgNode()}
            <S.Message>{message}</S.Message>
        </S.Container>
    )
}
