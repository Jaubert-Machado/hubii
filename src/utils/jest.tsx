import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import ThemeProvider from '@providers/ThemeProvider'

const AllProviders = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) =>
    render(ui, {
        wrapper: AllProviders,
        ...options,
    })

export { customRender as render }
