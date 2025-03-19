import { screen } from '@testing-library/react'
import { render } from '@utils/jest'
import PageContent from './index'

describe('PageContent', () => {
    it('deve renderizar os filhos corretamente', () => {
        render(
            <PageContent>
                <div data-testid="child">Child</div>
            </PageContent>
        )
        const child = screen.getByTestId('child')
        expect(child).toBeInTheDocument()
    })
})
