export default function localizeCurrency(value: number | string) {
    if (isNaN(Number(value))) {
        throw new Error('Value is not a number')
    }

    const parsedValue = Number(value)

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(parsedValue)
}
