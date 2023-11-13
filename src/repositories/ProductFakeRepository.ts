const BASE_URL = 'https://fakestoreapi.com';
import useSlugify from "@/hooks/useSlugify";
import { getJsonData } from "@/utils/mutations";

// Product List 

export async function getProductsList(): Promise<Product[]> {
    return getJsonData({
        endPoint: `${BASE_URL}/products`,
    })
}

export async function getProductById(productId: number): Promise<Product> {
    return getJsonData({
        endPoint: `${BASE_URL}/products/${productId}`,
    })
}

// Categories

export async function getCategoriesList(): Promise<Category[]> {
    const data = await getJsonData({
        endPoint: `${BASE_URL}/products/categories`
    })

    return data?.map((category, index) => ({ "id": index, "name": category, "slug": useSlugify(category) })) ?? [];
}

export async function getProductsByCategory(categoryName: string): Promise<Product[]> {
    const data = await getJsonData({
        endPoint: `${BASE_URL}/products/category/${categoryName}`,
    })

    return Object.values(data) as Product[];
}
