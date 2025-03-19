import { render } from '@utils/jest'
import { screen } from '@testing-library/react'
import Link from './index'
import { ReactNode } from 'react'

describe('Link', () => {
    it('deve renderizar o ícone e o label corretamente', () => {
        const icon: ReactNode = <span data-testid="link-icon">Icon</span>
        const label = 'Test Label'
        const href = '/test'
        render(<Link href={href} label={label} icon={icon} />)

        const renderedIcon = screen.getByTestId('link-icon')
        const renderedLabel = screen.getByText(label)

        expect(renderedIcon).toBeInTheDocument()
        expect(renderedLabel).toBeInTheDocument()
    })

    it('deve passar as props corretamente para o link', () => {
        const href = '/test'
        render(<Link href={href} label="Test Label" icon={<span />} />)

        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', href)
    })
})
