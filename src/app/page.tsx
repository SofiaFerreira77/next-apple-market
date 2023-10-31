import { getProductsCase } from '@/useCases/ProductUseCase';
import Banner from '@/components/Banner'
import List from '@/components/ProductList'

export default function Home() {
  const showFeaturedProducts = getProductsCase().then((products) => <List products={products} />);

  return (
    <main className="Home">
      <Banner image="https://www.apple.com/v/mac/home/bv/images/overview/get-more/business__dhhbnntkcwuq_large_2x.jpg"
        title="Apple at Work"
        subtitle="Get the power to take your business to the next level."
        link="https://www.apple.com/business/"
        linkName='Learn about Apple at Work' />

      { showFeaturedProducts }
    </main>
  )
}
