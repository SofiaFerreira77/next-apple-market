import { formatPrice } from '@/utils/Utils'

export default function CartTotals({ totals }) {
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