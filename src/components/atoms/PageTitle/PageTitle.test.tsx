import { render } from '@utils/jest'
import { screen } from '@testing-library/react'
import PageTitle from '@atoms/PageTitle/index'

describe('PageTitle', () => {
    it('deve renderizar o título corretamente', () => {
        const title = 'Test Title'
        render(<PageTitle title={title} />)

        const renderedTitle = screen.getByText(title)
        expect(renderedTitle).toBeInTheDocument()
    })
})
