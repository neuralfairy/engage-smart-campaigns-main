import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for small businesses getting started with email automation",
      popular: false,
      features: [
        "Up to 2,500 contacts",
        "5,000 emails per month",
        "Basic automation workflows",
        "Email templates",
        "A/B testing",
        "Basic analytics",
        "Email support"
      ],
      notIncluded: [
        "Advanced segmentation",
        "Custom integrations",
        "Priority support",
        "Advanced analytics"
      ]
    },
    {
      name: "Professional",
      price: 99,
      description: "Ideal for growing businesses that need advanced automation features",
      popular: true,
      features: [
        "Up to 10,000 contacts",
        "25,000 emails per month",
        "Advanced automation workflows",
        "Premium email templates",
        "Advanced A/B testing",
        "Advanced segmentation",
        "Real-time analytics",
        "CRM integrations",
        "Landing page builder",
        "Priority email support"
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated account manager",
        "Custom reporting"
      ]
    },
    {
      name: "Enterprise",
      price: 299,
      description: "For large organizations requiring maximum flexibility and support",
      popular: false,
      features: [
        "Unlimited contacts",
        "Unlimited emails",
        "Custom automation workflows",
        "White-label options",
        "Advanced A/B testing",
        "Predictive analytics",
        "Custom integrations",
        "API access",
        "Custom reporting",
        "Dedicated account manager",
        "24/7 phone support",
        "Onboarding assistance"
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What happens if I exceed my contact limit?",
      answer: "We'll notify you before you reach your limit and help you upgrade to accommodate your growth."
    },
    {
      question: "Do you offer custom enterprise pricing?",
      answer: "Yes, we offer custom pricing for large organizations with specific requirements. Contact our sales team."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees or hidden costs. You only pay the monthly subscription fee."
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
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose the Perfect Plan
              <span className="text-primary block">for Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start with our free trial, then choose a plan that scales with your business growth
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-card border border-border rounded-lg p-1">
              <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md">
                Monthly
              </button>
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground">
                Annual
                <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative shadow-soft hover:shadow-elegant transition-all duration-200 ${
                  plan.popular ? 'border-primary shadow-elegant scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <CardDescription className="mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    {plan.popular ? "Start Free Trial" : "Choose Plan"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <div className="pt-3 border-t border-border">
                          <h4 className="font-semibold text-muted-foreground text-sm mb-3">Not included:</h4>
                          {plan.notIncluded.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <X className="h-4 w-4 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          <Card className="shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold">Professional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4">Contact Limit</td>
                      <td className="text-center p-4">2,500</td>
                      <td className="text-center p-4">10,000</td>
                      <td className="text-center p-4">Unlimited</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Email Templates</td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Advanced Segmentation</td>
                      <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Custom Integrations</td>
                      <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4">24/7 Support</td>
                      <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                      <td className="text-center p-4"><CheckCircle2 className="h-4 w-4 text-primary mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            No credit card required. Experience the full power of iEMA for 14 days.
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

export default Pricing;