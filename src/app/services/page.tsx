import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Network, Activity, BatteryCharging, Wrench, CircleDollarSign } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the wide range of power solutions offered by Elleyhill Power Zambia, from solar installation to grid management and energy consulting.',
};

const services = [
  {
    icon: <Sun className="w-10 h-10 text-primary" />,
    title: 'Solar Power Solutions',
    description: 'Design, supply, installation, and commissioning of turnkey solar PV projects for residential, commercial, and industrial clients, both on-grid and off-grid.',
  },
  {
    icon: <Network className="w-10 h-10 text-primary" />,
    title: 'Grid Integration & Management',
    description: 'Expert services in integrating renewable energy sources into the national grid, ensuring stability, reliability, and compliance with regulatory standards.',
  },
  {
    icon: <Activity className="w-10 h-10 text-primary" />,
    title: 'Energy Audits & Consulting',
    description: 'Comprehensive energy audits for businesses to identify inefficiencies, reduce consumption, and lower operational costs through strategic energy management.',
  },
  {
    icon: <BatteryCharging className="w-10 h-10 text-primary" />,
    title: 'Backup Power & Storage',
    description: 'Reliable backup power systems, including battery storage and generator integration, to ensure uninterrupted power supply for critical operations.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Operations & Maintenance',
    description: 'Proactive and corrective maintenance services for power plants and electrical infrastructure to maximize uptime and operational efficiency.',
  },
  {
    icon: <CircleDollarSign className="w-10 h-10 text-primary" />,
    title: 'Project Financing & Development',
    description: 'Assistance with project development and structuring financing for large-scale energy projects through our network of financial partners.',
  },
];

const pageHeaderImage = PlaceHolderImages.find(img => img.id === 'hero-power-lines');


export default function ServicesPage() {
  return (
    <div>
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center text-center text-white">
        {pageHeaderImage && (
          <Image
            src={pageHeaderImage.imageUrl}
            alt={pageHeaderImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={pageHeaderImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive energy solutions to power your success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              At Elleyhill Power, we deliver a full spectrum of services designed to meet the diverse energy needs of Zambia. Our expertise spans from initial consultation to long-term maintenance, ensuring a seamless and valuable partnership.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
