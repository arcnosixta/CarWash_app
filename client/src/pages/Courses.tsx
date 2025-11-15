import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, TrendingUp, Activity, Shield, Brain, Clock } from 'lucide-react';
import chartImage from '@assets/generated_images/Trading_chart_with_liquidity_b74678fb.png';

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

export default function Courses() {
  const { t } = useTranslation();
  const [levelFilter, setLevelFilter] = useState<string>('all');

  const courses = [
    {
      id: 1,
      icon: BarChart3,
      title: t('courses.marketStructure.title'),
      description: t('courses.marketStructure.description'),
      duration: t('courses.marketStructure.duration'),
      level: t('courses.intermediate'),
      levelKey: 'intermediate',
      topics: ['Trend Analysis', 'Support & Resistance', 'Chart Patterns'],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: t('courses.liquidity.title'),
      description: t('courses.liquidity.description'),
      duration: t('courses.liquidity.duration'),
      level: t('courses.advanced'),
      levelKey: 'advanced',
      topics: ['Liquidity Pools', 'Order Blocks', 'Fair Value Gaps'],
    },
    {
      id: 3,
      icon: Activity,
      title: t('courses.orderFlow.title'),
      description: t('courses.orderFlow.description'),
      duration: t('courses.orderFlow.duration'),
      level: t('courses.advanced'),
      levelKey: 'advanced',
      topics: ['Smart Money Flow', 'Institutional Orders', 'Volume Analysis'],
    },
    {
      id: 4,
      icon: Shield,
      title: t('courses.riskManagement.title'),
      description: t('courses.riskManagement.description'),
      duration: t('courses.riskManagement.duration'),
      level: t('courses.beginner'),
      levelKey: 'beginner',
      topics: ['Position Sizing', 'Stop Loss Strategies', 'Risk-Reward Ratio'],
    },
    {
      id: 5,
      icon: Brain,
      title: t('courses.psychology.title'),
      description: t('courses.psychology.description'),
      duration: t('courses.psychology.duration'),
      level: t('courses.intermediate'),
      levelKey: 'intermediate',
      topics: ['Emotional Control', 'Discipline', 'Trading Plan'],
    },
  ];

  const filteredCourses = levelFilter === 'all'
    ? courses
    : courses.filter(course => course.levelKey === levelFilter);

  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-96 flex items-center justify-center overflow-hidden"
        data-testid="section-courses-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${chartImage})`,
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white" data-testid="text-courses-hero-title">
            {t('courses.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Master the skills you need to become a successful trader
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h2 className="font-serif text-3xl font-bold">{t('courses.allCourses')}</h2>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">{t('courses.filterByLevel')}:</span>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-48" data-testid="select-level-filter">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" data-testid="option-level-all">All Levels</SelectItem>
                <SelectItem value="beginner" data-testid="option-level-beginner">{t('courses.beginner')}</SelectItem>
                <SelectItem value="intermediate" data-testid="option-level-intermediate">{t('courses.intermediate')}</SelectItem>
                <SelectItem value="advanced" data-testid="option-level-advanced">{t('courses.advanced')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              data-testid={`card-course-${course.id}`}
            >
              <Card className="h-full flex flex-col hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <course.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Topics covered:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" data-testid={`button-learn-more-${course.id}`}>
                    {t('courses.learnMore')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No courses found for this level.</p>
          </div>
        )}
      </div>
    </div>
  );
}
