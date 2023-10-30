import { getProductById, getProductsList } from "@/repositories/ProductFakeRepository";

export async function getProductsCase(): Promise<Product[]> {
    const products = await getProductsList();
    const productsList = products ? Object.values(products) : [];
    return productsList as Product[];
}

export async function getProductByIdCase(productId: number): Promise<Product> {
    const product = await getProductById(productId);
    return product as Product;
}