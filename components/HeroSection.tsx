'use client'

import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { ArrowRight, Download, MapPin, Coffee } from 'lucide-react'
import { useEffect, useState } from 'react'
import evalyneImage from 'figma:asset/601b2305f9b68fc6fe2a4c4857cb33552fa195a5.png'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 section-padding container-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary-blue)]/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent-orange)]/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge */}
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--color-accent-orange)]/10 to-[var(--color-primary-blue)]/10 border border-[var(--color-accent-orange)]/20 rounded-full px-4 py-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--color-neutral-600)]">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h1 className="text-[var(--color-neutral-900)] leading-tight">
                I turn user problems into{' '}
                <span className="gradient-text">purposeful</span>{' '}
                digital experiences
              </h1>
              
              <p className="lead max-w-2xl">
                Product Designer passionate about creating meaningful digital solutions that solve real user problems through thoughtful research, intuitive design, and strategic thinking.
              </p>
            </div>


            
            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={scrollToWork}
                className="btn-primary group"
                aria-label="View my work portfolio"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                className="btn-secondary group"
                aria-label="Get in touch for collaboration"
              >
                Let's Collaborate
                <Coffee className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
              </Button>
            </div>

            {/* Quick Info */}
            <div className={`flex items-center space-x-6 pt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-2 text-[var(--color-neutral-500)]">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
              <div className="w-1 h-1 bg-[var(--color-neutral-300)] rounded-full" />
              <div className="text-sm text-[var(--color-neutral-500)]">Remote Available</div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-blue)] via-[var(--color-secondary-blue)] to-[var(--color-accent-orange)] rounded-3xl rotate-6 hover:rotate-3 transition-transform duration-500" />
                
                {/* Image Container */}
                <div className="absolute inset-2 bg-[var(--color-card)] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                  <ImageWithFallback
                    src={evalyneImage}
                    alt="Evalyne Gachoka - Product Designer wearing a navy blue sweater and glasses, smiling at the camera with arms crossed"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--color-accent-orange)] rounded-2xl flex items-center justify-center shadow-[var(--shadow-xl)] animate-float">
                  <span className="text-2xl" role="img" aria-label="artist palette">🎨</span>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-[var(--color-primary-blue)] rounded-2xl flex items-center justify-center shadow-[var(--shadow-xl)] animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-xl" role="img" aria-label="sparkles">✨</span>
                </div>
                
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl flex items-center justify-center shadow-[var(--shadow-lg)] animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-lg" role="img" aria-label="lightbulb">💡</span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--color-card)] rounded-2xl shadow-[var(--shadow-xl)] px-6 py-3 border border-[var(--color-border)]">
                <div className="text-center">
                  <div className="text-sm font-semibold text-[var(--color-neutral-900)]">2+ Years</div>
                  <div className="text-xs text-[var(--color-neutral-500)]">Design Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}