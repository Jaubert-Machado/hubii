import { screen } from '@testing-library/react'
import Avatar from '.'
import { render } from '@utils/jest'

describe('Avatar', () => {
    it('deve renderizar ícone quando não houver src', () => {
        render(<Avatar />)
        const icon = screen.getByTestId('avatar-placeholder')
        expect(icon).toBeInTheDocument()
    })

    it('deve renderizar imagem quando src for fornecido', () => {
        const imgSrc = 'https://example.com/avatar.jpg'
        render(<Avatar src={imgSrc} />)

        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('src', imgSrc)
    })
})
