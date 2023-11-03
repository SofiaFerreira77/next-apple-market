const BASE_URL = 'https://fakestoreapi.com';
import useSlugify from "@/hooks/useSlugify";

// Product List 

export async function getProductsList(): Promise<Product[]> {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return Object.values(data) as Product[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductById(productId: number): Promise<Product> {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data as Product;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

// Categories

export async function getCategoriesList(): Promise<Category[]> {
    try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const categories = [];
        data ? data.map((category, index) => categories.push({ "id": index, "name": category, "slug": useSlugify(category)})) : [];
        return categories as Category[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductsByCategory(categoryName: string): Promise<Product[]> {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${categoryName}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return Object.values(data) as Product[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
