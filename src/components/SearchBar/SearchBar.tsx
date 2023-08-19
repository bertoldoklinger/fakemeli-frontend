import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';


function SearchBar() {

  const [searchValue, setSearchValue] = useState<string>("");


  return (  
  <form className='flex bg-white w-full max-w-[500px] justify-between shadow-lg gap-3 pr-3'>
    <input className='p-3 flex-grow  outline-none text-base font-medium flex align-middle justify-center border-r-gray-200 border-r shadow-lg ' type="search" value={searchValue}  placeholder="Buscar produtos" required onChange={({target}) => setSearchValue(target.value)}/>
    {searchValue}
    <button className='background-none border-none text-base align-middle justify-center rounded-lg' type="submit"><BsSearch/></button>
  </form> 
  );
}

export default SearchBar;