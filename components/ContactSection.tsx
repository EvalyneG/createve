'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Send, CheckCircle, Mail } from 'lucide-react'
import { toast } from 'sonner@2.0.3'

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Portfolio Contact')
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\n` +
        `This message was sent via your portfolio contact form.`
      )
      
      const mailtoLink = `mailto:createve254@gmail.com?subject=${subject}&body=${body}`
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Open default email client
      window.location.href = mailtoLink
      
      toast.success('Email client opened! Your message is ready to send.', {
        duration: 5000,
        icon: <CheckCircle className="h-5 w-5" />
      })

      // Reset form
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error) {
      console.error('Error preparing email:', error)
      toast.error('Failed to prepare email. Please try again or contact createve254@gmail.com directly.', {
        duration: 5000
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDirectEmail = () => {
    window.location.href = 'mailto:createve254@gmail.com?subject=Portfolio Inquiry'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding container-padding bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            Let's Design A Solution
          </h2>
          <p className="lead max-w-2xl mx-auto">
            Ready to bring your vision to life? Drop me a message and let's discuss how I can help you create exceptional digital experiences.
          </p>
        </div>

        {/* Contact Form */}
        <div className={`${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Card className="card-featured">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-[var(--color-neutral-900)]">Send me a message</CardTitle>
              <p className="text-[var(--color-neutral-600)]">I typically respond within 24 hours</p>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <legend className="sr-only">Contact Information</legend>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[var(--color-neutral-700)]">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 bg-[var(--color-input)] border-[var(--color-border)] focus:border-[var(--color-primary-blue)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                      placeholder="Your full name"
                      aria-describedby="name-error"
                      autoComplete="name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[var(--color-neutral-700)]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 bg-[var(--color-input)] border-[var(--color-border)] focus:border-[var(--color-primary-blue)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                      placeholder="your.email@example.com"
                      aria-describedby="email-error"
                      autoComplete="email"
                    />
                  </div>
                </fieldset>
                
                <fieldset className="space-y-6">
                  <legend className="sr-only">Message Details</legend>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[var(--color-neutral-700)]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-[var(--color-input)] border-[var(--color-border)] focus:border-[var(--color-primary-blue)] transition-colors duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                      placeholder="Tell me about your project, goals, timeline, or any questions you have..."
                      aria-describedby="message-error"
                    />
                  </div>
                </fieldset>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full h-12 group"
                  aria-describedby={isSubmitting ? "submit-status" : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      <span id="submit-status">Preparing Email...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                    </>
                  )}
                </Button>
                
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}