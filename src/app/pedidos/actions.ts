'use server'

import { promises as fs } from 'fs'
import { OrdersSchema } from '@schemas/data'

export async function getOrders() {
    const data = await fs.readFile('./src/database/database.json', 'utf8')
    const database = JSON.parse(data)

    return OrdersSchema.parse(database.orders)
}
