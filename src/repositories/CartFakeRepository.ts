const BASE_URL = 'https://654916c9dd8ebcd4ab242aec.mockapi.io/api';
import { deleteJsonData, getJsonData, postJsonData } from "@/utils/mutations";

export async function addToCart(productId: number, quantity: number) {
    const data = { "productId": productId, "quantity": Number(quantity) }

    return postJsonData({
        data: data,
        endPoint: `${BASE_URL}/products`,
    })
}

export async function removeFromCart(uid: number) {
    deleteJsonData({
        endPoint: `${BASE_URL}/products/${uid}`
    })
}

export async function updateCart(productId: number, quantity: number, uid: number) {
    const data = { "productId": productId, "quantity": Number(quantity), "uid": uid }

    return postJsonData({
        data: data,
        endPoint: `${BASE_URL}/products/${uid}`,
    })
}

export async function getCart(): Promise<Cart> {
    return getJsonData({
        endPoint: `${BASE_URL}/cart/1`,
    })
}

export async function getProducts(): Promise<CartItem[]> {
    return getJsonData({
        endPoint: `${BASE_URL}/products`,
    })
}
