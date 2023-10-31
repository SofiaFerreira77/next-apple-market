import { getCategoriesList, getProductsByCategory, getProductsList, getProductById } from "@/repositories/ProductFakeRepository";


export async function getCategoriesListCase(): Promise<Category[]> {
    const categories = await getCategoriesList();
    const categoryList = categories ? Object.values(categories) : [];
    return categoryList as Category[];
}

export async function getProductsByCategoryCase(categoryId: string): Promise<Product[]> {
    const products = await getProductsByCategory(categoryId);
    const productsList = products ? Object.values(products) : [];
    return products as Product[];
}

export async function getProductsCase(): Promise<Product[]> {
    const products = await getProductsList();
    const productsList = products ? Object.values(products) : [];
    return productsList as Product[];
}

export async function getProductByIdCase(productId: number): Promise<Product> {
    const product = await getProductById(productId);
    return product as Product;
}