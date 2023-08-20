import { CartButton } from "../CartButton/CartButton";
import { SearchBar } from "../SearchBar/SearchBar";





export function Header() {
  return(
    <header className="bg-yellow-200 fixed w-full z-[1]">
      <div className="max-w-[1100px] mx-auto my-0 bg-yellow-200 flex justify-between px-5 py-5">
        <SearchBar />
        <CartButton />
      </div>
    
    </header>
  )
}