import { addToCart, removeFromCart, getCart, getProducts } from "@/repositories/CartFakeRepository";
import { create } from 'zustand';

interface CartItem extends Product {
  count: number;
}

const initialTaxes = {
  taxes: 5,
  delivery: 7,
}

type CartStore = {
  cart: CartItem[],
  totals,
  count: () => number,
  add: (product: Product, quantity: number) => void,
  update: (product: Product, quantity: number) => void,
  remove: (productId: number, quantity: number) => void,
  removeAll: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  totals: () => {
    const { cart } = get();

    const subtotal = cart.length ? cart.map(item => item.count * item.price).reduce((prev, curr) => prev + curr) : 0;
    const delivery = cart.length ? initialTaxes.delivery : 0;
    const taxes = cart.length ? initialTaxes.taxes : 0;
    const total = subtotal + delivery + taxes

    return { subtotal, delivery, taxes, total }
  },
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map(item => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (product: Product, quantity: number) => {
    const { cart } = get();
    const updatedCart = updateCart(product, quantity, cart)
    set({ cart: updatedCart });

    // db
    addToCart(product.id, quantity);
  },
  update: (product: Product, quantity: number) => {
    const { cart } = get();
    const updatedCart = updateProductCount(product, quantity, cart)
    set({ cart: updatedCart });

    // db
    // addToCart(product.id, quantity);
  },
  remove: (productId: number, quantity: number) => {
    const { cart } = get();
    const updatedCart = removeCart(productId, quantity, cart);
    set({ cart: updatedCart });

    // db
    removeFromCart(productId);
  },
  removeAll: () => set({ cart: [] }),
}));

function updateCart(product: Product, count: number, cart: CartItem[]): CartItem[] {
  const productOnCart = cart.map(item => item.id).includes(product.id);

  if (!productOnCart) {
    cart.push({ ...product, count })
  } else {
    return cart.map(item => {
      if (item.id === product.id)
        return { ...item, count: item.count + count } as CartItem;
      return item
    })
  }

  return cart;
}

function updateProductCount(product: Product, count: number, cart: CartItem[]): CartItem[] {

  return cart.map(item => {
    if (item.id === product.id)
      return { ...item, count: count } as CartItem;
    return item
  })

  // return cart;
}

function removeCart(productId: number, count: number, cart: CartItem[]): CartItem[] {
  return cart.map(item => {
    if (item.id === productId)
      return { ...item, count: item.count - count }
    return item;
  }).filter(item => {
    return item.count;
  });
}

export default useCartStore;