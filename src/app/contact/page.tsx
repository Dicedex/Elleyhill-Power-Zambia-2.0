
"use client";

import { useState, useEffect } from "react";
import { SiteLayout } from "@/components/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, User, MessageSquare, CheckCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  // Auto-hide popup after 5 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/7b330c3d5b665b1fb37af057d9f2ffa8", {
        method: "POST",
        body: formData,
      });
      setShowPopup(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <SiteLayout>
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We're here to help. Whether you have questions about our products,
            need a quote, or want to discuss a project, please don't hesitate to
            reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 gap-y-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="New submission from Elleyhill Website!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input id="name" name="name" placeholder="Your Name" className="pl-10" required />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input id="email" type="email" name="email" placeholder="Your Email" className="pl-10" required />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input id="phone" type="tel" name="phone" placeholder="Phone Number (Optional)" className="pl-10" />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input id="subject" name="subject" placeholder="Subject" className="pl-10" />
                </div>

                <div className="relative">
                  <Textarea id="message" name="message" placeholder="Your Message" rows={6} className="pl-10" required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can also reach us directly through the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="mailto:admin@elleyhill.co.za" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">admin@elleyhill.co.za</p>
                  </div>
                </a>

                <a href="tel:+260974041745" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+260 9740 41745</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Our Office</p>
                    <p className="text-muted-foreground">
                      Chrislex warehouse unit 6, Roma Park Commercial (Off
                      Zambezi Rd), Lusaka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating Popup */}
        {showPopup && (
          <div className="fixed bottom-5 right-5 z-50 w-80">
            <Alert className="flex items-start border-green-500 shadow-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-2" />
              <div>
                <AlertTitle>Message Sent!</AlertTitle>
                <AlertDescription>
                  Thank you for reaching out. We have received your message and
                  will get back to you as soon as possible.
                </AlertDescription>
              </div>
            </Alert>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
