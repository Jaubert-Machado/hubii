import { render } from '@utils/jest'
import { screen } from '@testing-library/react'
import OrderStatusBadge from './index'
import { useTranslations } from 'next-intl'

jest.mock('next-intl', () => ({
    useTranslations: jest.fn(),
}))

describe('OrderStatusBadge', () => {
    beforeEach(() => {
        ;(useTranslations as jest.Mock).mockReturnValue((key: string) => {
            const translations: Record<string, string> = {
                'status.pending': 'Pendente',
                'status.delivered': 'Entregue',
                'status.canceled': 'Cancelado',
            }
            return translations[key]
        })
    })

    it('deve renderizar o status pendente corretamente', () => {
        render(<OrderStatusBadge status="pending" />)
        const status = screen.getByText('Pendente')
        expect(status).toBeInTheDocument()
    })

    it('deve renderizar o status entregue corretamente', () => {
        render(<OrderStatusBadge status="delivered" />)
        const status = screen.getByText('Entregue')
        expect(status).toBeInTheDocument()
    })

    it('deve renderizar o status cancelado corretamente', () => {
        render(<OrderStatusBadge status="canceled" />)
        const status = screen.getByText('Cancelado')
        expect(status).toBeInTheDocument()
    })
})
