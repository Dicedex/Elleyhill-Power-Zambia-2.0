
"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Package, ShieldCheck, FileText, ChevronRight, Home, List } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Product } from "@/data/products";
import { PRODUCTS } from "@/data/products";


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
              <CardFooter className="flex items-center bg-muted/50 p-4 mt-auto">
                    <WhatsAppButton product={product} />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

function WhatsAppButton({ product }: { product: any }) {
    "use client";
    const phoneNumber = "+260974041745";
    const message = `Hello! I'm interested in the ${product.name} and would like to get a quote.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between w-full text-primary hover:text-primary/80 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c26.9 0 53.3 6.5 77.2 19.4l-9.1-6.1c-15.8-10.6-32.9-15.9-50-15.9-102.3 0-185.1 82.8-185.1 185.1 0 35.9 10.2 69.8 28.7 99.1l-6.5 9.4-25.7 37.3 38.3-9.9 9.1-2.3c29.4 15.6 62.9 24.3 98.3 24.3h.1c102.3 0 187-82.8 187-185.1 0-48.8-19.3-94.8-54-130.4-34.9-35.6-81.2-54.8-130.5-54.8zM223.9 455.9h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-49.8 13.1 13.3-48.5-4.4-6.9C57.4 352.9 47.7 319 47.7 284c0-96.9 78.8-175.7 176.2-175.7 47.4 0 92 18.5 125.1 51.6 33.1 33.1 51.6 77.7 51.6 125.1C450.5 377.1 349.8 455.9 223.9 455.9zM332.8 333c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-27.6-14.3-45.6-25.1-65.2-44.8-14.3-14.3-24-32.3-24-32.3s-3.7-4.2 1.4-8.8c4.6-4.2 8.8-8.8 11.2-12.5 2.4-3.7 3.7-6.5 1.4-11.2-2.3-4.6-22.3-53.7-25.1-60.9-2.8-7.2-5.6-6.5-8.8-6.5-3.2 0-7.2 0-10.6 0s-8.8 1.4-13.1 6.5c-4.2 5.1-16.2 15.6-16.2 37.9s16.2 44.8 18.5 47.6c2.3 2.8 32.8 52.1 79.7 74.9 37.9 19.4 46.2 21.8 54 21.8 11.2 0 21.8-1.4 25.1-2.8 10.6-5.1 22.3-21.8 25.1-29.4 2.8-7.2 2.8-13.1 1.4-15.6-1.4-2.3-5.1-4.2-10.6-7z"/></svg>
            <span className="font-medium text-sm">Get a Quote</span>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c26.9 0 53.3 6.5 77.2 19.4l-9.1-6.1c-15.8-10.6-32.9-15.9-50-15.9-102.3 0-185.1 82.8-185.1 185.1 0 35.9 10.2 69.8 28.7 99.1l-6.5 9.4-25.7 37.3 38.3-9.9 9.1-2.3c29.4 15.6 62.9 24.3 98.3 24.3h.1c102.3 0 187-82.8 187-185.1 0-48.8-19.3-94.8-54-130.4-34.9-35.6-81.2-54.8-130.5-54.8zM223.9 455.9h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-49.8 13.1 13.3-48.5-4.4-6.9C57.4 352.9 47.7 319 47.7 284c0-96.9 78.8-175.7 176.2-175.7 47.4 0 92 18.5 125.1 51.6 33.1 33.1 51.6 77.7 51.6 125.1C450.5 377.1 349.8 455.9 223.9 455.9zM332.8 333c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-27.6-14.3-45.6-25.1-65.2-44.8-14.3-14.3-24-32.3-24-32.3s-3.7-4.2 1.4-8.8c4.6-4.2 8.8-8.8 11.2-12.5 2.4-3.7 3.7-6.5 1.4-11.2-2.3-4.6-22.3-53.7-25.1-60.9-2.8-7.2-5.6-6.5-8.8-6.5-3.2 0-7.2 0-10.6 0s-8.8 1.4-13.1 6.5c-4.2 5.1-16.2 15.6-16.2 37.9s16.2 44.8 18.5 47.6c2.3 2.8 32.8 52.1 79.7 74.9 37.9 19.4 46.2 21.8 54 21.8 11.2 0 21.8-1.4 25.1-2.8 10.6-5.1 22.3-21.8 25.1-29.4 2.8-7.2 2.8-13.1 1.4-15.6-1.4-2.3-5.1-4.2-10.6-7z"/></svg>
        </a>
    )
}

export function ProductDetailClient({ product }: { product: Product }) {
  
  return (
    <SiteLayout>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="mr-2 h-5 w-5"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c26.9 0 53.3 6.5 77.2 19.4l-9.1-6.1c-15.8-10.6-32.9-15.9-50-15.9-102.3 0-185.1 82.8-185.1 185.1 0 35.9 10.2 69.8 28.7 99.1l-6.5 9.4-25.7 37.3 38.3-9.9 9.1-2.3c29.4 15.6 62.9 24.3 98.3 24.3h.1c102.3 0 187-82.8 187-185.1 0-48.8-19.3-94.8-54-130.4-34.9-35.6-81.2-54.8-130.5-54.8zM223.9 455.9h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-49.8 13.1 13.3-48.5-4.4-6.9C57.4 352.9 47.7 319 47.7 284c0-96.9 78.8-175.7 176.2-175.7 47.4 0 92 18.5 125.1 51.6 33.1 33.1 51.6 77.7 51.6 125.1C450.5 377.1 349.8 455.9 223.9 455.9zM332.8 333c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-27.6-14.3-45.6-25.1-65.2-44.8-14.3-14.3-24-32.3-24-32.3s-3.7-4.2 1.4-8.8c4.6-4.2 8.8-8.8 11.2-12.5 2.4-3.7 3.7-6.5 1.4-11.2-2.3-4.6-22.3-53.7-25.1-60.9-2.8-7.2-5.6-6.5-8.8-6.5-3.2 0-7.2 0-10.6 0s-8.8 1.4-13.1 6.5c-4.2 5.1-16.2 15.6-16.2 37.9s16.2 44.8 18.5 47.6c2.3 2.8 32.8 52.1 79.7 74.9 37.9 19.4 46.2 21.8 54 21.8 11.2 0 21.8-1.4 25.1-2.8 10.6-5.1 22.3-21.8 25.1-29.4 2.8-7.2 2.8-13.1 1.4-15.6-1.4-2.3-5.1-4.2-10.6-7z"/></svg>
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

    
    