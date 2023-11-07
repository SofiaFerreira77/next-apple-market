import { addToCart, getCart, getProducts, removeFromCart } from "@/repositories/CartFakeRepository";
import { getProductByIdCase } from "./ProductUseCase";

export function addToCartCase({ productId, quantity }: { productId: number, quantity: number }) {
    addToCart(productId, quantity);
}

export function removeFromCartCase(productId: number) {
    removeFromCart(productId);
}

export async function getCartQuantityCase(): Promise<Number> {
    const products = await getProducts();

    // Use Promise.all to wait for all asynchronous calls to finish
    const cartProductsPromises = products.map(async (product) => {
        const cartProduct = {
            quantity: product.quantity
        };
        return cartProduct;
    });

    // Wait for all promises to resolve
    const cartProducts = await Promise.all(cartProductsPromises);

    // Calculate totals
    const totals = cartProducts.reduce((acc, product) => {
        acc.quantity += product.quantity;
        return acc;
    }, {
        quantity: 0
    });

    return totals.quantity
}

export async function getCartCase(): Promise<Cart> {
    const cart = await getCart();
    const products = await getProducts();

    // Use Promise.all to wait for all asynchronous calls to finish
    const cartProductsPromises = products.map(async (product) => {
        const info = await getProductByIdCase(product.productId);

        const cartProduct: CartProduct = {
            id: info.id,
            productId: info.id,
            quantity: product.quantity,
            title: info.title,
            price: info.price,
            category: info.category,
            image: info.image
        };
        return cartProduct;
    });

    // Wait for all promises to resolve
    const cartProducts = await Promise.all(cartProductsPromises);

    // Calculate totals
    const totals = cartProducts.reduce((acc, product) => {
        acc.quantity += product.quantity;
        acc.price += product.price * product.quantity;
        return acc;
    }, {
        quantity: 0,
        price: 0
    });

    // Handle the case where cart.totals is undefined
    const cartTotals = cart.totals || { taxes: 5, delivery: 5 };

    const extendedCart: Cart = {
        id: cart.id,
        products: cartProducts,
        totals: {
            quantity: totals.quantity,
            price: totals.price,
            taxes: cartTotals.taxes, // Use default value or value from cart.totals
            delivery: cartTotals.delivery, // Use default value or value from cart.totals
            totalPrice: totals.price + cartTotals.taxes + cartTotals.delivery
        }
    };

    console.log(extendedCart)
    return extendedCart;
}
