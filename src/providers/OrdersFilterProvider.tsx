'use client'
import { ChangeEvent, createContext, ReactNode, useMemo, useState } from 'react'
import { OrderStatus } from 'types/order'

type OrdersFilterContextType = {
    search: string
    orderStatus: OrderStatus | undefined
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
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

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const value = useMemo(
        () => ({
            search,
            orderStatus,
            onChange,
            setOrderStatus,
        }),
        [search, orderStatus, setOrderStatus, onChange]
    )

    return (
        <OrdersFilterContext.Provider value={value}>
            {children}
        </OrdersFilterContext.Provider>
    )
}
