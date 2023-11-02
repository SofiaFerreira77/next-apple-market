import { getCategoriesListCase, getProductsCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";
import Refinements from "@/components/ProductRefinements";

export default function ListPage() {
  const showRefinements = getCategoriesListCase().then((categories) => <Refinements categories={categories} />);
  const showFeaturedProducts = getProductsCase().then((products) => <List products={products} />);
  
  return (
    <>
      {showRefinements}
      {showFeaturedProducts}
    </>
  )
}