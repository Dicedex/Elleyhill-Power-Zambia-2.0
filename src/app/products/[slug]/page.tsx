
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { SiteLayout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Package, ShieldCheck, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
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

            <div className="p-6 bg-muted/50 rounded-lg flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-2xl md:text-3xl font-bold text-primary">{product.price}</p>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
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
      </div>
    </SiteLayout>
  );
}
