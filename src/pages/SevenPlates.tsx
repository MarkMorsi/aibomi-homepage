import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ForkKnife, CalendarBlank, ListChecks, Sparkle, EnvelopeSimple } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function SevenPlates() {
  const features = [
    {
      icon: <CalendarBlank weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Weekly Planning',
      description: 'Plan your meals for the entire week in minutes, not hours.'
    },
    {
      icon: <Sparkle weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Personalized Recipes',
      description: 'Get recipe suggestions that fit your family\'s taste and dietary needs.'
    },
    {
      icon: <ListChecks weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Smart Shopping Lists',
      description: 'Automatically generated shopping lists based on your meal plan.'
    },
    {
      icon: <ForkKnife weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Stress-Free Meals',
      description: 'Never wonder "what\'s for dinner?" again with a calm routine that fits your life.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft weight="thin" className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[oklch(0.65_0.18_140)] to-[oklch(0.55_0.20_160)] flex items-center justify-center">
                <div className="text-white text-7xl md:text-8xl font-bold">7</div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                7Plates
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Weekly meal planning made effortless
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                7Plates makes weekly meal planning effortless. Get personalized recipes, smart shopping lists, and a calm routine that fits your family's real life. Designed in Denmark, 7Plates helps you plan better, waste less, and enjoy stress‑free meals every week. Simply put, 7Plates is the answer for "what's for dinner".
              </p>
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="py-24 md:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight"
          >
            Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border">
                  <CardContent className="p-8 flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              7Plates is currently in development. We're crafting every detail to make meal planning a joy. Stay tuned for updates!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-150 hover:scale-[1.02] hover:shadow-md gap-2"
                >
                  <EnvelopeSimple weight="thin" className="w-5 h-5" />
                  Get In Touch
                </Button>
              </Link>
              <Link to="/">
                <Button 
                  size="lg"
                  variant="outline"
                  className="transition-all duration-150 hover:scale-[1.02]"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground mb-1">Aibomi ApS</p>
              <p className="text-sm text-muted-foreground">CVR-nummer 46102975<br />Denmark</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <EnvelopeSimple weight="thin" className="w-4 h-4" />
              <a 
                href="mailto:hey.you@aibomi.eu" 
                className="hover:text-primary transition-colors duration-200"
              >
                hey.you@aibomi.eu
              </a>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aibomi ApS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
