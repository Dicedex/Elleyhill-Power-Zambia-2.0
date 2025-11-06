
"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <div className="container py-16 md:py-24 flex items-center justify-center">
        <Card className="max-w-lg text-center p-8">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <CardTitle className="font-headline text-3xl">404 - Page Not Found</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Sorry, the page you are looking for does not exist or has been moved.
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
