import { getProductById, getProductsList } from "../repositories/ProductFakeRepository";

export async function getProductsCase() {
    const products = await getProductsList();
    const productsList = products ? Object.values(products) : [];
    return productsList;
}

export async function getProductCase(productId) {
    const product = await getProductById(productId);
    return product;
}