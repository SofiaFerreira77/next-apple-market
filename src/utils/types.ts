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

type ProductProps = {
    params: {
        productId: number
    }
}