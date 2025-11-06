import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Network, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-power-lines');
const projectImage1 = PlaceHolderImages.find(img => img.id === 'project-solar-farm');
const projectImage2 = PlaceHolderImages.find(img => img.id === 'project-substation');

const services = [
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: 'Solar Power Solutions',
    description: 'Customized solar energy systems for residential, commercial, and industrial clients.',
    link: '/services'
  },
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: 'Grid Integration',
    description: 'Seamless integration of renewable energy sources with the national power grid.',
    link: '/services'
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: 'Energy Audits',
    description: 'Comprehensive energy audits to identify savings and improve efficiency.',
    link: '/services'
  }
];

const values = [
    {
      title: 'Sustainability',
      description: 'We are committed to providing clean, renewable energy solutions that protect our planet for future generations.',
    },
    {
      title: 'Innovation',
      description: 'Leveraging the latest technology to deliver efficient, reliable, and cost-effective power solutions.',
    },
    {
      title: 'Reliability',
      description: 'Our robust infrastructure and expert team ensure a consistent and dependable power supply for all our clients.',
    },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
            Powering Zambia's Future
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            Delivering innovative and sustainable energy solutions across the nation.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/services">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive range of power solutions tailored to meet your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button asChild variant="outline">
                <Link href="/services">View All Services</Link>
             </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Elleyhill Power?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and a sustainable future sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Landmark Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our expertise in action across Zambia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {projectImage1 && (
                <Link href="/projects" className="group block overflow-hidden rounded-lg">
                    <div className="relative h-80 w-full">
                        <Image src={projectImage1.imageUrl} alt={projectImage1.description} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={projectImage1.imageHint}/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <div className="absolute bottom-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Nationwide Solar Initiative</h3>
                            <p>Developing large-scale solar farms to power communities.</p>
                        </div>
                    </div>
                </Link>
             )}
             {projectImage2 && (
                <Link href="/projects" className="group block overflow-hidden rounded-lg">
                    <div className="relative h-80 w-full">
                        <Image src={projectImage2.imageUrl} alt={projectImage2.description} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={projectImage2.imageHint}/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        <div className="absolute bottom-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">Urban Grid Modernization</h3>
                            <p>Upgrading critical infrastructure for reliable city power.</p>
                        </div>
                    </div>
                </Link>
             )}
          </div>
           <div className="text-center mt-12">
             <Button asChild>
                <Link href="/projects">
                  Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
