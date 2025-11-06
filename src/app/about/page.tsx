import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Elleyhill Power Zambia\'s mission, vision, and commitment to powering a sustainable future for Zambia.',
};

const pageHeaderImage = PlaceHolderImages.find(img => img.id === 'about-page-header');
const teamImage = PlaceHolderImages.find(img => img.id === 'about-us-team');

const values = [
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: 'Sustainability',
    description: 'We champion renewable energy to ensure a cleaner, greener Zambia for generations to come. Our projects are designed with long-term environmental impact in mind.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: 'Innovation',
    description: 'We continuously adopt cutting-edge technology and modern practices to provide the most efficient, reliable, and intelligent power solutions on the market.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and a strong sense of ethics in all our business dealings, building lasting trust with our clients and partners.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: 'Community',
    description: 'We are dedicated to empowering local communities through job creation, skills development, and providing access to reliable electricity.',
  },
];

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Elleyhill Power</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Our journey, our values, and our commitment to Zambia.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p>
                Founded on the principle of providing sustainable and reliable energy, Elleyhill Power Zambia began its journey to address the growing energy demands of a developing nation. We saw an opportunity to harness Zambia's abundant natural resources, particularly solar, to build a brighter and more empowered future for its people and industries.
              </p>
              <p>
                From humble beginnings, we have grown into a leading independent power producer, known for our technical expertise, innovative solutions, and unwavering commitment to quality. Our team of seasoned professionals works tirelessly to deliver projects that not only meet but exceed international standards.
              </p>
            </div>
            {teamImage && (
              <div className="h-80 md:h-96 relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={teamImage.imageUrl}
                  alt={teamImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={teamImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To accelerate Zambia's development by delivering reliable, affordable, and sustainable energy solutions that empower communities, drive economic growth, and protect our environment.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To be Zambia's most trusted and innovative energy partner, leading the transition to a renewable energy future and setting the standard for excellence in the power sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-t-4 border-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-fit p-3 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
