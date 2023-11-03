import { getCategoriesList, getProductsByCategory, getProductsList, getProductById } from "@/repositories/ProductFakeRepository";

export async function getProductsCase(): Promise<Product[]> {
    return await getProductsList();
}

export async function getProductByIdCase(productId: number): Promise<Product> {
    return await getProductById(productId);
}

export async function getCategoriesListCase(): Promise<Category[]> {
    return await getCategoriesList();
}

export async function getProductsByCategoryCase(categorySlug: string): Promise<Product[]> {
    const selectedCategory = await getCategoriesList().then(categories => categories.filter((category) => category.slug === categorySlug));
    const products = await getProductsByCategory(selectedCategory[0].name);
    return products as Product[];
}

// export async function getProductsSortedCase(): Promise<Product[]> {
    // fetch('https://fakestoreapi.com/products?sort=desc')
    // return await getProductsList();
// }