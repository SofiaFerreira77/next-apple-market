import { getCategoriesListCase, getProductsByCategoryCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";

export async function generateMetadata({ params }) {
  const { category } = params;

  return {
    title: 'Category: ' + category,
    description: category,
  };
}

export default function CategoryPage({ params }) {
  const { category } = params;

  const showFeaturedProducts = getCategoriesListCase().then((categories) =>
     getProductsByCategoryCase(categories, category).then((products) => <List products={products} />)
  ); 

  return (
    <>
      {showFeaturedProducts}
    </>
  )
}