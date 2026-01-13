
'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mail, MapPin, Phone, ArrowRight, Menu, ChevronDown, Facebook, Instagram } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getProductCategories } from "@/data/products";
import { ThemeToggle } from "./theme-toggle";
import { Icons } from "./icons";

const productCategories = getProductCategories();

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex items-center gap-2">
          <Link href="/">
              <Image src="/images/logo.png" alt="Elleyhill Logo" width={180} height={180} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/products">All Products</Link>
                </DropdownMenuItem>
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link href={`/products?category=${category}`}>{category}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/#calculator" className="text-muted-foreground transition-colors hover:text-foreground">
              Calculator
            </Link>
            <Link href="/#about" className="text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2" />
              </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/images/logo.png" alt="Elleyhill Logo" width={150} height={150} />
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="font-medium text-lg">Home</Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="font-medium text-lg py-2 hover:no-underline">Products</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <div className="flex flex-col gap-2 pt-2">
                           <Link href="/products" className="text-muted-foreground">All Products</Link>
                          {productCategories.map((category) => (
                            <Link key={category} href={`/products?category=${category}`} className="text-muted-foreground">{category}</Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link href="/services" className="font-medium text-lg">Services</Link>
                  <Link href="/#calculator" className="font-medium text-lg">Calculator</Link>
                  <Link href="/#about" className="font-medium text-lg">About</Link>
                  <Link href="/contact" className="font-medium text-lg">Contact</Link>
                </nav>
                <Button asChild>
                    <Link href="/contact">
                      Contact Us <ArrowRight className="ml-2" />
                    </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
    return (
        <footer id="contact" className="border-t bg-background">
          <div className="container py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-semibold text-lg mb-4">Elleyhill Power Zambia</h4>
                    <p className="text-sm text-muted-foreground">
                        Powering a Brighter, Greener Future with top-tier solar solutions.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <ThemeToggle />
                       <div className="flex items-center gap-3">
                            <a href="https://www.facebook.com/elleyhillpowerzambia" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                             <a href="https://www.instagram.com/elleyhillpowerzambia" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                             <a href="https://www.linkedin.com/company/elleyhillpower" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                             <a href="https://www.tiktok.com/@elleyhillpowerzambia" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.3-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                                <span className="sr-only">TikTok</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center md:text-left">
                        <p className="text-balance text-xs text-muted-foreground">© 2024 Elleyhill Power Zambia. All rights reserved.</p>
                          <p className="text-balance text-sm leading-loose text-muted-foreground">
                              Designed by <a href="https://webco-2003.web.app" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">Webco</a>.
                          </p>
                    </div>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                     <ul className="space-y-2 text-sm">
                        <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                        <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
                        <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                        <li><Link href="/#calculator" className="text-muted-foreground hover:text-primary">Solar Calculator</Link></li>
                        <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Legal & Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                        <li><Link href="/warranty" className="text-muted-foreground hover:text-primary">Warranty Claims</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
                    <address className="not-italic text-sm space-y-2">
                        <a href="mailto:admin@elleyhill.co.za" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-4 w-4" />
                            <span>admin@greenrich.co.za</span>
                        </a>
                        <a href="tel:+260974041745" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="h-4 w-4" />
                            <span>+260 9740 41745</span>
                        </a>
                         <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                            <span>East Park Mall, Lusaka</span>
                        </div>
                    </address>
                </div>
            </div>
          </div>
        </footer>
    );
}


export function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full flex flex-col bg-background">
            <SiteHeader />
            <main className="flex-grow">
                {children}
            </main>
            <SiteFooter />
        </div>
    );
}

    