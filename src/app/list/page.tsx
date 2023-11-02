import { getProductsCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";

export function generateMetadata() {
  return {
    title: 'List page',
    description: 'List page',
  };
}

export default function ListPage() {
  const showFeaturedProducts = getProductsCase().then((products) => <List products={products} />);
  
  return (
    <>
      {showFeaturedProducts}
    </>
  )
}