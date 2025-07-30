import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar, 
  ArrowRight,
  CheckCircle2 
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our expert team",
      detail: "+1 (912) 555-0123",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      detail: "support@artificialintelligencebits.com",
      availability: "24/7 response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support for quick questions",
      detail: "Available on website",
      availability: "Mon-Fri, 8AM-8PM EST"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized iEMA demo",
      detail: "30-minute consultation",
      availability: "Available Monday-Friday"
    }
  ];

  const offices = [
    {
      city: "Savannah, GA",
      address: "123 Bull Street, Suite 456",
      postal: "Savannah, GA 31401",
      phone: "+1 (912) 555-0123",
      isPrimary: true
    },
    {
      city: "Atlanta, GA",
      address: "789 Peachtree St, Floor 12",
      postal: "Atlanta, GA 30309",
      phone: "+1 (404) 555-0456",
      isPrimary: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We're Here to Help You
              <span className="text-primary block">Succeed with iEMA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about email marketing automation? Need a demo? 
              Our expert team is ready to help you grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-200 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <p className="text-primary font-medium mb-2">
                    {method.detail}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your email marketing goals and how we can help..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to receive communications from Artificialintelligencebits Solutions 
                    and understand I can unsubscribe at any time.
                  </Label>
                </div>
                
                <Button variant="hero" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Office Locations & Info */}
            <div className="space-y-6">
              {/* Office Locations */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className={`p-4 rounded-lg ${office.isPrimary ? 'bg-primary/5 border border-primary/20' : 'bg-secondary'}`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {office.city}
                            {office.isPrimary && (
                              <Badge variant="secondary" className="ml-2">Primary</Badge>
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                          <p className="text-sm text-muted-foreground mb-2">{office.postal}</p>
                          <p className="text-sm font-medium text-primary">{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Email support is available 24/7 with responses within 2 hours during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Live Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Check System Status
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about iEMA
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can I get started with iEMA?",
                answer: "You can start your free trial immediately after signing up. Our onboarding process takes just a few minutes, and you'll be sending automated emails within the hour."
              },
              {
                question: "Do you offer training and support?",
                answer: "Yes! We provide comprehensive onboarding, video tutorials, live training sessions, and dedicated customer success support to ensure you get the most out of iEMA."
              },
              {
                question: "Can I integrate iEMA with my existing tools?",
                answer: "Absolutely. iEMA integrates with 100+ popular tools including Salesforce, HubSpot, Shopify, WordPress, and many more. We also offer API access for custom integrations."
              },
              {
                question: "What makes iEMA different from other email platforms?",
                answer: "iEMA focuses specifically on automation and personalization. Our AI-powered segmentation, behavioral triggers, and advanced analytics help you create more targeted, effective campaigns."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait - start your free trial today and see how iEMA can transform your email marketing
          </p>
          <Button variant="secondary" size="lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;