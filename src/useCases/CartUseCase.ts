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

export async function getCartCase(cartId: number): Promise<Cart> {
    const cart = await getCarts(cartId);
    const products = cart.products;

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
    const cartTotals = cart.totals || { taxes: 0, delivery: 0 };

    const extendedCart: Cart = {
        id: cart.id,
        userId: cart.userId,
        date: cart.date,
        products: cartProducts,
        totals: {
            quantity: totals.quantity,
            price: totals.price,
            taxes: cartTotals.taxes, // Use default value or value from cart.totals
            delivery: cartTotals.delivery, // Use default value or value from cart.totals
            totalPrice: totals.price + cartTotals.taxes + cartTotals.delivery
        }
    };

    return extendedCart;
}
