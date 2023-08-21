import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';


export function CartButton() {
  const { cartItems,setIsCartVisible,isCartVisible } = useContext(AppContext)

  const handleCart = () => {
    setIsCartVisible(!isCartVisible)
  }
  return ( 
    <button className="text-2xl flex p-2 border-none cursor-pointer relative ml-5" type="button" onClick={handleCart}>
      <AiOutlineShoppingCart className="w-[30px] h-[30px]"/>
      { cartItems.length > 0 && <span className='bg-red-500 font-montserrat font-semibold text-sm w-[20px] h-[20px] text-white absolute rounded-2xl top-0 left-0 '>{cartItems.length}</span> }
    </button>
  );
}

