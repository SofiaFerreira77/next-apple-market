import { getCarts, removeFromCart } from "@/repositories/CartFakeRepository";
import { getProductByIdCase } from "./ProductUseCase";
import CartProduct from "@/components/CartProduct";

/* export async function addToCartCase({ userId, productId, quantity }: { userId: string, productId: number, quantity: number }) {
    postAddToCart(userId, productId, quantity);
    const products = await postAddToCart();
    const productsList = products ? Object.values(products) : [];
    return productsList as Product[];
}*/

export async function removeFromCartCase(productId: number) {
    await removeFromCart(productId);
} 

export async function getCartCase(cartId: number) {
    const cart = await getCarts(cartId);
    let extendedCart:Cart = {
        id: cart.id,
        userId: cart.userId,
        date: cart.date,
        products: []
    }

    const products = cart.products;

    products.forEach(product => {
        getProductByIdCase(product.productId)
            .then((info) => {
                const cartProduct: CartProduct = {
                    id: info.id,
                    productId : info.id,
                    quantity: product.quantity,
                    title: info.title,
                    price: info.price,
                    category: info.category,
                    image: info.image
                };
                
                extendedCart.products.push(cartProduct);
            })
    });

    return extendedCart;
}
