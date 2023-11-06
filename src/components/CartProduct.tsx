"use client"

import { formatPrice } from '@/utils/Utils'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/ProductItem.module.css'
import { removeFromCartCase } from '@/useCases/CartUseCase'

export default function CartProduct({ product }: { product: CartProduct }) {
    function removeProduct(productId) {
        removeFromCartCase(productId)
    }

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
                    <p>{product.quantity}</p>
                    <p className='price'>{formatPrice(product.price, 'en-US')}</p>
                    <p className='ribbon-1'>{product.category}</p>
                </div>
            </div>
            <button type='button' onClick={() => removeProduct(product.id)} aria-label={"Remove Product with id: "+product.id}>Remove</button>
        </div>
    )
}