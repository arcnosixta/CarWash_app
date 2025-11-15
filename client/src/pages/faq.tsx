import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { HelpCircle, Mail } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Do I need prior trading experience?",
          a: "No! Our curriculum is designed for all levels, from complete beginners to experienced traders looking to refine their strategies. We start with fundamentals and progressively build to advanced concepts.",
        },
        {
          q: "How long does it take to complete the course?",
          a: "The self-paced course contains 48+ hours of content. Most students complete the core curriculum in 6-8 weeks, though you have lifetime access and can learn at your own pace.",
        },
        {
          q: "What markets does this apply to?",
          a: "Smart Money concepts work across all liquid markets including Forex, Stocks, Indices, Commodities, and Cryptocurrencies. The principles are universal.",
        },
        {
          q: "What equipment do I need?",
          a: "A computer or laptop with internet access is all you need. We'll teach you to use free charting platforms like TradingView. No expensive software required.",
        },
      ],
    },
    {
      category: "Course Content",
      questions: [
        {
          q: "What is Smart Money trading?",
          a: "Smart Money trading teaches you to think like institutional traders—banks, hedge funds, and market makers. You'll learn to identify their footprints in price action, understand liquidity dynamics, and trade alongside professionals rather than against them.",
        },
        {
          q: "Is this just another indicator-based system?",
          a: "Absolutely not! We teach you to read raw price action and understand market structure without relying on lagging indicators. You'll learn to see what institutions are doing in real-time.",
        },
        {
          q: "Do I get lifetime access to updates?",
          a: "Yes! All pricing tiers include lifetime access to the course content, including all future updates and new modules we add.",
        },
        {
          q: "Are the strategies beginner-friendly?",
          a: "Yes, we break down complex institutional concepts into simple, actionable steps. Our progressive curriculum ensures you master fundamentals before moving to advanced topics.",
        },
      ],
    },
    {
      category: "Mentorship & Support",
      questions: [
        {
          q: "How does the mentorship work?",
          a: "Group Mentorship includes 8 weekly live sessions with Q&A. 1-on-1 Mentorship provides 12 private sessions with a dedicated mentor who creates a personalized trading plan for you.",
        },
        {
          q: "Can I upgrade my plan later?",
          a: "Yes! You can upgrade from Self-Study to Group Mentorship or 1-on-1 at any time. We'll credit your initial payment toward the higher tier.",
        },
        {
          q: "How responsive is support?",
          a: "Community members typically get responses within hours. Group Mentorship students get priority email support within 24 hours. 1-on-1 students have direct mentor access via chat.",
        },
        {
          q: "What happens after the mentorship period ends?",
          a: "You retain lifetime access to all course content and the community. While formal mentorship sessions end, you remain part of our trading family with ongoing community support.",
        },
      ],
    },
    {
      category: "Results & Guarantees",
      questions: [
        {
          q: "How quickly will I see results?",
          a: "Results vary by individual effort and market conditions. Most dedicated students start seeing improvement in their understanding within 2-3 weeks and begin executing profitable trades within 1-3 months.",
        },
        {
          q: "What is your refund policy?",
          a: "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason within the first 30 days, contact us for a full refund.",
        },
        {
          q: "Do you guarantee I'll make money?",
          a: "No one can guarantee trading profits—anyone who does is not being honest. We provide world-class education, proven strategies, and ongoing support. Your results depend on your dedication, practice, and risk management.",
        },
        {
          q: "What is the success rate of your students?",
          a: "89% of our students who complete the full curriculum and actively participate in the community achieve profitability within their first year. However, past performance doesn't guarantee future results.",
        },
      ],
    },
    {
      category: "Payment & Access",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and cryptocurrency. Payment plans are available for Group and 1-on-1 Mentorship options.",
        },
        {
          q: "When do I get access after payment?",
          a: "Immediately! Once your payment is processed, you'll receive login credentials and can start learning right away.",
        },
        {
          q: "Is there a monthly subscription?",
          a: "No! All our plans are one-time payments with lifetime access. No recurring fees or hidden costs.",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes, we offer 3-month and 6-month payment plans for Group Mentorship and 1-on-1 programs. Contact us for details.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-faq">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Got Questions? We've Got Answers</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our trading education, mentorship programs, and community.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" data-testid={`category-${categoryIndex}`}>
                <HelpCircle className="h-6 w-6 text-primary" />
                {category.category}
              </h2>
              <Card className="p-6">
                <Accordion type="single" collapsible>
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger
                        className="text-left hover:no-underline"
                        data-testid={`faq-question-${categoryIndex}-${faqIndex}`}
                      >
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          ))}
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/10 to-transparent text-center mt-16">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8" data-testid="button-contact-faq">
              Contact Support
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
