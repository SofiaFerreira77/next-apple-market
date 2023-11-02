type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

type Category = string

type ProductProps = {
    params: {
        productId: number
    }
}

type typeProducts = {
    products: Product[]
}

type typeCategories = Category[]

type SortingRules = [
    {
        rule: 'asc',
        text: 'Ascending'
    },
    {
        rule: 'desc',
        text: 'Descending'
    }
]