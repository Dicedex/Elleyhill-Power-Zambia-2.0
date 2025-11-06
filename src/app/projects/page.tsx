import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Discover the portfolio of successful energy projects completed by Elleyhill Power Zambia, showcasing our expertise and impact.',
};

const projects = [
  {
    id: 'solar-farm',
    title: 'Kafue Solar Farm',
    description: 'A 100MW utility-scale solar farm providing clean energy to the national grid, significantly increasing Zambia\'s renewable capacity.',
    category: 'Solar',
    image: PlaceHolderImages.find(img => img.id === 'project-solar-farm'),
  },
  {
    id: 'substation',
    title: 'Lusaka West Substation Upgrade',
    description: 'Modernization of a key electrical substation to improve grid stability and reduce power outages for over 500,000 residents.',
    category: 'Grid Infrastructure',
    image: PlaceHolderImages.find(img => img.id === 'project-substation'),
  },
  {
    id: 'rooftop-solar',
    title: 'Manda Hill Mall Rooftop Solar',
    description: 'A 1.5MW rooftop solar installation for one of Lusaka\'s largest shopping centers, reducing their carbon footprint and energy costs.',
    category: 'Commercial Solar',
    image: PlaceHolderImages.find(img => img.id === 'project-rooftop-solar'),
  },
  {
    id: 'factory-power',
    title: 'Copperbelt Industrial Power Solution',
    description: 'Developed a dedicated power supply solution for a major mining operation, ensuring reliable energy for 24/7 production.',
    category: 'Industrial Power',
    image: PlaceHolderImages.find(img => img.id === 'project-factory-power'),
  },
  {
    id: 'wind-turbines',
    title: 'Serenje Wind Power Pilot',
    description: 'A pilot project exploring the viability of wind power in central Zambia, contributing valuable data for future renewable expansion.',
    category: 'Wind Power',
    image: PlaceHolderImages.find(img => img.id === 'project-wind-turbines'),
  },
  {
    id: 'community-grid',
    title: 'Rural Electrification Microgrid',
    description: 'A solar-powered microgrid bringing electricity to a remote village for the first time, transforming lives and local economies.',
    category: 'Off-Grid',
    image: PlaceHolderImages.find(img => img.id === 'project-community-grid'),
  }
];

const pageHeaderImage = PlaceHolderImages.find(img => img.id === 'project-substation');

export default function ProjectsPage() {
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Projects</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Demonstrating our commitment to powering Zambia, one project at a time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Portfolio of Excellence</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We take pride in our work. Explore a selection of our completed projects that showcase the breadth of our capabilities and our impact across various sectors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                {project.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={project.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary">{project.category}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
