import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function PrivacyPolicy() {
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

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <Link 
          to="/7plates" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-8"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
          Back to 7Plates
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: May 1, 2025
          </p>

          <Separator className="mb-12" />

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Privacy Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please provide your privacy policy text for 7Plates. This is a placeholder page that will be populated with your legal content.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The content should include sections covering data collection, usage, storage, user rights, and any other relevant privacy information for your application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Placeholder Section 1</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy policy content will replace this placeholder text.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Placeholder Section 2</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy policy content will replace this placeholder text.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-border bg-card/50 mt-20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="font-bold text-foreground mb-1 text-xl">7Plates</p>
              <p className="text-sm text-muted-foreground">by Aibomi ApS</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/7plates/privacy" className="text-primary font-medium">
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

export default PrivacyPolicy
