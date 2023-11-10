"use client"

import { formatPrice } from '@/utils/Utils'
import useCartStore from '@/store/cartStore';

export default function CartTotals() {
    const { totals, count } = useCartStore();

    return (
        <section className={'container flex flex-col'}>
            <div className='flex justify-end gap'>
                <p><strong>Sub-total:</strong></p>
                <p><strong>{totals().subtotal ? formatPrice(totals().subtotal, 'en-US') : '-'}</strong></p>
            </div>

            <div className='flex justify-end gap'>
                <p>Taxes:</p>
                <p>{totals().taxes ? formatPrice(totals().taxes, 'en-US') : '-'}</p>
            </div>

            <div className='flex justify-end gap'>
                <p>Delivery:</p>
                <p>{totals().delivery ? formatPrice(totals().delivery, 'en-US') : '-'}</p>
            </div>

            <div className='flex justify-end gap'>
                <h3>Total: </h3>
                <h3>{totals().total ? formatPrice(totals().total, 'en-US') : '-'}</h3>
            </div>
        </section>
    )
}