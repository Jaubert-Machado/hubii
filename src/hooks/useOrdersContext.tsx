import { useContext } from 'react'
import { OrdersFilterContext } from '@providers/OrdersFilterProvider'

export const useOrdersFilter = () => {
    const context = useContext(OrdersFilterContext)

    if (!context) {
        throw new Error(
            'useOrdersFilter must be used within an OrdersFilterProvider'
        )
    }

    return context
}
