"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Package, ShieldCheck, FileText, Smartphone, Lightbulb, Wifi, Laptop, Tv2, Refrigerator, ListTree, Coffee, Wrench, Zap, TrendingUp, Box } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Product } from "@/data/products";

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

// Type definitions for specs
type SpecItem = { label: string; value: string };
type SpecGroup = { category: string; items: SpecItem[] };

export function ProductDetailClient({ product }: { product: Product }) {

  // Group specifications by category
  const groupedSpecifications: SpecGroup[] | undefined = product.specifications?.reduce<SpecGroup[]>((acc, spec) => {
    if (spec.value === "") {
      acc.push({ category: spec.label, items: [] });
    } else {
      if (acc.length === 0) {
        acc.push({ category: "General", items: [] });
      }
      acc[acc.length - 1].items.push(spec);
    }
    return acc;
  }, []);

  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
              data-ai-hint={product.aiHint}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
              <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Price & Quote */}
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

            {/* Tabs */}
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="features">Features</TabsTrigger>
                {product.longDescription && <TabsTrigger value="description">Description</TabsTrigger>}
                {groupedSpecifications?.length && <TabsTrigger value="specs">Specs</TabsTrigger>}
                {product.whatsInTheBox?.length && <TabsTrigger value="box">In the Box</TabsTrigger>}
              </TabsList>

              {/* Features */}
              <TabsContent value="features" className="py-6">
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              {/* Long Description */}
              {product.longDescription && (
                <TabsContent value="description" className="py-6">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {product.longDescription}
                  </div>
                </TabsContent>
              )}

              {/* Specifications */}
              {groupedSpecifications?.length && (
                <TabsContent value="specs" className="py-6">
                  <div className="space-y-4">
                    {groupedSpecifications.map((group: SpecGroup, index: number) => (
                      <div key={index}>
                        {group.category !== "General" && (
                          <h4 className="font-semibold mb-2 text-base uppercase tracking-wider">{group.category}</h4>
                        )}
                        <ul className="space-y-2 text-muted-foreground">
                          {group.items.map((spec: SpecItem, specIndex: number) => (
                            <li key={specIndex} className="flex justify-between text-sm odd:bg-muted/50 p-2 rounded-md">
                              <span className="capitalize">{spec.label}:</span>
                              <span className="font-medium text-foreground text-right">{spec.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              )}

              {/* In the Box */}
              {product.whatsInTheBox?.length && (
                <TabsContent value="box" className="py-6">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {product.whatsInTheBox.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>

        {/* Conditional Key Specs & Appliance Sections */}
        {["greenrich-up5000-lithium-battery", "greenrich-wm5000-wall-mounting-lithium-battery"].includes(product.slug) && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Key Specifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <Card className="flex flex-col items-center justify-center p-6">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-1">Power</h3>
                <p className="text-2xl font-headline text-primary">7500W</p>
                <p className="text-sm text-muted-foreground">Peak Discharge</p>
              </Card>
              <Card className="flex flex-col items-center justify-center p-6">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-1">Discharging Rate</h3>
                <p className="text-2xl font-headline text-primary">1.5C</p>
                <p className="text-sm text-muted-foreground">Max Continuous</p>
              </Card>
              <Card className="flex flex-col items-center justify-center p-6">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Box className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-1">Capacity</h3>
                <p className="text-2xl font-headline text-primary">4.95kWh</p>
                <p className="text-sm text-muted-foreground">Nominal</p>
              </Card>
            </div>
          </div>
        )}

        {/* KAPA Power Stations */}
        {product.slug === "kapa-energie-q300-portable-power-station" && (
          <PowerApplianceSection title="Q300" appliances={poweredAppliancesQ300} />
        )}
        {product.slug === "kapa-energie-q600-portable-power-station" && (
          <PowerApplianceSection title="Q600" appliances={poweredAppliancesQ600} />
        )}
        {product.slug === "kapa-energie-q2400-portable-power-station" && (
          <PowerApplianceSection title="Q2400" appliances={poweredAppliancesQ2400} />
        )}
      </div>
    </SiteLayout>
  );
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
    <div className={`grid grid-cols-2 sm:grid-cols-${appliances.length > 6 ? 4 : 3} lg:grid-cols-${appliances.length} gap-4 md:gap-6 text-center`}>
      {appliances.map((app, index) => (
        <Card key={index} className="flex flex-col items-center justify-center p-4">
          <div className="mb-3">{app.icon}</div>
          <p className="font-semibold">{app.name}</p>
          <p className="text-sm text-muted-foreground">{app.power}</p>
          <p className="text-xs font-bold text-primary">{app.duration}</p>
        </Card>
      ))}
    </div>
    <div className="text-center text-xs text-muted-foreground mt-4 space-y-1">
      <p>*Based on average device consumption. **Runtimes are estimates and may vary.</p>
      {title !== "Q2400" && <p className="font-medium text-destructive">Not suitable for heating appliances like kettles, stoves, or hair dryers.</p>}
    </div>
  </div>
);