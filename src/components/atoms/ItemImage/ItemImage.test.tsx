import { render } from '@utils/jest'
import { screen } from '@testing-library/react'
import ItemImage from './index'

describe('ItemImage', () => {
    it('deve renderizar a imagem quando src é fornecido', () => {
        render(<ItemImage src="test.jpg" alt="Test Image" />)

        const image = screen.getByAltText('Test Image')
        expect(image).toBeInTheDocument()
    })

    it('deve renderizar o placeholder quando src não é fornecido', () => {
        render(<ItemImage />)

        const placeholder = screen.getByTestId('item-image-placeholder')
        expect(placeholder).toBeInTheDocument()
    })
})
