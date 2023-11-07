"use client"

import { useEffect, useState } from 'react';
import { getCartCase } from '@/useCases/CartUseCase';
import Heading from '@/components/shared/Heading';
import CartList from '@/components/CartList'
import CartTotals from '@/components/CartTotals';

export default function Cart() {
  const [cart, setCart] = useState({
    id: 1,
    products: [],
    totals: {
      quantity: 0,
      price: 0,
      taxes: 0,
      delivery: 0,
      totalPrice: 0
    }
  });

  const [loading, setLoading] = useState(false);

  async function getCartInfo() {
    setLoading(true);

    getCartCase().then((response) => {
      if (response) {
        setCart(response);
        setLoading(false);
      }
    });
  }

  useEffect(() => {
    getCartInfo();
  }, [])

  return (
    <section className='step1'>
      <div className='container'>
        {!loading && cart.totals.quantity > 0 ? 
          <>
            <Heading title={'Shopping Cart'} subtitle={'(' + cart.totals.quantity + ' products)'} />
            <CartList products={cart.products} />
            <CartTotals totals={cart.totals}/>
          </>
          :
          <>
            <Heading title={'Shopping Cart: '} subtitle={'Loading'} />
            <p>Loading...</p>
          </>
        }
      </div>
    </section>
  )
}
