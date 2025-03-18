import * as S from './styles'
import { ComponentProps, memo, ReactNode, useRef } from 'react'

type IconProps = {
    position: 'left' | 'right'
    icon: ReactNode
}

type Props = {
    icons?: IconProps[]
} & ComponentProps<'input'>

const Icon = memo(({ icon }: { icon: ReactNode }) => <>{icon}</>)

export default function Input({ icons, ...props }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)

    function onClickInput() {
        inputRef.current?.focus()
    }

    const leftIcons = icons?.filter((icon) => icon.position === 'left')
    const rightIcons = icons?.filter((icon) => icon.position === 'right')

    return (
        <S.InputContainer onClick={onClickInput}>
            {leftIcons?.map((icon, index) => (
                <Icon key={`left-${index}`} icon={icon.icon} />
            ))}
            <S.Input {...props} ref={inputRef} />
            {rightIcons?.map((icon, index) => (
                <Icon key={`right-${index}`} icon={icon.icon} />
            ))}
        </S.InputContainer>
    )
}
