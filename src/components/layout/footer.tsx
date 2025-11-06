import Link from 'next/link';
import { Bolt, Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <Bolt className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">Elleyhill Power</span>
            </Link>
            <p className="text-sm text-muted-foreground">Powering Zambia's future with sustainable and innovative energy solutions.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                    <span>123 Power Avenue, Lusaka, Zambia</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <span>+260 977 123456</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <span>info@elleyhill.co.zm</span>
                </li>
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
             <div className="flex gap-4 mt-4">
                {socialLinks.map(social => (
                    <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                        {social.icon}
                    </Link>
                ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Elleyhill Power Zambia. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
