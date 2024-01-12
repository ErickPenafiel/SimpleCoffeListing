import './App.css'
import bgCafe from './assets/bg-cafe.jpg'
import { ProductList } from './components/ProductsList'
import { Vector } from './AssetsSvg'
import { useProducts } from './useProducts'

function App () {
  const { loading, data, viewAll, viewAvailable } = useProducts()

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className='container-image'>
        <img src={bgCafe} alt="background-coffe" />
      </div>

      <div className='container'>
        <h1 className='title'>
          Our Collection
        </h1>

        <div className="vector">
          <Vector />
        </div>

        <p className='introduction'>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>

        <div className="buttons">
          <button onClick={viewAll}>
            All Products
          </button>

          <button onClick={viewAvailable}>
            Avaliable Now
          </button>
        </div>

        {
          loading
            ? <p style={{ marginTop: '100px' }}>Loading...</p>
            : <ProductList products={data} />
        }
      </div>
    </main>
  )
}

export default App
