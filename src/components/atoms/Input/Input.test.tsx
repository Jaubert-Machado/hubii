import { render } from '@utils/jest'
import { fireEvent, screen } from '@testing-library/react'
import Input from './index'
import { ReactNode } from 'react'

describe('Input', () => {
    it('deve renderizar os ícones à esquerda e à direita corretamente', () => {
        const icons: {
            position: 'left' | 'right'
            icon: ReactNode
        }[] = [
            { position: 'left', icon: <span data-testid="left-icon">L</span> },
            {
                position: 'right',
                icon: <span data-testid="right-icon">R</span>,
            },
        ]
        render(<Input icons={icons} />)

        const leftIcon = screen.getByTestId('left-icon')
        const rightIcon = screen.getByTestId('right-icon')

        expect(leftIcon).toBeInTheDocument()
        expect(rightIcon).toBeInTheDocument()
    })

    it('deve focar no input ao clicar no container', () => {
        render(<Input />)

        const inputContainer = screen.getByRole('textbox').parentElement
        fireEvent.click(inputContainer!)

        const input = screen.getByRole('textbox')
        expect(input).toHaveFocus()
    })

    it('deve passar as props corretamente para o input', () => {
        render(<Input placeholder="Test Placeholder" />)

        const input = screen.getByPlaceholderText('Test Placeholder')
        expect(input).toBeInTheDocument()
    })
})
