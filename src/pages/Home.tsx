import { useState } from 'react'
import { Button } from '@/components/ui
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/componen
import { motion } from 'framer-motion'

  const [formData, setFormData] = useState({
    email: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = 
  }
  const handl
    
    
    
  
      newErrors.email = 'Email is required'
      newErrors.email = 'Please enter a valid email'
    


      setErrors(newErrors)
   

    setTimeout(() => {
      setIsSubmitting(
    
    }, 1500)

    setFormData(prev => ({ ...pr
    if (errors[field]) {
    }
    
    }

    {
      title: 'Web & Mobile Apps',
    }
    
    <div className="min-h-screen bg
        <div className="mx-auto max-w-6xl px-6 
     

                Contact
            </a>
        </di


            initial={{ op
    
            <h1 classN
            </h1>
              We craft intel
          </motion.div>
      

          <m
   

          >
          </motion.h2>
    
              <motion.di
                initial={
                viewport={{ once: tru
              >
                  <CardC
        
     
   

                    
     
              </motion.div>
          </div>


   

          
          >
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-co
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
                <Card className="h-full border-border ho
                    <div className="flex-shrink-0">
                       
                    </d
                
                
              
            

            </motion.div>
        </section>
        <Separator cl
        <section id="contact" className="py
            initial={{ opacity: 0, y: 20 }
            viewport={{ once: true }}
          >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              </h2>
                H
            </div>
            <motion.div
              wh
              transitio
              {isS

                      Thank you for reaching out!

                    </p>
                </Ca
                <Card className="border-bor
            whileInView={{ opacity: 1, y: 0 }}
                        <Label htmlFo
                        </Label>
                          id="name"
           
                        
          </motion.h2>

                        )}

                        <
                        </Label>
                          type="email"
                          value={formData.email}
                viewport={{ once: true }}
                          }`}
              >
                          <p className="text-sm text-de
                      </div>
                      <div>
                          Message
                        <T
                          value={formData.me
                          className={`mt-2 min-h-[150px] ${
                          }`}
                        />
                          <p className="text-sm text-destructive mt-1">{errors.messag
                      </div>
                      <But
                        di
                      >
                       
                          <
               
                
                  

            </motion.div>


        <div classNa
            <div className="text-center md:
            whileInView={{ opacity: 1, y: 0 }}
            
              <EnvelopeSimple weight="thin
                href="mailto:hey.you@aibomi.eu" 
          >
              </a>
          </div>

          <p className="text-center text-sm text-muted-foreground">
          </p>
      </footer>
  )
























        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section id="contact" className="py-24 md:py-32">

            initial={{ opacity: 0, y: 20 }}






                Get In Touch
















































































































            





              >

              </a>

          </div>





          </p>





