type Params = {
    params: Promise<{ id: string }>
}

export default async function OrderDetails({ params }: Params) {
    const { id } = await params

    return <>order {id}</>
}
