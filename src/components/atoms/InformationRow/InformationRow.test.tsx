import { render } from '@utils/jest'
import { screen } from '@testing-library/react'
import InformationRow from './index'
import { elipser } from '@utils/string'

jest.mock('@utils/string', () => ({
    elipser: jest.fn((value, limit) => value.substring(0, limit) + '...'),
}))

describe('InformationRow', () => {
    it('deve renderizar o label corretamente', () => {
        render(<InformationRow label="Test Label" value="Test Value" />)

        const label = screen.getByText('Test Label')
        expect(label).toBeInTheDocument()
    })

    it('deve renderizar o valor corretamente quando não há limite', () => {
        render(<InformationRow label="Test Label" value="Test Value" />)

        const value = screen.getByText('Test Value')
        expect(value).toBeInTheDocument()
    })

    it('deve renderizar o valor truncado quando há limite', () => {
        render(
            <InformationRow label="Test Label" value="Test Value" limit={4} />
        )

        const value = screen.getByText('Test...')
        expect(value).toBeInTheDocument()
        expect(elipser).toHaveBeenCalledWith('Test Value', 4)
    })

    it('deve renderizar o valor numérico corretamente', () => {
        render(<InformationRow label="Test Label" value={12345} />)

        const value = screen.getByText('12345')
        expect(value).toBeInTheDocument()
    })
})
