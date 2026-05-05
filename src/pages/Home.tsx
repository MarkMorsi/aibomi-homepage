import { useState } from 'react'
import { Button } from '@/components/ui
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'

export function Home() {
    name: '',
    message: ''

  const [isSubmitted, se
  const validateEmail = (email: string) => {
  }
  const handle
    
    
      newErrors.name = 'Name is required'
    
      newErrors.email = 'Email is required'

    
      newErrors.message = 'Message is required'
   

    }
    setIsSubmitting(tr
    
    )}`
    
    setTimeout(() => {
      setIsSubmitted(true)
     
    
      setTimeout(() => setIsSubmi
  }
  const handleInputChange = (field: string, valu
    if (errors[field]) {
     
    
    }

    {
    
    },
      icon: <AppWindow wei
      descri
    {
    
    }

    <div className="min-h-screen bg-background">
        <section className="py-24 md:py-32 text-center relative overflow-hidden">
       
    
            animate={{ opacity: 1, y:
    
            <h1 classN
          </motion.div>


      
            whileInView={{ opacity: 1, y: 0 }}
            transit
      
          </motion.h2>
          <
   

                viewport={{ once: true }}
              >
                  <CardC
                      {se
                    <h3 className="te
                    </h3>
                      {s
        
     
   


     
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
          >
      
     
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ durati
          >
      
     
                      <div className="text-white text-5xl md:text-6xl font-bol
                  </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 flex items-cent
     
   

          
            </Link>
        </section>
        <Separator className="max-w-4xl mx-auto" />
        <section id="contact" className="py-24 md:py-32">
            initial={{ opacity: 0, y: 20 }}
            view
            className
            <div className="text-center mb-
                Get In Touch
              <p className="text-base md:t

           
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3 cla
                  

              <Card className="border-border">

                      <Label htmlFor="name" 
                     
                        id="name"
                        value={formData.name}
                        className={`m
                        }`}
                      />
           
                    </
                    <d
          
                      <Input
                        type="email"
                        o
                          errors.em
                        placeholder="your@email
                      {errors.email && (
                      )}

               
                        id="message"
                        onChange={(e) => handleInputChange('message', e.target.value)}
                          errors.message ?
                        placeholder=
                      />
                        <p className="text-sm text-destructive mt-1">{errors.message
                    </div>
                    <Butt
                      className="w-full bg-accent hover:bg-accent/90 text-accent-fo
                    >
                        
                        <>
                       
                      )}
               
              </
          </motion

        <div className="mx-auto max-w-6xl px-6 py-1

              <p className="text-sm text-mut
            
              <EnvelopeSimple weight="thin"
                href="mailto:hey.you@aibomi.eu
              >
              </a>
          </div>
          <
          <p classNa
          </p>
      </fo
  );











































































































































































