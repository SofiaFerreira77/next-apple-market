"use client"

import useCartStore from '@/store/cartStore';
import { useCallback, useState } from "react";

export default function AddToCart({ product }) {
    const [quantity, setQuantity] = useState(1);
    const {add} = useCartStore();

    const handleQuantityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        !isNaN(newQuantity) && setQuantity(newQuantity)
    }, []);

    const handleAddToCart = useCallback(() => {
        add(product, quantity);
    }, [add, product, quantity]);

    return (
        <div className="flex flex-row gap">
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}
