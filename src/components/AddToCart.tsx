"use client"

import { addToCartCase } from "@/useCases/CartUseCase";
import { useState } from "react";

export default function AddToCart({ product }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            <button onClick={() => addToCartCase({ productId: product, quantity })}>Add to cart</button>
        </>
    )
}
