
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout";
import { SERVICES } from "@/data/services";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                {service.icon}
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
                {service.title}
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
                {service.details.introduction}
            </p>
             {service.price && (
              <p className="text-primary font-bold text-2xl mt-4">{service.price}</p>
            )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Key Aspects */}
            <div className="space-y-6">
                <h2 className="font-headline text-2xl md:text-3xl font-bold">Key Aspects of Our Service</h2>
                <ul className="space-y-4">
                    {service.details.keyAspects.map((aspect, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{aspect}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Column: Process */}
            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{service.details.whatToExpect.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="space-y-4">
                        {service.details.whatToExpect.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="font-bold text-primary text-xl">{index + 1}.</span>
                            <span className="text-muted-foreground">{step.substring(step.indexOf(' ') + 1)}</span>
                        </li>
                        ))}
                    </ol>
                </CardContent>
            </Card>
        </div>

         {/* CTA */}
        <div className="text-center mt-16 p-8 bg-secondary rounded-lg">
            <h2 className="font-headline text-3xl font-bold text-secondary-foreground">Ready to Get Started?</h2>
            <p className="max-w-xl mx-auto mt-2 text-secondary-foreground/80">
                Let's discuss how our {service.title} service can benefit you. Contact us for a personalized consultation.
            </p>
            <Button size="lg" asChild className="mt-6">
                <Link href="/contact">
                    Request a Quote <ArrowRight className="ml-2"/>
                </Link>
            </Button>
        </div>

      </div>
    </SiteLayout>
  );
}
