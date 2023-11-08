"use client"

import { getCartCase } from '@/useCases/CartUseCase';
import { formatPrice } from '@/utils/Utils'
import { useEffect, useState } from 'react';

export default function CartTotals() {
    const [totals, setTotals] = useState({
        quantity: 0,
        price: 0,
        taxes: 5,
        delivery: 5,
        totalPrice: 0
    });

    const [loading, setLoading] = useState(false);

    async function getCartInfo() {
        setLoading(true);

        getCartCase().then((response) => {
            if (response) {
                setTotals(response.totals);
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        getCartInfo();
    }, [])

    return (
        <section>
            {totals.quantity > 0 ?
                <div className={'container flex flex-col'}>
                    <div className='flex justify-end gap'>
                        <p><strong>Sub-total:</strong></p>
                        <p><strong>{totals.price ? formatPrice(totals.price, 'en-US') : '-'}</strong></p>
                    </div>

                    <div className='flex justify-end gap'>
                        <p>Taxes:</p>
                        <p>{totals.taxes ? formatPrice(totals.taxes, 'en-US') : '-'}</p>
                    </div>

                    <div className='flex justify-end gap'>
                        <p>Delivery:</p>
                        <p>{totals.delivery ? formatPrice(totals.delivery, 'en-US') : '-'}</p>
                    </div>

                    <div className='flex justify-end gap'>
                        <h3>Total: </h3>
                        <h3>{totals.totalPrice ? formatPrice(totals.totalPrice, 'en-US') : '-'}</h3>
                    </div>
                </div>
                :
                <p>Loading Totals...</p>
            }
        </section>
    )
}