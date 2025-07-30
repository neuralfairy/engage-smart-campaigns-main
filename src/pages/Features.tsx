import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Clock, 
  Shield, 
  Puzzle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: "Smart Email Campaigns",
      description: "Create sophisticated drip campaigns with visual workflow builder",
      features: ["Drag-and-drop editor", "A/B testing", "Dynamic content", "Template library"]
    },
    {
      icon: Target,
      title: "Advanced Segmentation",
      description: "Target the right audience with precision using behavioral data",
      features: ["Demographic filtering", "Behavioral triggers", "Purchase history", "Engagement scoring"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance with detailed insights and actionable metrics",
      features: ["Open/click tracking", "Revenue attribution", "Conversion funnel", "Custom reports"]
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automate complex marketing workflows with intelligent triggers",
      features: ["Trigger automation", "Lead nurturing", "Win-back campaigns", "Lifecycle emails"]
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Capture, score, and nurture leads throughout the customer journey",
      features: ["Lead scoring", "CRM integration", "Contact management", "Lead magnets"]
    },
    {
      icon: Clock,
      title: "Time-based Triggers",
      description: "Send perfectly timed emails based on user behavior and preferences",
      features: ["Send time optimization", "Timezone handling", "Frequency capping", "Schedule campaigns"]
    },
    {
      icon: Shield,
      title: "Deliverability Focus",
      description: "Ensure your emails reach the inbox with advanced deliverability tools",
      features: ["Spam testing", "Sender reputation", "Domain authentication", "ISP monitoring"]
    },
    {
      icon: Puzzle,
      title: "Integrations",
      description: "Connect with your favorite tools and platforms seamlessly",
      features: ["CRM integration", "E-commerce platforms", "Landing pages", "API access"]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Shopify", "WordPress", "Zapier", "Stripe", "Mailchimp", "Zoho"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <Badge variant="outline" className="mb-4">
              iEMA Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful Email Marketing
              <span className="text-primary block">Automation Features</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to create, automate, and optimize your email marketing campaigns for maximum ROI
            </p>
            <Button variant="hero" size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-200 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See iEMA in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the power of automated email marketing workflows
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Create Workflow</h3>
                    <p className="text-sm text-muted-foreground">
                      Design your email sequence with our visual workflow builder
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>

                  {/* Step 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Set Triggers</h3>
                    <p className="text-sm text-muted-foreground">
                      Define when and how your emails are automatically sent
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>

                  {/* Step 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Track Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor performance and optimize for better conversions
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button variant="hero" size="lg">
                    Watch Interactive Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect iEMA with your existing tools and platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {integrations.map((integration, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground">
                {integration}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using iEMA to automate their email marketing and increase revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;