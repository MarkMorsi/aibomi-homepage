import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AppleLogo, GooglePlayLogo, ChartLine, Users, Clock, Star, CookingPot, Heart, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: <CookingPot weight="thin" className="w-12 h-12" />,
    title: 'AI-Powered Meal Plans',
    description: 'Get personalized weekly meal plans tailored to your dietary preferences and nutritional goals.'
  },
  {
    icon: <Heart weight="thin" className="w-12 h-12" />,
    title: 'Health Focused',
    description: 'Track calories, macros, and nutrition to reach your wellness objectives with confidence.'
  },
  {
    icon: <Clock weight="thin" className="w-12 h-12" />,
    title: 'Save Time',
    description: 'Automated shopping lists and quick recipes help you spend less time planning, more time living.'
  },
  {
    icon: <Star weight="thin" className="w-12 h-12" />,
    title: 'Recipe Library',
    description: 'Access thousands of curated recipes from around the world, rated by the community.'
  }
]

const stats = [
  { icon: <Users weight="thin" className="w-8 h-8" />, value: '50K+', label: 'Active Users' },
  { icon: <CookingPot weight="thin" className="w-8 h-8" />, value: '100K+', label: 'Recipes' },
  { icon: <ChartLine weight="thin" className="w-8 h-8" />, value: '2M+', label: 'Meals Planned' }
]

const benefits = [
  'AI-generated meal plans based on your preferences',
  'Automated grocery lists synced across devices',
  'Nutritional tracking and insights',
  'Recipe discovery and ratings',
  'Meal prep scheduling',
  'Dietary restriction support'
]

function SevenPlates() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">
            <span className="text-xl font-bold">Aibomi</span>
          </Link>
          <Link to="/7plates">
            <span className="text-2xl font-bold text-primary">7Plates</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              Your Personal<br />Meal Planning Assistant
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Transform the way you eat with AI-powered meal plans, smart grocery lists, and thousands of delicious recipes at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background gap-2 w-full">
                  <AppleLogo weight="fill" className="w-5 h-5" />
                  Download for iOS
                </Button>
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-2 w-full">
                  <GooglePlayLogo weight="fill" className="w-5 h-5" />
                  Get it on Android
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="py-20 md:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
          >
            Why Choose 7Plates?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="text-primary mb-2">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Everything You Need to Eat Well
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                7Plates combines cutting-edge AI technology with nutritional science to help you achieve your health goals while enjoying delicious meals.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle weight="fill" className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🍽️</div>
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Join thousands of users who have transformed their relationship with food. Download 7Plates now and get your first week of meal plans free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full">
                  <AppleLogo weight="fill" className="w-5 h-5" />
                  Download for iOS
                </Button>
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-2 w-full">
                  <GooglePlayLogo weight="fill" className="w-5 h-5" />
                  Get it on Android
                </Button>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-bold text-foreground mb-1 text-xl">7Plates</p>
              <p className="text-sm text-muted-foreground">by Aibomi ApS</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/7plates/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/7plates/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Use
              </Link>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} Aibomi ApS. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              CVR-nummer 46102975 | Denmark
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SevenPlates
