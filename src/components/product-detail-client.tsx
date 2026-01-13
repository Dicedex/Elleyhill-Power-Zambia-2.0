
"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Package,
  ShieldCheck,
  FileText,
  ChevronRight,
  Home,
  List,
  Smartphone,
  Lightbulb,
  Wifi,
  Laptop,
  Tv2,
  Refrigerator,
  Coffee,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Product } from "@/data/products";
import { PRODUCTS } from "@/data/products";

// Appliance lists for different power stations
const poweredAppliancesQ300 = [
  { icon: <Smartphone className="h-8 w-8 text-primary" />, name: "Phone Charger", power: "5W", duration: "25 Charges*" },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, name: "LED Light", power: "10W", duration: "30 Hours**" },
  { icon: <Wifi className="h-8 w-8 text-primary" />, name: "WiFi Router", power: "10W", duration: "30 Hours**" },
  { icon: <Laptop className="h-8 w-8 text-primary" />, name: "Laptop Charger", power: "50W", duration: "6 Charges*" },
  { icon: <Tv2 className="h-8 w-8 text-primary" />, name: "Television", power: "50W", duration: "6 Hours**" },
  { icon: <Refrigerator className="h-8 w-8 text-primary" />, name: "Refrigerator", power: "50W", duration: "6 Hours**" },
];

const poweredAppliancesQ600 = [
  { icon: <Smartphone className="h-8 w-8 text-primary" />, name: "Phone Charger", power: "5W", duration: "50 Charges*" },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, name: "LED Light", power: "10W", duration: "60 Hours**" },
  { icon: <Wifi className="h-8 w-8 text-primary" />, name: "WiFi Router", power: "10W", duration: "60 Hours**" },
  { icon: <Laptop className="h-8 w-8 text-primary" />, name: "Laptop Charger", power: "50W", duration: "12 Charges*" },
  { icon: <Tv2 className="h-8 w-8 text-primary" />, name: "Television", power: "50W", duration: "12 Hours**" },
  { icon: <Refrigerator className="h-8 w-8 text-primary" />, name: "Refrigerator", power: "50W", duration: "12 Hours**" },
];

const poweredAppliancesQ2400 = [
  { icon: <Smartphone className="h-8 w-8 text-primary" />, name: "Phone Charger", power: "5W", duration: "480 Charges*" },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, name: "LED Light", power: "10W", duration: "240 Hours**" },
  { icon: <Wifi className="h-8 w-8 text-primary" />, name: "WiFi Router", power: "10W", duration: "240 Hours**" },
  { icon: <Laptop className="h-8 w-8 text-primary" />, name: "Laptop Charger", power: "50W", duration: "48 Charges*" },
  { icon: <Tv2 className="h-8 w-8 text-primary" />, name: "Television", power: "50W", duration: "48 Hours**" },
  { icon: <Refrigerator className="h-8 w-8 text-primary" />, name: "Refrigerator", power: "50W", duration: "48 Hours**" },
  { icon: <Coffee className="h-8 w-8 text-primary" />, name: "Coffee Machine", power: "1400W", duration: "1.5 Hours**" },
  { icon: <Wrench className="h-8 w-8 text-primary" />, name: "Electric Drill", power: "900W", duration: "2.5 Hours**" },
];

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

const WhatsAppButton = ({ product }: { product: any }) => {
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
            className="w-full"
        >
            <Button size="lg" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2" fill="currentColor"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                Get a Quote
            </Button>
        </a>
    );
};

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
              <CardFooter className="bg-muted/50 p-2 mt-auto">
                    <WhatsAppButton product={product} />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7" fill="currentColor"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
        </a>
    )
}

// Separate component for appliance sections
const PowerApplianceSection = ({
  title,
  appliances,
}: {
  title: string;
  appliances: { icon: JSX.Element; name: string; power: string; duration: string }[];
}) => (
  <div className="mt-16 md:mt-24">
    <div className="text-center mb-12">
      <h2 className="font-headline text-3xl md:text-4xl font-bold">What Can It Power?</h2>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
        The KAPA {title} is perfect for keeping your essential devices running. Here are a few examples:
      </p>
    </div>
    <div className={`grid grid-cols-2 sm:grid-cols-${appliances.length > 6 ? 4 : 3} lg:grid-cols-${appliances.length > 6 ? 4 : 3} gap-4 md:gap-6 text-center`}>
      {appliances.map((app, index) => (
        <Card key={index} className="flex flex-col items-center justify-center p-4">
          <div className="mb-3">{app.icon}</div>
          <p className="font-semibold">{app.name}</p>
          <p className="text-sm text-muted-foreground">{app.power}</p>
          <p className="text-xs font-bold text-primary">{app.duration}</p>
        </Card>
      ))}
    </div>
  </div>
);

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
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <a 
                        href={`https://wa.me/+260974041745?text=Hello! I'm interested in the ${encodeURIComponent(product.name)}.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="mr-2 h-5 w-5"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                        Get a Quote
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">View Details</Button>
                </div>
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

        {product.slug === "kapa-energie-q300-portable-power-station" && (
            <PowerApplianceSection title="Q300" appliances={poweredAppliancesQ300} />
        )}
        {product.slug === "kapa-energie-q600-portable-power-station" && (
            <PowerApplianceSection title="Q600" appliances={poweredAppliancesQ600} />
        )}
        {product.slug === "kapa-energie-q2400-portable-power-station" && (
            <PowerApplianceSection title="Q2400" appliances={poweredAppliancesQ2400} />
        )}

        <RelatedProducts currentProduct={product} />
      </div>
      <WhatsAppCTA />
    </SiteLayout>
  );
}
