
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { PRODUCTS } from "@/data/products";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const productCategories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

const WhatsAppCTA = () => {
    const phoneNumber = "+260974041745";
    const message = "Hello! I'm interested in learning more about your products.";
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

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const categoryFromURL = searchParams.get('category');
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [searchParams]);

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
              Our Products
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Discover our comprehensive range of high-quality solar and power backup solutions.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {productCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {!isClient ? (
            <ProductsSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">{product.description}</p>
                    </CardContent>
                    <CardFooter className="flex items-center bg-muted/50 p-4 mt-auto">
                        <WhatsAppButton product={product} />
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <WhatsAppCTA />
    </SiteLayout>
  );
}

function ProductsSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
                <Card key={i} className="flex flex-col w-full overflow-hidden">
                    <Skeleton className="h-56 w-full" />
                    <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-1/2 mt-2" />
                    </CardContent>
                    <CardFooter className="bg-muted/50 p-4 mt-auto">
                        <Skeleton className="h-8 w-1/3" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

    