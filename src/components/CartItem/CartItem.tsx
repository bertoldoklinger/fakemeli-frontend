import { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import { AppContext } from '../../context/AppContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductCardProps } from '../ProductCard/ProductCard';



export function CartItem({id, title, price, thumbnail }:ProductCardProps) {

const { cartItems, setCartItems} = useContext(AppContext)
const handleRemoveItem = () => {
  const updatedItems = cartItems.filter(item => item.id !== id)
  setCartItems(updatedItems)
  console.log(updatedItems)
}


  return ( 
    <section className="flex justify-start border-b-trueGray-200 border-b-2 mb-5 pb-5 relative last:border-b-transparent">
      <img 
        src={thumbnail}
        alt="imagem do produto" 
        className="w-[70px]" />
      
      <div className="pr-[35px] pl-[10px]">
        <h3 className="text-[0.85rem] font-medium text-gray-500 mb-2">{title}</h3>
        <h3 className=" text-[25px]">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button"
          className="absolute top-0 right-0 text-red-500 text-[1.4rem] border-none bg-transparent cursor-pointer"
          onClick={handleRemoveItem}
        >
        <BsCartDashFill />
        </button>
      </div>
    </section>
);
}

