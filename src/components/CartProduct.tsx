import useCartStore from '@/store/cartStore';
import { formatPrice } from '@/utils/Utils'
import Image from 'next/image'
import Link from 'next/link'

export default function CartProduct({ product }: { product: CartItem }) {
    const { remove: handleRemoveFromCart } = useCartStore();

    /* function handleUpdateCart (e) {
        update(product, Number(e.target.value))
    } */

    return (
        <div className="flex justify-between">
            <div className='flex gap'>
                <Link href={'../detail/' + product.id}>
                    <Image src={product.image} priority alt={product.title} width={80} height={80}
                        style={{width: "auto", maxWidth: "80px", height: "auto"}} />
                </Link>

                <div className=''>
                    <Link href={'../detail/' + product.id}>
                        <h3>{product.title}</h3>
                    </Link>
                    <p className='price'>{formatPrice(product.price, 'en-US')}</p>
                    <p className='ribbon-1'>{product.category}</p>
                </div>
            </div>
            <div className='flex align-center gap'>
                {/* <input disabled type="number" value={product.count} onChange={(e) => handleUpdateCart()}/> */}
                <input disabled type="number" value={product.count} />
                <button type='button' onClick={() => handleRemoveFromCart(product.id, product.count, product.uid)} aria-label={"Remove Product with id: " + product.id}>Remove</button>
            </div>
        </div>
    )
}