// page.tsx
import { client } from "@/sanity/lib/client";
import ProductDetailClient from "../../components/ProductDetailClient";

interface ProductColor {
  hex: string;
}

interface ProductDet {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  href: string;
  price: number;
  discountPercentage: number;
  description: string;
  colors: ProductColor[];
  rating_5: number;
  rating_4: number;
  rating_3: number;
  rating_2: number;
  rating_1: number;
  createdOn: string;
}

// Generate static params
export async function generateStaticParams() {
  const query = `*[_type == "products"]{ _id }`;
  const products = await client.fetch(query);
  
  return products.map((product: { _id: string }) => ({
    product: product._id,
  }));
}

// Fetch product data
async function getProduct(productId: string): Promise<ProductDet> {
  'use server';
  
  const query = `*[_type == "products" && _id == $id][0] {
    _id,
    name,
    description,
    image{ asset->{ url } },
    href,
    price,
    discountPercentage,
    colors,
    rating_5,
    rating_4,
    rating_3,
    rating_2,
    rating_1,
    createdOn
  }`;

  return client.fetch(query, { id: productId });
}

interface PageProps {
  params: { product: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage(props: PageProps) {
  const { params } = props;
  
  try {
    const product = await getProduct(params.product);

    if (!product) {
      return <div className="text-center p-8">Product not found</div>;
    }

    return <ProductDetailClient product={product} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div className="text-center p-8">Error loading product</div>;
  }
}

// Opt into dynamic behavior
export const dynamic = 'force-dynamic';
export const revalidate = 0;