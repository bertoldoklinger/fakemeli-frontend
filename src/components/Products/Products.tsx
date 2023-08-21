import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchProducts } from "../../services/api";
import { Loading } from "../Loading/Loading";
import { ProductCard } from "../ProductCard/ProductCard";


export interface Product {
  id: string; 
  title: string;
  thumbnail: string;
  price: number;
}



export function Products() {

  
  const { products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('random')
      .then((response) => {
        setProducts(response);
        setLoading(false)
      });
  }, [setLoading, setProducts]);



  return ( 
    (loading ? <Loading /> : <section className=" grid grid-cols-auto-1fr gap-5 pt-[120px] px-[20px] pb-[50px] ">
    {products.map((product: Product) => (
      <ProductCard
        id={product.id}
        key={product.id} 
        title={product.title}
        thumbnail={product.thumbnail}
        price={product.price}
      />
    ))}
  </section>)
);
}
