"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bolt, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent",
        pathname === '/' ? 'text-white' : 'text-foreground'
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <Bolt className="h-8 w-8 text-primary" />
          <span className={cn(
            "font-bold text-xl",
            isScrolled ? 'text-foreground' : (pathname === '/' ? 'text-white' : 'text-foreground')
          )}>
            Elleyhill Power
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : (isScrolled ? 'text-foreground' : (pathname === '/' ? 'text-white' : 'text-foreground')),
                !isScrolled && pathname === '/' && 'hover:text-primary-foreground/80'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn(
                  "h-6 w-6",
                  isScrolled ? 'text-foreground' : (pathname === '/' ? 'text-white' : 'text-foreground')
                )} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Bolt className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl text-foreground">
                      Elleyhill Power
                    </span>
                  </Link>
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                    <Button asChild className="w-full">
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
