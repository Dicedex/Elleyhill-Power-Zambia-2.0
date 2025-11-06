
import { SiteLayout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Sun, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/data/services";


export default function ServicesPage() {
  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Providing comprehensive solar solutions to power your future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group flex">
              <Card className="flex flex-col w-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                      {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription>{service.description}</CardDescription>
                  {service.price && (
                    <p className="text-primary font-bold text-lg mt-4">{service.price}</p>
                  )}
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="ghost" className="text-primary">
                        Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
            <h2 className="font-headline text-3xl font-bold">Ready to Go Solar?</h2>
            <p className="max-w-xl mx-auto mt-2 text-muted-foreground">
                Contact us today for a free consultation and quote. Let's build a sustainable energy solution together.
            </p>
            <Button size="lg" asChild className="mt-6">
                <Link href="/contact">
                    Get in Touch
                </Link>
            </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
