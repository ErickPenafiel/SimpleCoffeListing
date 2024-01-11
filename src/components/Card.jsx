import { StarFill } from '../AssetsSvg'
import './Card.css'

export function Card ({ id, name, image, price, rating, votes, popular, available }) {
  return (
    <div className="card" key={id}>
      {popular && <span className='badge-popular'>Popular</span>}
      <img src={image} alt={name} />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StarFill />
            <p className='product-rating'> {rating} <span style={{ color: '#6F757C' }}>({votes} votes)</span></p>
          </div>
          {!available && <span className='sold-out'>Sold out</span>}
        </div>
      </div>

    </div>
  )
}
