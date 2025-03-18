import { ChangeEvent } from 'react'

export function debounce(
    func: (arg: ChangeEvent<HTMLInputElement>) => void,
    delay: number
) {
    let timeoutId: NodeJS.Timeout

    return (arg: ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            func(arg)
        }, delay)
    }
}
