import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Clock, BarChart3, TrendingUp, Target, Shield, Zap, Activity } from "lucide-react";

export default function Curriculum() {
  const modules = [
    {
      icon: BarChart3,
      title: "Module 1: Market Structure Fundamentals",
      duration: "6 hours",
      level: "Beginner",
      topics: [
        {
          name: "Understanding Market Phases",
          content: "Learn to identify accumulation, markup, distribution, and markdown phases in any market.",
        },
        {
          name: "Trend Identification",
          content: "Master the identification of higher highs, higher lows, lower highs, and lower lows.",
        },
        {
          name: "Break of Structure (BOS)",
          content: "Understand what constitutes a valid break of structure and how to trade it.",
        },
        {
          name: "Change of Character (ChoCh)",
          content: "Recognize early signs of trend reversals through change of character patterns.",
        },
        {
          name: "Market Manipulation",
          content: "Identify when institutions are manipulating price to trigger retail stop losses.",
        },
      ],
    },
    {
      icon: TrendingUp,
      title: "Module 2: Liquidity Concepts",
      duration: "8 hours",
      level: "Intermediate",
      topics: [
        {
          name: "Liquidity Pools",
          content: "Learn to identify where stop losses and pending orders cluster in the market.",
        },
        {
          name: "Liquidity Grabs & Sweeps",
          content: "Understand how institutions hunt liquidity before major moves.",
        },
        {
          name: "Equal Highs and Lows",
          content: "Recognize liquidity resting at equal highs and lows (double tops/bottoms).",
        },
        {
          name: "Inducement",
          content: "Identify price action designed to induce retail traders into poor positions.",
        },
        {
          name: "Liquidity Voids",
          content: "Trade the filling of liquidity voids after significant price moves.",
        },
      ],
    },
    {
      icon: Activity,
      title: "Module 3: Order Flow & Inefficiencies",
      duration: "10 hours",
      level: "Advanced",
      topics: [
        {
          name: "Order Blocks",
          content: "Identify institutional order blocks where smart money enters positions.",
        },
        {
          name: "Fair Value Gaps (FVG)",
          content: "Trade imbalances in price action that institutions look to fill.",
        },
        {
          name: "Breaker Blocks",
          content: "Understand failed order blocks that become support/resistance zones.",
        },
        {
          name: "Mitigation Blocks",
          content: "Learn to identify zones where price needs to mitigate before continuing.",
        },
        {
          name: "Institutional Order Flow",
          content: "Read the footprints institutions leave in the market through their orders.",
        },
      ],
    },
    {
      icon: Target,
      title: "Module 4: Entry & Exit Strategies",
      duration: "7 hours",
      level: "Intermediate",
      topics: [
        {
          name: "Optimal Trade Entries (OTE)",
          content: "Master the 61.8-78.6% Fibonacci retracement zone for entries.",
        },
        {
          name: "Entry Confirmation Signals",
          content: "Learn multiple confluence factors for high-probability trade entries.",
        },
        {
          name: "Stop Loss Placement",
          content: "Understand where to place stops to avoid getting hunted by liquidity sweeps.",
        },
        {
          name: "Partial Profit Taking",
          content: "Implement scaling out strategies to maximize profits while managing risk.",
        },
        {
          name: "Risk-Reward Ratios",
          content: "Calculate and achieve minimum 1:3 risk-reward ratios on every trade.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Module 5: Risk Management",
      duration: "5 hours",
      level: "Essential",
      topics: [
        {
          name: "Position Sizing",
          content: "Calculate optimal position sizes based on account size and risk tolerance.",
        },
        {
          name: "Risk Per Trade",
          content: "Never risk more than 1-2% of your account on a single trade.",
        },
        {
          name: "Portfolio Management",
          content: "Manage multiple positions and overall portfolio exposure effectively.",
        },
        {
          name: "Drawdown Management",
          content: "Implement strategies to minimize and recover from drawdowns.",
        },
        {
          name: "Trading Psychology",
          content: "Master the mental game and maintain discipline during winning and losing streaks.",
        },
      ],
    },
    {
      icon: Zap,
      title: "Module 6: Advanced Strategies",
      duration: "12 hours",
      level: "Advanced",
      topics: [
        {
          name: "Multi-Timeframe Analysis",
          content: "Align trades across multiple timeframes for maximum confluence.",
        },
        {
          name: "Session-Based Trading",
          content: "Understand London, New York, and Asian session characteristics.",
        },
        {
          name: "News Trading",
          content: "Navigate high-impact news events and institutional reactions.",
        },
        {
          name: "Algorithmic Patterns",
          content: "Recognize algorithmic trading patterns in modern markets.",
        },
        {
          name: "Building a Trading Plan",
          content: "Create a comprehensive, personalized trading plan and journal system.",
        },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-chart-5/10 text-chart-5";
      case "Intermediate":
        return "bg-chart-4/10 text-chart-4";
      case "Advanced":
        return "bg-destructive/10 text-destructive";
      case "Essential":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-curriculum">
            Complete Curriculum
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Smart Money Trading Course</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, step-by-step program covering every aspect of institutional trading methodology.
            From market structure to advanced order flow analysis.
          </p>
        </div>

        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div data-testid="info-total-duration">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">Total Duration</span>
              </div>
              <p className="text-2xl font-bold text-primary">48+ Hours</p>
            </div>
            <div data-testid="info-modules">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-semibold">Modules</span>
              </div>
              <p className="text-2xl font-bold text-primary">6 Core Modules</p>
            </div>
            <div data-testid="info-lessons">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold">Lessons</span>
              </div>
              <p className="text-2xl font-bold text-primary">30+ Topics</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <Card key={index} className="overflow-hidden" data-testid={`module-${index}`}>
              <div className="p-6 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{module.title}</h3>
                      <Badge className={getLevelColor(module.level)} data-testid={`badge-level-${index}`}>
                        {module.level}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="topics" className="border-0">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline" data-testid={`accordion-trigger-${index}`}>
                      View {module.topics.length} Topics
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="pl-4 border-l-2 border-primary/20" data-testid={`topic-${index}-${topicIndex}`}>
                            <h4 className="font-semibold mb-1">{topic.name}</h4>
                            <p className="text-sm text-muted-foreground">{topic.content}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-transparent">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get instant access to all modules, live trading sessions, and our exclusive trading community.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8" data-testid="button-enroll-curriculum">
                Enroll Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
