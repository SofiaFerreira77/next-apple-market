import { Metadata } from "next";
import { getProductByIdCase, getProductsCase } from "@/useCases/ProductUseCase";
import Image from "next/image";
import Heading from "@/components/shared/Heading";

export const dynamicParams = true;
export const revalidate = 60 * 60;

export async function generateStaticParams(): Promise<Product[]> {
  const products = await getProductsCase();
  return products
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const { productId } = params;
  const product = await getProductByIdCase(productId);

  if (!product)
    return {
      title: "Product Not Found",
    };

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Detail({ params }: ProductProps) {
  const { productId } = params;
  const product = await getProductByIdCase(productId);

  return (
    <main className="Detail">
      <div className="container flex gap-1">
        <div style={{ width: "50%", padding: "10%", background: 'white', display: "sticky", top: "0"}}>
          { product.image ? <Image src={product.image} width={100} height={100} style={{ width: "100%", height: 'auto'}} alt={product.title} /> : ''}
        </div>

        <div style={{ width: "50%"}}>
          <Heading title={product.title} subtitle={'Ref:'+product.id} />
          <p>{product.description}</p>
        </div>

      </div>
    </main>
  )
}