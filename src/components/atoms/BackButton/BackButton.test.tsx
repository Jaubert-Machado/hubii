import { fireEvent, screen } from '@testing-library/react'
import { render } from '@utils/jest'
import BackButton from '@atoms/BackButton/index'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}))

describe('BackButton', () => {
    it('deve renderizar o ícone de seta para a esquerda', () => {
        render(<BackButton />)

        const icon = screen.getByTestId('back-button-icon')

        expect(icon).toBeInTheDocument()
    })

    it('deve chamar router.back ao clicar no botão', () => {
        const router = { back: jest.fn() }
        ;(useRouter as jest.Mock).mockReturnValue(router)

        render(<BackButton />)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(router.back).toHaveBeenCalled()
    })
})
