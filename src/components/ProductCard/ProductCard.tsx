import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AppContext } from '../../context/AppContext';
import { formatCurrency } from '../../utils/formatCurrency';


export interface ProductCardProps {
  id: string
  title: string;
  thumbnail: string;
  price: number;
}





export function ProductCard({ title, thumbnail, price , id }: ProductCardProps) {

  const { cartItems,setCartItems } = useContext(AppContext);
  
  const handleAddToCart = () => setCartItems([...cartItems, {title, thumbnail, price, id}])
  

  return (
    
    <section className="w-full max-w-[300px]  bg-white flex flex-col cursor-pointer my-0 mx-auto relative  group hover:shadow-xl">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="Produto" className="w-full  py-3" ></img>
      <div className="p-5 border-t-2 border-t-slate-200">
        <h2 className="font-montserrat text-3xl font-normal block mb-[10px]">{formatCurrency(price, 'BRL')}
        </h2>
        <h2 className="font-montserrat text-base text-gray-400 font-medium">{title}</h2>
      </div>

      <button type="button" onClick={handleAddToCart} className='absolute top-0 right-0 w-[2.75rem] h-[2.75rem] mt-3 mx-2 pl-3 text-blue-600 border-none rounded-[50px] ml-2 text-2xl cursor-pointer hidden group-hover:flex'><BsFillCartPlusFill/></button>
    </section>
);
}

