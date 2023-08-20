import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import { ProductCard } from "../ProductCard/ProductCard";

interface Product {
  id: string; 
  title: string;
  thumbnail: string;
  price: number;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts('iphone')
      .then((response) => {
        setProducts(response.results);
      });
  }, []);

  return ( 
    <section className=" grid grid-cols-auto-1fr gap-5 pt-[120px] px-[20px] pb-[50px] ">
      {products.map((product:Product) => (
        <ProductCard
          key={product.id} 
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
        />
      ))}
    </section>
  );
}

