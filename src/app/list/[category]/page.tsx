import { getCategoriesListCase, getProductsByCategoryCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";
import Refinements from "@/components/ProductRefinements";

export async function generateMetadata({ params }) {
  const { category } = params;

  return {
    title: category,
    description: category,
  };
}

export default function CategoryPage({ params }) {
  const { category } = params;

  const showRefinements = getCategoriesListCase().then((categories) => <Refinements categories={categories} />);
  const showFeaturedProducts = getProductsByCategoryCase(category).then((products) => <List products={products} />);

  return (
    <>
      {showRefinements}
      {showFeaturedProducts}
    </>
  )
}