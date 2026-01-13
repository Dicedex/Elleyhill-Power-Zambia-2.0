
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { SiteLayout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Package, ShieldCheck, FileText, ChevronRight, Home, List, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const fullImageUrl = `https://www.elleyhillzm.com${product.image}`;

  return {
    title: `${product.name} | Elleyhill Power Zambia`,
    description: product.description,
    keywords: [product.name, product.category, 'Elleyhill Power', 'solar Zambia'],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: fullImageUrl,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: 'website',
      siteName: 'Elleyhill Power Zambia',
    },
    twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.description,
        images: [fullImageUrl],
    }
  };
}


export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

const Breadcrumbs = ({ product }: { product: any }) => (
  <nav className="flex items-center text-sm text-muted-foreground mb-4">
    <Link href="/" className="hover:text-primary flex items-center">
      <Home className="h-4 w-4 mr-2" />
      Home
    </Link>
    <ChevronRight className="h-4 w-4 mx-2" />
    <Link href="/products" className="hover:text-primary">
      Products
    </Link>
    <ChevronRight className="h-4 w-4 mx-2" />
    <Link href={`/products?category=${product.category}`} className="hover:text-primary capitalize">
      {product.category}
    </Link>
    <ChevronRight className="h-4 w-4 mx-2" />
    <span className="font-medium text-foreground">{product.name}</span>
  </nav>
);

const RelatedProducts = ({ currentProduct }: { currentProduct: any }) => {
  const related = PRODUCTS.filter(p => p.category === currentProduct.category && p.slug !== currentProduct.slug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 md:mt-24">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {related.map((product) => (
           <Link key={product.slug} href={`/products/${product.slug}`} className="group flex">
            <Card className="flex flex-col w-full overflow-hidden transition-all duration-300 group-hover:shadow-lg">
              <div className="relative h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain w-full h-full p-4"
                  data-ai-hint={product.aiHint}
                />
              </div>
              <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-end bg-muted/50 p-4 mt-auto">
                    <WhatsAppButton product={product} />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

const WhatsAppButton = ({ product }: { product: any }) => {
    const phoneNumber = "+260974041745";
    const message = `Hello! I'm interested in the ${product.name} and would like to get a quote.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
        >
            <Button variant="ghost" className="text-primary group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Get a Quote
            </Button>
        </a>
    );
};


const WhatsAppCTA = () => {
    const phoneNumber = "+260974041745";
    const message = "Hello! I'm interested in one of your products and would like to get a quote.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
    )
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
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
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="container py-16 md:py-24">
        <Breadcrumbs product={product} />
        <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              data-ai-hint={product.aiHint}
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
              <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.description}</p>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Interested in this product?</h3>
                <p className="text-sm text-muted-foreground mb-4">Contact us on WhatsApp for a personalized quote and expert advice.</p>
                <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <a 
                    href={`https://wa.me/+260974041745?text=Hello! I'm interested in the ${encodeURIComponent(product.name)}.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Get a Quote on WhatsApp
                  </a>
                </Button>
            </div>


            <Accordion type="single" collapsible className="w-full" defaultValue="features">
              <AccordionItem value="features">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle className="h-5 w-5" /> Key Features
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                     <ul className="space-y-3 pl-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

              {product.longDescription && (
                <AccordionItem value="description">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 font-semibold">
                      <FileText className="h-5 w-5" /> Detailed Description
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="prose prose-sm max-w-none text-muted-foreground">
                    {product.longDescription}
                  </AccordionContent>
                </AccordionItem>
              )}
               {product.specifications && product.specifications.length > 0 && (
                <AccordionItem value="specifications">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 font-semibold">
                      <List className="h-5 w-5" /> Specifications
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex justify-between text-sm p-2 odd:bg-muted/50 rounded-md">
                          {spec.value.trim() === '' ? 
                            <span className="font-bold text-foreground pt-2">{spec.label}</span> : 
                            <>
                              <span className="text-muted-foreground">{spec.label}:</span>
                              <span className="font-medium text-right">{spec.value}</span>
                            </>
                          }
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
              {product.whatsInTheBox && product.whatsInTheBox.length > 0 && (
                <AccordionItem value="in-the-box">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 font-semibold">
                      <Package className="h-5 w-5" /> What's in the Box
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {product.whatsInTheBox.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
               {product.warranty && (
                <AccordionItem value="warranty">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 font-semibold">
                      <ShieldCheck className="h-5 w-5" /> Warranty Information
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {product.warranty}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
        <RelatedProducts currentProduct={product} />
      </div>
      <WhatsAppCTA />
    </SiteLayout>
  );
}
