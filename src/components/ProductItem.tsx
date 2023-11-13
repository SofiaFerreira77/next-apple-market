import { formatPrice } from '@/utils/Utils'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/ProductItem.module.css'

export default function ProductItem({ product, index }: { product: Product, index: number}) {
    return (
        <Link href={'../detail/' + product.id} className={styles.Product}>
            <Image src={product.image} alt={product.title} priority={index < 3}
                width={300} height={300} style={{ width: "auto", height: "auto" }}/>

            <p className='ribbon-1'>{product.category}</p>
            <h3>{product.title}</h3>
            <p className='price'>{formatPrice(product.price, 'en-US')}</p>
        </Link>
    )
}