const BASE_URL = 'https://fakestoreapi.com';

// Cart

export async function getCarts(cartId: number): Promise<Cart> {
    try {
        const response = await fetch(`${BASE_URL}/carts/${cartId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data as Cart;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}


export async function addToCart(productId: number) {
    // Send the update to cart using a POST method
}

export async function removeFromCart(productId: number) {
    // Send the update to cart using a POST method
}
