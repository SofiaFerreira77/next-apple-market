import useCartStore from '@/store/cartStore';
import { formatPrice } from '@/utils/Utils'
import Image from 'next/image'
import Link from 'next/link'

export default function CartProduct({ product }: { product: CartProduct }) {
    const { update: handleUpdateCart, remove: handleRemoveFromCart } = useCartStore();

    return (
        <div className="flex justify-between">
            <div className='flex gap'>
                <Link href={'../detail/' + product.id}>
                    <Image src={product.image} alt={product.title} width={80} height={80}
                        style={{width: "auto", maxWidth: "80px", height: "auto"}} loading="lazy" />
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
                <input type="number" value={product.count} onChange={(e) => handleUpdateCart(product, e.target.value)}/>
                <button type='button' onClick={() => handleRemoveFromCart(product.id, product.count)} aria-label={"Remove Product with id: " + product.id}>Remove</button>
            </div>
            
        </div>
    )
}