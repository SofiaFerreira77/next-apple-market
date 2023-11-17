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
        <Link href="../cart" style={{position: 'relative'}}>
            <Bag />
            <div style={{position: 'absolute', bottom: '-5px', right: '-18px', minWidth: '25px', textAlign: 'center', backgroundColor: 'red', color: '#fff', padding: '2px', borderRadius: '100%' }}>
                { counter }
            </div>
        </Link>
    )
}