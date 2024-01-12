import { useEffect, useRef, useState } from 'react'
import { fetchProducts } from './services/fetchProducts'

export const useProducts = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setData(data)
        originalProducts.current = data
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
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

  return { loading, data, setData, originalProducts, viewAll, viewAvailable }
}
