import Heading from '@/components/shared/Heading';
import CartList from '@/components/CartList'
import CartTotals from '@/components/CartTotals';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shopping Cart"
  };
}

export default function Cart() {
  return (
    <section className='step1'>
      <div className='container'>
        <Heading title={'Shopping Cart'} subtitle={''} />
        <CartList />
        <CartTotals />
      </div>
    </section>
  )
}
