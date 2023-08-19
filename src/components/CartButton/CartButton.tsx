import { AiOutlineShoppingCart } from 'react-icons/ai';


function CartButton() {
  return ( 
    <button className="text-2xl flex p-2 border-none cursor-pointer relative ml-5" type="button" >
      <AiOutlineShoppingCart className="w-[30px] h-[30px]"/>
      <span className='bg-red-500 font-montserrat font-semibold text-sm w-[20px] h-[20px] text-white absolute rounded-2xl top-0 left-0 '>1</span>
    </button>
  );
}

export default CartButton;