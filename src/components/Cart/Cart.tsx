import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { CartItem } from '../CartItem/CartItem'

export function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <section
      className={`w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 pt-28 pb-5 px-5 flex flex-col justify-between transform ${
        isCartVisible ? 'translate-x-0' : 'translate-x-full'
      } ease-in-out duration-300`}
    >
      <div className="flex-grow overflow-auto">
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            price={item.price}
            thumbnail={item.thumbnail}
            title={item.title}
          />
        ))}
      </div>

      <div className="text-[1.8rem] font-montserrat font-medium pt-[35px] py-[15px] border-t-2 border-bg-trueGray-200">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  )
}
