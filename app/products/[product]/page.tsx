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

interface PageProps {
  params: Promise<{ product: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  // Await the params
  const resolvedParams = await params;
  
  // Fetch data on the server side
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

  const product: ProductDet = await client.fetch(query, { id: resolvedParams.product });

  return <ProductDetailClient product={product} />;
}

// ProductDetailClient.tsx remains exactly the same as in the previous version