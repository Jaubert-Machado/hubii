import { fireEvent, screen } from '@testing-library/react'
import { render } from '@utils/jest'
import FilterBagde from '@atoms/FilterBagde/index'
import { theme } from '@configs/theme'
import { OrderStatus } from 'types/order'

describe('FilterBagde', () => {
    it('deve renderizar o título corretamente', () => {
        const title = 'Test Title'
        render(
            <FilterBagde title={title} isActive={false} status="delivered" />
        )

        const button = screen.getByRole('button', { name: title })
        expect(button).toBeInTheDocument()
    })

    it('deve aplicar a classe ativa quando isActive for verdadeiro', () => {
        const title = 'Active Title'
        const status: OrderStatus = 'delivered'
        render(<FilterBagde title={title} isActive={true} status={status} />)

        const button = screen.getByRole('button', { name: title })
        expect(button).toHaveStyle(
            `background-color: ${theme.colors.badges[status]}`
        )
    })

    it('deve chamar a função onClick quando o botão for clicado', () => {
        const onClick = jest.fn()
        const title = 'Clickable Title'

        render(
            <FilterBagde
                title={title}
                isActive={false}
                onClick={onClick}
                status="delivered"
            />
        )

        const button = screen.getByRole('button', { name: title })
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalled()
    })
})
