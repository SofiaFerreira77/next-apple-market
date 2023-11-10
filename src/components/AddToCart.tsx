"use client"

import useCartStore from '@/store/cartStore';
import { useState } from "react";

export default function AddToCart({ product }) {
    const [quantity, setQuantity] = useState(1);
    const {add: handleAddToCart} = useCartStore();

    return (
        <div className="flex flex-row gap">
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            <button onClick={() => handleAddToCart(product, quantity)}>Add to cart</button>
        </div>
    )
}
