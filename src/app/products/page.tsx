
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
                    <CardFooter className="flex items-center justify-between bg-muted/50 p-4 mt-auto">
                        <div>
                            <p className="text-sm text-muted-foreground">Price</p>
                            <p className="text-xl md:text-2xl font-bold text-primary">{product.price}</p>
                        </div>
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
