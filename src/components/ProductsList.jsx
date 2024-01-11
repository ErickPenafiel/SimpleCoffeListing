import { Card } from './Card'

export function ProductList ({ products }) {
  return (
    <div className="products">
      {
        products.map((product) => (
          <Card key={product.id} {...product} />
        ))
      }
    </div>
  )
}
