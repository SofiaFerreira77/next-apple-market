const BASE_URL = 'https://fakestoreapi.com';

export async function getProductsList() {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductById(productId) {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}