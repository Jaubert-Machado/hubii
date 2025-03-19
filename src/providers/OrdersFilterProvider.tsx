'use client'
import { createContext, ReactNode, useMemo, useState } from 'react'
import { OrderStatus } from 'types/order'

type OrdersFilterContextType = {
    search: string
    orderStatus: OrderStatus | undefined
    onSearchChange: (value: string) => void
    setOrderStatus: (filter: OrderStatus | undefined) => void
}

export const OrdersFilterContext = createContext<
    OrdersFilterContextType | undefined
>(undefined)

export const OrdersFilterProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState<string>('')
    const [orderStatus, setOrderStatus] = useState<OrderStatus | undefined>(
        undefined
    )

    const onSearchChange = (value: string) => {
        setSearch(value)
    }

    const value = useMemo(
        () => ({
            search,
            orderStatus,
            onSearchChange,
            setOrderStatus,
        }),
        [search, orderStatus, setOrderStatus, onSearchChange]
    )

    return (
        <OrdersFilterContext.Provider value={value}>
            {children}
        </OrdersFilterContext.Provider>
    )
}
