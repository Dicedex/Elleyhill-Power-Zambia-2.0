
"use client";

import { SiteLayout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <SiteLayout>
      <div className="container py-16 md:py-24 flex items-center justify-center">
        <Card className="max-w-lg text-center p-8">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="font-headline text-3xl">Message Sent!</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Thank you for reaching out. We have received your message and will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
