


export const fetchProducts = async (product: string) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)

  const data = await response.json()
  console.log(data)
  return data


}
fetchProducts('iphone')
