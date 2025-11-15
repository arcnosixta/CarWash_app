import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Shield, Users, BarChart3, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Trading_workspace_hero_background_6e178b07.png";

export default function Home() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Market Structure Mastery",
      description: "Learn to read institutional order flow and identify high-probability trade setups using Smart Money concepts.",
    },
    {
      icon: Target,
      title: "Precision Entry & Exit",
      description: "Master optimal entry points, stop-loss placement, and profit-taking strategies based on liquidity analysis.",
    },
    {
      icon: Shield,
      title: "Professional Risk Management",
      description: "Implement institutional-grade risk management techniques to protect capital and ensure long-term profitability.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Direct access to professional traders with proven track records in Smart Money trading methodologies.",
    },
    {
      icon: BarChart3,
      title: "Live Trading Sessions",
      description: "Participate in real-time market analysis sessions and watch professional traders execute live trades.",
    },
    {
      icon: Zap,
      title: "Community Support",
      description: "Join an active community of dedicated traders sharing insights, strategies, and support.",
    },
  ];

  const modules = [
    {
      title: "Market Structure",
      description: "Understanding market phases, trend identification, and structural breaks.",
      topics: ["Higher Highs/Lows", "Break of Structure", "Change of Character", "Trend Analysis"],
    },
    {
      title: "Liquidity Concepts",
      description: "Identifying liquidity pools, sweeps, and institutional accumulation zones.",
      topics: ["Liquidity Pools", "Liquidity Grabs", "Equal Highs/Lows", "Stop Hunt Patterns"],
    },
    {
      title: "Order Flow Analysis",
      description: "Reading institutional order flow and understanding market maker behavior.",
      topics: ["Order Blocks", "Fair Value Gaps", "Breaker Blocks", "Mitigation Zones"],
    },
    {
      title: "Entry & Exit Strategies",
      description: "Precision entry techniques and optimal profit-taking methodologies.",
      topics: ["Optimal Trade Entries", "Partial Profit Taking", "Stop Loss Placement", "Risk-Reward Ratios"],
    },
  ];

  const stats = [
    { value: "5,000+", label: "Active Students" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Community Access" },
    { value: "100+", label: "Hours of Content" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6" variant="secondary" data-testid="badge-hero">
            Professional Trading Education
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master Smart Money Trading
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn institutional trading strategies, market structure, and order flow analysis from expert traders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8" data-testid="button-hero-enroll">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/curriculum">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-background/20 backdrop-blur-sm"
                data-testid="button-hero-curriculum"
              >
                View Curriculum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Smart Money Academy?</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive curriculum is designed to transform you from a retail trader to thinking like an institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover-elevate" data-testid={`benefit-card-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Course Modules</h2>
            <p className="text-lg text-muted-foreground">
              A structured curriculum covering all aspects of Smart Money trading methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="p-8" data-testid={`module-card-${index}`}>
                <h3 className="text-2xl font-bold mb-3">{module.title}</h3>
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/curriculum">
              <Button size="lg" data-testid="button-view-full-curriculum">
                View Full Curriculum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Trading?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful traders who have mastered Smart Money concepts and achieved consistent profitability.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="text-lg px-8" data-testid="button-cta-bottom">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
