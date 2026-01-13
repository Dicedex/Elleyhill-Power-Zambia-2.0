
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.885-9.888-9.885-5.451 0-9.885 4.434-9.888 9.885.001 2.225.651 4.185 1.738 5.965l-.589 2.152 2.232-.583zm5.725-4.555c-.227-.114-1.338-.664-1.545-.739-.207-.075-.357-.114-.507.114-.15.227-.587.739-.719.889-.133.15-.267.17-.507.056-.24-.114-.997-.369-1.9-1.181-.703-.633-1.18-1.404-1.319-1.641-.14-.237-.013-.364.101-.477.101-.1.227-.267.34-.398.114-.133.15-.227.227-.377.075-.15.038-.287-.019-.398-.056-.114-.507-1.221-.692-1.67-.181-.448-.357-.386-.507-.391-.141-.006-.3-.008-.451-.008-.15-.002-.396.056-.6.315-.207.258-.799.78-1.035 1.319-.236.539-.315 1.096-.315 1.181s.21 1.516.489 1.935c.28.413.911.666 1.456.918 1.422.659 2.622.956 3.328 1.196.812.267 1.385.228 1.811.14.48-.1 1.338-.551 1.518-1.083.18-.532.18-1 .124-1.083-.056-.083-.207-.132-.43-.246z"/></svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.885-9.888-9.885-5.451 0-9.885 4.434-9.888 9.885.001 2.225.651 4.185 1.738 5.965l-.589 2.152 2.232-.583zm5.725-4.555c-.227-.114-1.338-.664-1.545-.739-.207-.075-.357-.114-.507.114-.15.227-.587.739-.719.889-.133.15-.267.17-.507.056-.24-.114-.997-.369-1.9-1.181-.703-.633-1.18-1.404-1.319-1.641-.14-.237-.013-.364.101-.477.101-.1.227-.267.34-.398.114-.133.15-.227.227-.377.075-.15.038-.287-.019-.398-.056-.114-.507-1.221-.692-1.67-.181-.448-.357-.386-.507-.391-.141-.006-.3-.008-.451-.008-.15-.002-.396.056-.6.315-.207.258-.799.78-1.035 1.319-.236.539-.315 1.096-.315 1.181s.21 1.516.489 1.935c.28.413.911.666 1.456.918 1.422.659 2.622.956 3.328 1.196.812.267 1.385.228 1.811.14.48-.1 1.338-.551 1.518-1.083.18-.532.18-1 .124-1.083-.056-.083-.207-.132-.43-.246z"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.885-9.888-9.885-5.451 0-9.885 4.434-9.888 9.885.001 2.225.651 4.185 1.738 5.965l-.589 2.152 2.232-.583zm5.725-4.555c-.227-.114-1.338-.664-1.545-.739-.207-.075-.357-.114-.507.114-.15.227-.587.739-.719.889-.133.15-.267.17-.507.056-.24-.114-.997-.369-1.9-1.181-.703-.633-1.18-1.404-1.319-1.641-.14-.237-.013-.364.101-.477.101-.1.227-.267.34-.398.114-.133.15-.227.227-.377.075-.15.038-.287-.019-.398-.056-.114-.507-1.221-.692-1.67-.181-.448-.357-.386-.507-.391-.141-.006-.3-.008-.451-.008-.15-.002-.396.056-.6.315-.207.258-.799.78-1.035 1.319-.236.539-.315 1.096-.315 1.181s.21 1.516.489 1.935c.28.413.911.666 1.456.918 1.422.659 2.622.956 3.328 1.196.812.267 1.385.228 1.811.14.48-.1 1.338-.551 1.518-1.083.18-.532.18-1 .124-1.083-.056-.083-.207-.132-.43-.246z"/></svg>
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

    
    