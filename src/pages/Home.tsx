import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { EnvelopeSimple, DeviceMobile, Globe, Sparkle, AppWindow } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { CopenhagenSkyline } from '@/components/CopenhagenSkyline'
import { toast } from 'sonner'

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
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
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

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      const mailtoLink = `mailto:hey.you@aibomi.eu?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setTimeout(() => {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        toast.success('Message sent! Your email client should open.')
      }, 500)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: <DeviceMobile weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications powered by the latest AI technology.'
    },
    {
      icon: <Globe weight="thin" className="w-8 h-8 text-primary" />,
      title: 'Web Applications',
      description: 'Modern, responsive web apps built with cutting-edge frameworks and AI assistance.'
    },
    {
      icon: <Sparkle weight="thin" className="w-8 h-8 text-primary" />,
      title: 'AI Development',
      description: 'Specialized in AI-powered coding and intelligent application development.'
    }
  ]

  const apps = [
    {
      icon: <AppWindow weight="thin" className="w-8 h-8 text-secondary" />,
      title: '7Plates',
      description: 'Weekly meal planning made effortless. The answer to "what\'s for dinner".',
      link: '/7plates'
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <CopenhagenSkyline className="w-full h-full text-primary" />
      </div>

      <nav className="border-b border-border bg-card/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">AIBOMI</h2>
            <a href="#contact">
              <Button variant="ghost" className="gap-2">
                <EnvelopeSimple weight="thin" className="w-5 h-5" />
                Contact
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 relative z-10">
        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
              AI-Powered Web & Mobile Apps
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              We create intelligent applications that solve real problems for end users, specializing in AI-assisted development.
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
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 tracking-tight">
              Our Apps
            </h3>
            <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8">
              {apps.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={app.link}>
                    <Card className="h-full border-border hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      <CardContent className="p-8 flex gap-6 items-center">
                        <div className="flex-shrink-0">
                          {app.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {app.title}
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {app.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Have a project in mind? We'd love to hear from you.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-border">
                {isSubmitted ? (
                  <CardContent className="p-8 text-center">
                    <div className="mb-4">
                      <Sparkle weight="thin" className="w-16 h-16 text-accent mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-base text-muted-foreground mb-6">
                      We'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                ) : (
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">
                          Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`mt-2 ${errors.name ? 'border-destructive' : ''}`}
                          placeholder="Your name"
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
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`mt-2 ${errors.email ? 'border-destructive' : ''}`}
                          placeholder="your.email@example.com"
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
                          className={`mt-2 min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-150 hover:scale-[1.02] hover:shadow-md"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50 relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <p className="font-semibold text-foreground mb-1">Aibomi ApS</p>
              <p className="text-sm text-muted-foreground">CVR-nummer 46102975<br />Denmark</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <EnvelopeSimple weight="thin" className="w-4 h-4" />
              <a 
                href="mailto:hey.you@aibomi.eu" 
                className="hover:text-primary transition-colors duration-200"
              >
                hey.you@aibomi.eu
              </a>
            </motion.div>
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
