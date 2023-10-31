import { getCategoriesListCase, getProductsByCategoryCase } from "@/useCases/ProductUseCase";
import List from "@/components/ProductList";
import Refinements from "@/components/ProductRefinements";
import Banner from "@/components/Banner";

export default function CategoryPage({ params }) {
  const { category } = params;

  const showRefinements = getCategoriesListCase().then((categories) => <Refinements categories={categories} />);
  const showFeaturedProducts = getProductsByCategoryCase(category).then((products) => <List products={products} />);

  return (
    <main className="List">
      {showRefinements}
      {showFeaturedProducts}

      <div className="container">
        <Banner darkText={true}
          image="https://www.apple.com/v/ipad/home/ch/images/overview/accessories__gdpezee1naai_large_2x.jpg"
          title="Apple at Work"
          subtitle="Get the power to take your business to the next level."
          link=""
          linkName='' />
      </div>
    </main>
  )
}