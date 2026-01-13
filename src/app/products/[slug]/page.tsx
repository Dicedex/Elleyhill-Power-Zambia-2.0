
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { ProductDetailClient } from "@/components/product-detail-client";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const getBrandName = (productName: string) => {
    if (productName.toLowerCase().includes('greenrich')) return 'Greenrich';
    if (productName.toLowerCase().includes('growatt')) return 'Growatt';
    if (productName.toLowerCase().includes('kapa')) return 'KAPA Energie';
    if (productName.toLowerCase().includes('ssre')) return 'SSRE';
    return 'Elleyhill';
  };

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: `https://www.elleyhillzm.com${product.image}`,
    description: product.description,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: getBrandName(product.name),
    },
    offers: {
      "@type": "Offer",
      url: `https://www.elleyhillzm.com/products/${product.slug}`,
      priceCurrency: "ZMW",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    },
    aggregateRating: {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "52"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
