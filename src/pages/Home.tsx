import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { CopenhagenSkyline } from '@/components/CopenhagenSkyline'
import { CheckCircle, Code, Sparkle, Users, PaperPlaneTilt, EnvelopeSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: <Code weight="thin" className="w-12 h-12 text-primary" />,
    title: 'AI-Powered Development',
    description: 'Cutting-edge AI coding tools that accelerate development and enhance productivity.'
  },
  {
    icon: <Sparkle weight="thin" className="w-12 h-12 text-secondary" />,
    title: 'Web & Mobile Apps',
    description: 'Beautiful, performant applications designed for end users across all platforms.'
  },
  {
    icon: <Users weight="thin" className="w-12 h-12 text-accent" />,
    title: 'User-Centric Design',
    description: 'Intuitive interfaces that prioritize user experience and accessibility.'
  }
]

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    const mailtoLink = `mailto:hey.you@aibomi.eu?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success('Email client opened! Your message is ready to send.')
      
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <CopenhagenSkyline className="w-full h-full object-cover" />
      </div>

      <header className="relative z-10 border-b border-border bg-card/80 backdrop-blur-sm">
        <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkle weight="fill" className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">AIBOMI</h1>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#services" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Link 
              to="/7plates" 
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              7Plates
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-1">
        <section className="py-24 md:py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Creating Intelligent Apps for the Modern Web
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We specialize in AI-powered development, crafting beautiful web and mobile applications that delight end users.
            </p>
          </motion.div>
        </section>

        <section id="services" className="py-24 md:py-32 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight"
          >
            What We Do
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-border">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div className="mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section id="contact" className="py-24 md:py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">Wanna collaborate? We'd love to hear from you.</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-lg p-12 text-center"
              >
                <CheckCircle weight="thin" className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Email Client Opened</h3>
                <p className="text-muted-foreground">
                  Your message is ready to send to hey.you@aibomi.eu
                </p>
              </motion.div>
            ) : (
              <Card className="border-border">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`mt-2 transition-all duration-200 ${
                          errors.name ? 'border-destructive ring-destructive' : ''
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`mt-2 transition-all duration-200 ${
                          errors.email ? 'border-destructive ring-destructive' : ''
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`mt-2 min-h-[150px] transition-all duration-200 ${
                          errors.message ? 'border-destructive ring-destructive' : ''
                        }`}
                        placeholder="Tell us what's on your mind..."
                        maxLength={1000}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-150 hover:scale-[1.02] hover:shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Opening email...'
                      ) : (
                        <>
                          <PaperPlaneTilt weight="thin" className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm">
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
                className="hover:text-foreground transition-colors"
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

export default Home
