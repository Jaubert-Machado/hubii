import { z } from 'zod'

const CustomerSchema = z.object({
    name: z.string(),
    address: z.string(),
})

const ItemSchema = z.object({
    imagem: z.string().url().optional(),
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
})

const OrderStatusSchema = z.enum(['Pendente', 'Entregue', 'Cancelado'])

export const OrdersSchema = z.array(
    z.object({
        uuid: z.string(),
        id: z.string(),
        status: OrderStatusSchema,
        total: z.number(),
        delivery_cost: z.number(),
        shipping_method: z.string(),
        delivery_estimated: z.string(),
        customer: CustomerSchema,
        items: z.array(ItemSchema),
    })
)

export type OrderSchema = z.infer<typeof OrdersSchema>
