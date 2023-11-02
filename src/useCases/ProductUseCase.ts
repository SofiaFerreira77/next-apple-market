import { getCategoriesList, getProductsByCategory, getProductsList, getProductById } from "@/repositories/ProductFakeRepository";
import useSlugify from "@/hooks/useSlugify";

export async function getCategoriesListCase(): Promise<Category[]> {
    const categoriesData = await getCategoriesList();
    const categories = [];
    categoriesData ? categoriesData.map((category, index) => categories.push({ "id": index, "name": category, "slug": useSlugify(category)})) : []
    return categories as Category[];
}

export async function getProductsByCategoryCase(categories: Category[], categorySlug: string): Promise<Product[]> {
    const selectedCategory = categories.filter((category) => category.slug === categorySlug)
    const products = await getProductsByCategory(selectedCategory[0].name);
    const productsList = products ? Object.values(products) : [];
    return productsList as Product[];
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