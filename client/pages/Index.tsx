import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Smartphone,
  Fingerprint,
  QrCode,
  CheckCircle,
  Users,
  Building,
  Globe,
  ArrowRight,
  Zap,
  Lock,
  Star,
} from "lucide-react";

export default function Index() {
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const generateId = () => {
    // Generate a sample unique identifier
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `KE-${timestamp}-${random}`.toUpperCase();
  };

  const [generatedId, setGeneratedId] = useState("");

  const handleGenerateId = () => {
    const newId = generateId();
    setGeneratedId(newId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">KenyaID</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <Link
              to="/docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <a
              href="#integration"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              API
            </a>
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Trusted by 1M+ Kenyans
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Secure Digital Identity
            <span className="block text-primary">for Modern Kenya</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seamlessly integrate scalable, secure unique identifiers into your
            applications. Built for Kenya's digital future with biometric
            verification, mobile integration, and blockchain security.
          </p>

          {/* ID Generator Demo */}
          <Card className="max-w-md mx-auto mb-8 border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5" />
                Try ID Generation
              </CardTitle>
              <CardDescription>
                Generate a secure, unique digital identifier
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Enter phone number (e.g., +254 7XX XXX XXX)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <Button onClick={handleGenerateId} className="w-full" size="lg">
                <Zap className="w-4 h-4 mr-2" />
                Generate Digital ID
              </Button>
              {generatedId && (
                <div className="p-4 bg-accent/50 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-1">
                    Your Unique ID:
                  </p>
                  <code className="text-lg font-mono text-primary font-bold">
                    {generatedId}
                  </code>
                  <div className="flex items-center justify-center mt-3">
                    <div className="w-24 h-24 bg-foreground rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-background" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/docs">
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Kenya's Digital Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform provides everything you need to implement secure,
              scalable digital identity solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Fingerprint className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Biometric Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrate with fingerprint and facial recognition
                  systems for enhanced security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mobile-First Design</CardTitle>
                <CardDescription>
                  Perfect integration with M-Pesa and other mobile services that
                  Kenyans rely on daily.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Blockchain Security</CardTitle>
                <CardDescription>
                  Immutable records and cryptographic security ensure your
                  identity data is always protected.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>API-First Platform</CardTitle>
                <CardDescription>
                  RESTful APIs and SDKs for easy integration into existing
                  systems and applications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Scalable Infrastructure</CardTitle>
                <CardDescription>
                  Handle millions of identities with our cloud-native
                  architecture built for Africa.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Government Ready</CardTitle>
                <CardDescription>
                  Compliant with Kenya's data protection laws and ready for
                  government integration.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section id="integration" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Easy Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple APIs and comprehensive
              documentation.
            </p>
          </div>

          <Tabs defaultValue="api" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="api">API Integration</TabsTrigger>
              <TabsTrigger value="mobile">Mobile SDK</TabsTrigger>
              <TabsTrigger value="web">Web Components</TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>REST API Example</CardTitle>
                  <CardDescription>
                    Generate and verify digital identities with simple HTTP
                    requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-600">
                      // Generate a new digital identity
                    </div>
                    <div className="mt-2">
                      <span className="text-blue-600">POST</span>{" "}
                      https://api.kenyaid.co/v1/identity/generate
                    </div>
                    <div className="mt-2 text-gray-600">
                      {`{
  "phone": "+254712345678",
  "biometric_hash": "sha256...",
  "metadata": {
    "county": "Nairobi",
    "verification_level": "high"
  }
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mobile SDK</CardTitle>
                  <CardDescription>
                    Native Android and iOS SDKs for seamless mobile integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-600">
                      // Kotlin/Android Example
                    </div>
                    <div className="mt-2 text-gray-600">
                      {`val kenyaId = KenyaID.initialize("your-api-key")

kenyaId.generateIdentity(
  phone = "+254712345678",
  biometricData = biometricHash,
  onSuccess = { identity ->
    // Handle successful generation
    Log.d("KenyaID", "Generated: \${identity.id}")
  },
  onError = { error ->
    // Handle error
  }
)`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Web Components</CardTitle>
                  <CardDescription>
                    Drop-in React components for web applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-600">
                      // React Component Example
                    </div>
                    <div className="mt-2 text-gray-600">
                      {`import { KenyaIDGenerator } from '@kenyaid/react'

function MyApp() {
  return (
    <KenyaIDGenerator
      apiKey="your-api-key"
      onSuccess={(identity) => {
        console.log('Generated:', identity.id)
      }}
      theme="modern"
      enableBiometric={true}
    />
  )
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-primary-foreground/80">
                Digital IDs Generated
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">
                Uptime Guaranteed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">47</div>
              <div className="text-primary-foreground/80">
                Counties Supported
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers already building with KenyaID. Start
              your integration today with our free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get API Keys
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Contact Sales
              </Button>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                Free to start
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-success" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-accent/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  KenyaID
                </span>
              </div>
              <p className="text-muted-foreground">
                Powering Kenya's digital identity infrastructure with secure,
                scalable solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    SDKs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status Page
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 KenyaID. All rights reserved. Made with ❤️ in Kenya.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
