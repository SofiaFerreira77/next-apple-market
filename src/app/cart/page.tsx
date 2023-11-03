import { getCartCase } from '@/useCases/CartUseCase';
import CartList from '@/components/CartList'
import Heading from '@/components/shared/Heading';

export default async function Cart() {
  const cart = await getCartCase(5);

  return (
    <section className='step1'>
      <div className='container'>
        {cart ?
          <>
            <Heading title={'Shopping Cart: ' + cart.id} subtitle={'(X products)'} />
            <CartList products={cart.products} />
            <br />
            <p><strong>User {cart.userId}</strong> updated this cart at <strong>{cart.date}</strong></p>
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
