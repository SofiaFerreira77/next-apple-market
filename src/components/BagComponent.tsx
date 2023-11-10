"use client"

import Link from 'next/link';
import useCartStore from '@/store/cartStore';
import { Bag } from './shared/Icons';

export default function BagComponent() {
    const { count } = useCartStore();

    return (
        <Link href="../cart">
            <Bag />
            { count() > 0 ? count() : 0 }
        </Link>
    )
}