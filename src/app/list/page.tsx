import { getProductsCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";

export function generateMetadata() {
  return {
    title: 'List page',
    description: 'List page',
  };
}

export default async function ListPage() {
  const featuredProducts = await getProductsCase();
  
  return (
    <>
      { featuredProducts && <List products={featuredProducts} />}
    </>
  )
}