export function formatCurrency(value: number, currency: string) {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency,
  })
}
