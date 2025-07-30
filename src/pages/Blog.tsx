import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp } from "lucide-react";

const Blog = () => {
  const categories = [
    "Email Marketing", "Automation", "Lead Generation", "Analytics", "Best Practices", "Case Studies"
  ];

  const featuredPost = {
    title: "The Complete Guide to Email Marketing Automation in 2024",
    excerpt: "Learn how to set up sophisticated email automation workflows that convert prospects into customers and boost your ROI by 300%.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Email Marketing",
    featured: true
  };

  const blogPosts = [
    {
      title: "10 Email Automation Workflows Every B2B Company Needs",
      excerpt: "Discover the most effective automated email sequences that nurture leads and drive conversions for B2B businesses.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Automation"
    },
    {
      title: "How to Increase Email Open Rates by 40% (Data-Driven Strategies)",
      excerpt: "Proven techniques based on analyzing 10 million emails to dramatically improve your email open rates.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Best Practices"
    },
    {
      title: "Email Segmentation: The Ultimate Guide to Targeting Your Audience",
      excerpt: "Master the art of email segmentation to send more relevant, personalized messages that convert.",
      author: "David Thompson",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Lead Generation"
    },
    {
      title: "Case Study: How TechCorp Increased Revenue by 250% with iEMA",
      excerpt: "A detailed breakdown of how one company used our platform to transform their email marketing results.",
      author: "Sarah Johnson",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Case Studies"
    },
    {
      title: "The Psychology Behind High-Converting Email Subject Lines",
      excerpt: "Understand the psychological triggers that make people open emails and how to use them ethically.",
      author: "Michael Chen",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Best Practices"
    },
    {
      title: "Email Analytics: 15 Metrics That Actually Matter for Your Business",
      excerpt: "Cut through the noise and focus on the email metrics that truly impact your bottom line.",
      author: "Emily Rodriguez",
      date: "December 1, 2024",
      readTime: "11 min read",
      category: "Analytics"
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
              <TrendingUp className="mr-2 h-4 w-4" />
              Thought Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Email Marketing
              <span className="text-primary block">Insights & Strategies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay ahead of the curve with expert insights, proven strategies, and actionable tips 
              to master email marketing automation.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              All Posts
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest and most comprehensive guide</p>
          </div>

          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button variant="hero">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Featured Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert insights to help you master email marketing automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-200 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-elegant max-w-2xl mx-auto bg-gradient-secondary">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Email Marketing Trends
              </h3>
              <p className="text-muted-foreground mb-6">
                Get weekly insights, tips, and strategies delivered straight to your inbox. 
                Join 10,000+ marketing professionals who trust our content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address"
                  type="email"
                  className="flex-1"
                />
                <Button variant="hero">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. See our <span className="text-primary cursor-pointer">privacy policy</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Put These Strategies into Action?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start implementing these proven email marketing strategies with iEMA's powerful automation platform
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

export default Blog;