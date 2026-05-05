import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { EnvelopeSimple, DeviceMobile, Globe } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function Home() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
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

  const services = [
    {
      icon: <DeviceMobile weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications built with the latest technologies.'
    },
    {
      icon: <Globe weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Web Applications',
      description: 'Modern, responsive web applications that deliver exceptional user experiences.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Aibomi ApS</h2>
            <a href="#contact">
              <Button variant="ghost">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8">
              AI-Powered Web & Mobile Apps
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We craft intelligent digital solutions that transform ideas into exceptional user experiences.
            </p>
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
            Our Projects
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/7plates">
                <Card className="h-full border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-8 flex gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[oklch(0.65_0.18_140)] to-[oklch(0.55_0.20_160)] flex items-center justify-center">
                        <div className="text-white text-4xl font-bold">7</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        7Plates
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Weekly meal planning made effortless. Coming soon.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
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
            What We Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:border-primary transition-all duration-300">
                  <CardContent className="p-8 flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section id="contact" className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-center">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Have a project in mind? Let's talk about it.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isSubmitted ? (
                <Card className="border-border bg-accent/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <EnvelopeSimple weight="thin" className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you as soon as possible.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`mt-2 ${errors.name ? 'border-destructive' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`mt-2 ${errors.email ? 'border-destructive' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className={`mt-2 min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-150"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>
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
