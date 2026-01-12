
// /home/user/studio/src/app/products/[slug]/page.tsx

import { notFound } from "next/navigation"; // make sure this is imported
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { ProductDetailClient } from "@/components/product-detail-client";

// Tell Next.js which slugs to pre-render (static generation)
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  // If no product matches the slug, show 404
  if (!product