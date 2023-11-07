type Product = {
    id: number;
    productId: number;
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

type Category = {
    id: number;
    name: string;
    slug: string;
}

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

type Cart = {
    id: number;
    products: CartProduct[];
    totals: typeTotals;
}

type CartProduct = {
    id: number;
    productId: number;
    quantity: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

type typeTotals = {
    quantity: number;
    price: number;
    taxes: number;
    delivery: number;
    totalPrice: number;
}