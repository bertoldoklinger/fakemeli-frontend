import { FormEvent, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AppContext } from '../../context/AppContext';
import { fetchProducts } from '../../services/api';


export function SearchBar() {

  const [searchValue, setSearchValue] = useState<string>("");

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  }
  
  return (  
  <form className='flex bg-white w-full max-w-[500px] justify-between shadow-lg gap-3 pr-3' onSubmit={handleSearch}>
    <input className='p-3 flex-grow  outline-none text-base font-medium flex align-middle justify-center border-r-gray-200 border-r shadow-lg ' type="search" value={searchValue}  placeholder="Buscar produtos" required onChange={({target}) => setSearchValue(target.value)}/>
    <button className='bg-transparent border-none text-base align-middle justify-center rounded-lg' type="submit" ><BsSearch/></button>
  </form> 
  );
}

