import { formatPrice } from '@/utils/Utils'

export default function CartTotals({ totals }) {
    return (
        <section>
            <div className={'container flex flex-col gap text-right'}>
                {totals.quantity > 0 ?
                    <>
                        <p>Quantity: {totals.quantity}</p>
                        <p><strong>Sub-total: {formatPrice(totals.price, 'en-US')}</strong></p>
                        <p>Taxes: {formatPrice(totals.taxes, 'en-US')}</p>
                        <p>Delivery: {formatPrice(totals.delivery, 'en-US')}</p>
                        <h3>Total: {formatPrice(totals.totalPrice, 'en-US')}</h3>
                    </>
                    :
                    <p>Loading...</p>
                }
            </div>
        </section>
    )
}