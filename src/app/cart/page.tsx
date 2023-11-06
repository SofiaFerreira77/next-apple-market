"use client"

import { useEffect, useState } from 'react';
import { getCartCase } from '@/useCases/CartUseCase';
import Heading from '@/components/shared/Heading';
import CartList from '@/components/CartList'
import CartTotals from '@/components/CartTotals';

export default function Cart() {
  const [cart, setCart] = useState({
    id: 1,
    userId: 1,
    date: '',
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

  async function fetchData() {
    setLoading(true);
    const cartData = await getCartCase(1);

    try {
      setCart(cartData);
      setLoading(false);
    } catch (error) {
      console.error('Cart - Error fetching cart:', error);
      // setCart()
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <section className='step1'>
      <div className='container'>
        {!loading && cart.totals.quantity > 0 ? 
          <>
            <Heading title={'Shopping Cart: ' + cart.id} subtitle={'(' + cart.totals.quantity + ' products)'} />
            <CartList products={cart.products} />
            <p><strong>User {cart.userId}</strong> updated this cart at <strong>{cart.date}</strong></p>
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
