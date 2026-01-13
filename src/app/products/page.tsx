
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { PRODUCTS } from "@/data/products";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const productCategories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

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
                      <CardDescription className="flex-grow">{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-end bg-muted/50 p-4 mt-auto">
                        <Button variant="ghost" className="text-primary group-hover:translate-x-1 transition-transform">
                            View Details <ArrowRight className="ml-2"/>
                        </Button>
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
