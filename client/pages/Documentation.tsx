import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowLeft, Book, Code, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">KenyaID</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button size="sm">Get API Key</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Developer Resources
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Documentation & API Reference
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Everything you need to integrate KenyaID into your applications.
          Comprehensive guides, API reference, and code examples.
        </p>
      </section>

      {/* Quick Start Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Quick setup guide to get your first identity generated in
                minutes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Complete REST API documentation with interactive examples
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Mobile SDKs</CardTitle>
              <CardDescription>
                Native Android & iOS libraries for seamless mobile integration
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Web Libraries</CardTitle>
              <CardDescription>
                JavaScript/TypeScript libraries and React components
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">
              Documentation Coming Soon
            </CardTitle>
            <CardDescription className="text-lg">
              We're working hard to bring you comprehensive documentation and
              guides. In the meantime, feel free to reach out to our team for
              early access and support.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Developer Support</Button>
              <Button variant="outline" size="lg">
                Join Beta Program
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Expected launch: Q2 2024
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
