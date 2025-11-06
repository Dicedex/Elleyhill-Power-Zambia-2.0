
"use client";

import Image from "next/image";
import Link from "next/link";
import { ElleyhillCalculator } from "@/components/elleyhill-calculator";
import { Mail, MapPin, Phone, ArrowRight, Sun, Battery, Zap, Wallet, CalendarClock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { SiteLayout } from "@/components/layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { SERVICES } from "@/data/services";


export default function Home() {
  const carouselItems = [
    {
      headline: "Powering a Brighter, Greener Future",
      subheadline: "Top-tier solar solutions for your home and business.",
      buttons: [
        { text: "About Us", href: "/#about", variant: "secondary" },
        { text: "Contact Us", href: "/contact" },
      ]
    },
    {
      headline: "High-Efficiency Solar Panels",
      subheadline: "Maximize your energy generation with our powerful and durable solar panels.",
      buttons: [
        { text: "View Panels", href: "/products?category=Panels", variant: "secondary" },
        { text: "Get a Quote", href: "/contact" },
      ]
    },
    {
      headline: "Store Power with Greenrich Batteries",
      subheadline: "Energy independence, day and night, with advanced lithium storage solutions.",
       buttons: [
        { text: "Explore Batteries", href: "/products?category=Batteries", variant: "secondary" },
        { text: "Get a Quote", href: "/contact" },
      ]
    },
    {
      headline: "High-Performance Greenrich Inverters",
      subheadline: "The heart of your solar system, delivering reliable and efficient power conversion.",
       buttons: [
        { text: "View Inverters", href: "/products?category=Inverters", variant: "secondary" },
        { text: "Get a Quote", href: "/contact" },
      ]
    },
    {
      headline: "Boost Output with Panel Cleaning",
      subheadline: "Increase your system's efficiency by up to 30% with our professional cleaning service.",
       buttons: [
        { text: "Learn More", href: "/services/solar-panel-cleaning", variant: "secondary" },
        { text: "Book Now", href: "/contact" },
      ]
    },
  ];
  return (
    <SiteLayout>
        {/* Hero Section */}
        <section className="relative">
          <Carousel 
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
              className="w-full"
              opts={{ loop: true }}
          >
              <CarouselContent>
                  {carouselItems.map((item, index) => (
                      <CarouselItem key={index} className="bg-[#1b1b20]">
                          <div className="h-[70vh] w-full flex items-center justify-center text-center text-white">
                              <div className="container px-4">
                                  <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                                      {item.headline}
                                  </h1>
                                  <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">
                                      {item.subheadline}
                                  </p>
                                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                      {item.buttons.map((button) => (
                                          <Button key={button.href} size="lg" variant={button.variant === 'secondary' ? 'secondary' : 'default'} asChild>
                                              <Link href={button.href}>
                                                  {button.text}
                                              </Link>
                                          </Button>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
          </Carousel>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">About Elleyhill</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Elleyhill, we are dedicated to providing reliable and sustainable energy solutions. With years of experience in the solar industry, we specialize in designing and installing high-quality solar power systems for residential, commercial, and industrial clients. Our mission is to empower our communities with clean energy, reducing both electricity costs and carbon footprints.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe in quality and customer satisfaction, offering personalized service to ensure your solar journey is seamless and rewarding.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image 
                    src="/images/home.jpg"
                    alt="Elleyhill team"
                    fill
                    style={{objectFit: 'cover'}}
                    data-ai-hint="company team"
                />
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Products</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-secondary-foreground">
                        Explore our range of high-performance solar products designed for efficiency and durability.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-center mb-4">
                                <Sun className="h-12 w-12 text-primary" />
                            </div>
                            <CardTitle className="text-center">Solar Panels</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">
                                Our Tier-1 solar panels offer maximum efficiency and a 25-year performance warranty, ensuring you get the most out of every ray of sunlight.
                            </CardDescription>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex justify-center mb-4">
                                <Battery className="h-12 w-12 text-primary" />
                            </div>
                            <CardTitle className="text-center">Battery Storage</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">
                                Secure your energy independence with our advanced lithium-ion battery solutions. Store excess energy for use during outages or at night.
                            </CardDescription>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex justify-center mb-4">
                                <Zap className="h-12 w-12 text-primary" />
                            </div>
                            <CardTitle className="text-center">Inverters</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">
                                High-efficiency inverters that form the heart of your solar system, converting DC power from your panels into usable AC power for your home or business.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
                 <div className="text-center mt-12">
                    <Button size="lg" asChild>
                        <Link href="/products">
                            See All Products <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                From installation to maintenance, we offer a complete range of services to support your solar journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.slice(0, 4).map((service) => (
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
            <div className="text-center mt-12">
                <Button size="lg" asChild>
                    <Link href="/services">
                        View All Services <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Payment Options Section */}
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Flexible Payment Options</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-secondary-foreground">
                        We offer a variety of payment plans to make your transition to solar power as smooth as possible.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <Wallet className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle>Upfront Payment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">
                                Pay for your entire solar system upfront and enjoy the benefits of clean energy from day one with no monthly installments.
                            </CardDescription>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <CalendarClock className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle>Lay-By Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">
                                Secure your solar equipment by paying it off over a period of time. Once the full amount is paid, we'll install your system.
                            </CardDescription>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <Percent className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle>70/30 Payment Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center">
                                Get started with a 70% down payment. The remaining 30% is payable over the next two months, making your investment more manageable.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
                 <div className="text-center mt-12">
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Discuss Your Options <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            {/* Section for the main heading and description */}
            <div className="text-center mb-12">
              {/* Main heading for the page */}
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
                Your Solar Power Journey Starts Here
              </h2>
              {/* Description paragraph */}
              <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
                Easily estimate your solar energy requirements. Add your appliances, specify your needs, and get an instant, detailed report on the ideal inverter and battery setup for you.
              </p>
            </div>
            {/* Elleyhill Calculator component */}
            <ElleyhillCalculator />
          </div>
        </section>
    </SiteLayout>
  );
}
