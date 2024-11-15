"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Share2, FileEdit } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={150} height={150} />
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/questions" className="text-sm font-medium">
              Questions
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium">
              How it Works?
            </Link>
          </div>
        </div>
      </nav>
      <section className="container px-4 py-16 mx-auto text-center md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Your Personal AI Interview Coach
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">
            Double your chances of landing that job offer with our AI-powered
            interview prep
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="px-8" onClick={onDashboard}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-2 text-3xl font-bold">How it Works?</h2>
          <p className="mb-12 text-muted-foreground">
            Give mock interviews in just 3 simple easy step
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <FileEdit className="w-8 h-8 mx-auto text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Write prompt for your form
                </h3>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Edit className="w-8 h-8 mx-auto text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Edit Your form</h3>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Share2 className="w-8 h-8 mx-auto text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Share & Start Accepting Responses
                </h3>
              </CardContent>
            </Card>
          </div>

          <Button className="mt-12" size="lg" onClick={onDashboard}>
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
