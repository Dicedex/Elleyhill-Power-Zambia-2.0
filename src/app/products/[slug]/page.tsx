
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailClient } from "@/components/product-detail-client";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
