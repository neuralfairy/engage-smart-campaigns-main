import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  CheckCircle2, 
  Mail, 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  Quote
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Mail,
      title: "Smart Email Campaigns",
      description: "Create sophisticated drip campaigns with our visual workflow builder and AI-powered optimization."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Segment your audience with behavioral data and send personalized messages that convert."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track every metric that matters with real-time analytics and actionable insights."
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Capture, score, and nurture leads automatically throughout their entire customer journey."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechStart Inc.",
      role: "Marketing Director",
      content: "iEMA transformed our email marketing. We saw a 300% increase in lead conversion within the first month.",
      rating: 5
    },
    {
      name: "James Rodriguez",
      company: "E-commerce Pro",
      role: "CEO",
      content: "The automation workflows saved us 20 hours per week while increasing our revenue by 150%.",
      rating: 5
    },
    {
      name: "Emily Chen",
      company: "B2B Solutions",
      role: "Growth Manager",
      content: "Best email marketing platform we've used. The segmentation features are incredibly powerful.",
      rating: 5
    }
  ];

  const stats = [
    { value: "40%", label: "Average Open Rate Increase" },
    { value: "300%", label: "ROI Improvement" },
    { value: "5,000+", label: "Happy Customers" },
    { value: "99.9%", label: "Platform Uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Email Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful automation tools designed to help B2B companies scale their email marketing efforts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Results for Growing Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of companies already seeing incredible results with iEMA
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses using iEMA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integrates with Your Favorite Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect iEMA with the platforms you already use
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Salesforce", "HubSpot", "Shopify", "WordPress", "Zapier", "Stripe", "Mailchimp", "Zoho"].map((integration, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground">
                {integration}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              View All 100+ Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using iEMA to automate their email marketing and increase revenue. 
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
          <p className="text-primary-foreground/80 text-sm mt-4">
            Free 14-day trial • No setup fees • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
