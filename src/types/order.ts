export const orderStatusMap = {
    pending: 'Pendente',
    delivered: 'Entregue',
    canceled: 'Cancelado',
} as const

export type OrderStatus = keyof typeof orderStatusMap
