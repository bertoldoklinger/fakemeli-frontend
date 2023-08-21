import { Cart } from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'
import { Provider } from './context/Provider'
import './index.css'

function App() {
  return (
    <div className='w-full h-auto bg-trueGray-200'>
      <Provider>
        <Header />
        <Products />
        <Cart /> 
    </Provider>
    </div>
  )
}

export default App
