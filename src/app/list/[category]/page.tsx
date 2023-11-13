import { getProductsByCategoryCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";

export async function generateMetadata({ params }) {
  const { category } = params;

  return {
    title: 'Category: ' + category,
    description: category,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  const categoryProducts = await getProductsByCategoryCase(category);

  return (
    <>
      { categoryProducts && <List products={categoryProducts} />}
    </>
  )
}