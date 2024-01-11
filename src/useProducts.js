import { useEffect, useRef, useState } from 'react'
import { fetchProducts } from './services/fetchProducts'

export const useProducts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setData(data)
        originalProducts.current = data
      })
      .catch(error => console.log(error))
  }, [])

  const originalProducts = useRef(null)

  const viewAll = () => {
    setData(originalProducts.current)
  }

  const viewAvailable = () => {
    const available = data.filter((product) => {
      return product.available === true
    })

    setData(available)
  }

  return { data, setData, originalProducts, viewAll, viewAvailable }
}
