"use client"

import { useEffect, useState } from "react"
import { isArrayEmpty } from "../utils/Utils"
import styles from '../styles/ProductList.module.css'
import ProductItem from "./ProductItem"
import { getProductsCase } from "../useCases/ProductUseCase";

export default function List() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        const data = await getProductsCase() || [];
        setLoading(true);

        try {
            setProducts(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts([])
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <main className={styles.ProductList}>
            <div className={styles.ProductListContainer + ' container'}>
                {isArrayEmpty(products) || loading ?
                    'Loading...'
                    :
                    products?.map((product) => <ProductItem key={product.id} product={product} />)
                }
            </div>
        </main>
    )
}