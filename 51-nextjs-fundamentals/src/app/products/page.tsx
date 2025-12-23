
import { IProduct } from "../types";
import ProductCard from "@/app/component/product/productCard"
const ProductPage = async () => {
  const res = fetch("http://localhost:5000/products",{
    cache:'force-cache'
  });
  const products = await (await res).json();

  console.log(products);
  return (
    <div className="container mx-auto">
      All Products
      <div className="grid grid-cols-4 gap-6">
        {products.map((product:IProduct, index:number) => (
         <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
