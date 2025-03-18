'use client'
import { ChangeEvent, createContext, ReactNode, useMemo, useState } from 'react'
import { OrderStatus } from 'types/order'

type OrdersFilterContextType = {
    search: string
    filter: OrderStatus
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setFilter: (filter: OrderStatus) => void
}

export const OrdersFilterContext = createContext<
    OrdersFilterContextType | undefined
>(undefined)

export const OrdersFilterProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<OrderStatus>('delivered')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const value = useMemo(
        () => ({
            search,
            filter,
            onChange,
            setFilter,
        }),
        [search, filter, setFilter, onChange]
    )

    return (
        <OrdersFilterContext.Provider value={value}>
            {children}
        </OrdersFilterContext.Provider>
    )
}
