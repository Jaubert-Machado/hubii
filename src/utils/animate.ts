import { Variants } from 'motion/react'

export function animate(variants: Variants) {
    return {
        variants: variants,
        animate: 'animate',
        initial: 'initial',
        exit: 'exit',
    }
}
