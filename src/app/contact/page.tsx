import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Elleyhill Power Zambia for inquiries, quotes, or partnership opportunities. We look forward to hearing from you.',
};

const pageHeaderImage = PlaceHolderImages.find(img => img.id === 'contact-us-banner');

const contactDetails = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Our Office',
    value: '123 Power Avenue, Lusaka, Zambia',
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email Us',
    value: 'info@elleyhill.co.zm',
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Call Us',
    value: '+260 977 123456',
  },
];

export default function ContactPage() {
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
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We're here to help. Reach out to us for any inquiries or to discuss your project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Find us at our office, drop us an email, or give us a call. Our team is ready to assist you.
              </p>
              <div className="space-y-8">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or a project in mind? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
