import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { TrendingUp, Users, Award, BarChart3, Shield, Brain } from 'lucide-react';
import heroImage from '@assets/generated_images/Trader_at_multiple_monitors_490eaf0b.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
}

export default function Home() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      title: t('benefits.institutional.title'),
      description: t('benefits.institutional.description'),
    },
    {
      icon: Award,
      title: t('benefits.practical.title'),
      description: t('benefits.practical.description'),
    },
    {
      icon: Users,
      title: t('benefits.mentorship.title'),
      description: t('benefits.mentorship.description'),
    },
  ];

  const courses = [
    {
      icon: BarChart3,
      title: t('courses.marketStructure.title'),
      description: t('courses.marketStructure.description'),
      duration: t('courses.marketStructure.duration'),
      level: t('courses.intermediate'),
    },
    {
      icon: TrendingUp,
      title: t('courses.liquidity.title'),
      description: t('courses.liquidity.description'),
      duration: t('courses.liquidity.duration'),
      level: t('courses.advanced'),
    },
    {
      icon: Shield,
      title: t('courses.riskManagement.title'),
      description: t('courses.riskManagement.description'),
      duration: t('courses.riskManagement.duration'),
      level: t('courses.beginner'),
    },
    {
      icon: Brain,
      title: t('courses.psychology.title'),
      description: t('courses.psychology.description'),
      duration: t('courses.psychology.duration'),
      level: t('courses.intermediate'),
    },
  ];

  const testimonials = [
    { key: 'alex', initials: 'AJ' },
    { key: 'maria', initials: 'MG' },
    { key: 'david', initials: 'DC' },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'blur(3px)',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            data-testid="text-hero-title"
          >
            <TypingText text={t('hero.title')} />
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-4 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            data-testid="text-hero-subtitle"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link href="/courses">
              <Button
                size="lg"
                className="text-lg px-8 py-6 animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                data-testid="button-join-academy"
              >
                {t('hero.joinAcademy')}
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-white hover:bg-primary/10 backdrop-blur-sm"
                data-testid="button-view-courses"
              >
                {t('hero.viewCourses')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      <AnimatedSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
            data-testid="text-benefits-title"
          >
            {t('benefits.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid={`card-benefit-${index}`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-concepts-title">
              {t('concepts.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('concepts.description')}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
            data-testid="text-courses-title"
          >
            {t('courses.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid={`card-course-preview-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{course.duration}</span>
                      <span className="px-2 py-1 rounded bg-primary/10 text-primary">{course.level}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link href="/courses">
              <Button size="lg" data-testid="button-all-courses">
                {t('courses.allCourses')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
            data-testid="text-testimonials-title"
          >
            {t('testimonials.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.key} variants={itemVariants}>
                <Card className="h-full hover-elevate active-elevate-2" data-testid={`card-testimonial-${testimonial.key}`}>
                  <CardContent className="p-6">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-muted-foreground mb-4 italic">"{t(`testimonials.${testimonial.key}.content`)}"</p>
                    <div>
                      <p className="font-semibold">{t(`testimonials.${testimonial.key}.name`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`testimonials.${testimonial.key}.role`)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-title">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <Link href="/mentorship">
              <Button
                size="lg"
                className="text-lg px-8 py-6 animate-glow-pulse"
                data-testid="button-get-started"
              >
                {t('cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
