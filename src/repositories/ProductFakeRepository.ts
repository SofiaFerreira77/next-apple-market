const BASE_URL = 'https://fakestoreapi.com';

export async function getProductsList(): Promise<Product[]> {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data as Product[];
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
        return data as Category[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${categoryId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data as Product[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
