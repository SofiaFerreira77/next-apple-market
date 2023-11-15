"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import useCartStore from '@/store/cartStore';
import { Bag } from './shared/Icons';

export default function BagComponent() {
    const { count } = useCartStore();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(count)
    }, [count])
    
    return (
        <Link href="../cart">
            <Bag />
            { counter }
        </Link>
    )
}