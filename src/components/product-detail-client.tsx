"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Smartphone,
  Lightbulb,
  Wifi,
  Laptop,
  Tv2,
  Refrigerator,
  Coffee,
  Wrench,
  Zap,
  TrendingUp,
  Box,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { type Product } from "@/data/products";

/* ---------------- TYPES ---------------- */
type SpecItem = { label: string; value: string };
type SpecGroup = { category: string; items: SpecItem[] };

/* ---------------- COMPONENT ---------------- */
export function ProductDetailClient({ product }: { product: Product }) {
  const groupedSpecifications: SpecGroup[] | undefined =
    product.specifications?.reduce<SpecGroup[]>((acc, spec) => {
      if (!spec.value) {
        acc.push({ category: spec.label, items: [] });
      } else {
        if (!acc.length) acc.push({ category: "General", items: [] });
        acc[acc.length - 1].items.push(spec);
      }
      return acc;
    }, []);

  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* IMAGE */}
          <div className="relative aspect-square rounded-lg border overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <Badge variant="secondary">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground">{product.description}</p>

            <div className="flex justify-between items-center bg-muted/50 p-6 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-3xl font-bold text-primary">
                  {product.price}
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Get Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* TABS */}
            <Tabs defaultValue="features">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="features">Features</TabsTrigger>
                {product.longDescription && (
                  <TabsTrigger value="description">Description</TabsTrigger>
                )}
                {groupedSpecifications?.length && (
                  <TabsTrigger value="specs">Specs</TabsTrigger>
                )}
                {product.whatsInTheBox?.length && (
                  <TabsTrigger value="box">In the Box</TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="features">
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              {product.longDescription && (
                <TabsContent value="description">
                  <p className="text-muted-foreground">
                    {product.longDescription}
                  </p>
                </TabsContent>
              )}

              {groupedSpecifications?.length && (
                <TabsContent value="specs">
                  {groupedSpecifications.map((group, i) => (
                    <div key={i} className="mb-4">
                      <h4 className="font-semibold">{group.category}</h4>
                      {group.items.map((s, j) => (
                        <div
                          key={j}
                          className="flex justify-between text-sm"
                        >
                          <span>{s.label}</span>
                          <span className="font-medium">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </TabsContent>
              )}

              {product.whatsInTheBox?.length && (
                <TabsContent value="box">
                  <ul className="list-disc ml-4">
                    {product.whatsInTheBox.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
