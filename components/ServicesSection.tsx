'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Monitor, Smartphone, Code } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    subtitle: 'User-Centered Web Experiences',
    description: 'Creating beautiful, conversion-focused websites that deliver seamless user experiences and drive measurable business results.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    subtitle: 'Native & Cross-Platform Apps',
    description: 'Designing intuitive mobile applications from concept to polished interfaces that solve real problems and create lasting value.'
  },
  {
    icon: Code,
    title: 'Webflow Development',
    subtitle: 'Pixel-Perfect Implementation',
    description: 'Bringing designs to life with custom Webflow development, ensuring pixel-perfect implementation and exceptional performance.'
  }
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('services')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            What I Do
          </h2>
          <p className="lead max-w-3xl mx-auto">
            Comprehensive design services to transform your ideas into exceptional digital experiences that users love and businesses thrive on
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-responsive">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredCard === index
            
            return (
              <div
                key={service.title}
                className={`${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onFocus={() => setHoveredCard(index)}
                onBlur={() => setHoveredCard(null)}
                tabIndex={0}
                role="button"
                aria-expanded={isHovered}
                aria-describedby={`service-description-${index}`}
              >
                <Card className={`h-full card-modern transition-all duration-500 relative overflow-hidden ${
                  isHovered ? 'hover-glow shadow-[var(--shadow-xl)]' : 'shadow-[var(--shadow-sm)]'
                }`}>
                  <CardHeader className="text-center pb-6">
                    {/* Icon */}
                    <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isHovered 
                        ? 'bg-black/20 scale-110 shadow-[var(--shadow-lg)]' 
                        : 'bg-[var(--color-neutral-100)]'
                    }`}>
                      <IconComponent className={`h-10 w-10 transition-all duration-500 ${
                        isHovered ? 'text-white scale-110' : 'text-[var(--color-primary-blue)]'
                      }`} />
                    </div>
                    
                    {/* Title & Subtitle */}
                    <CardTitle className="text-xl text-[var(--color-neutral-900)] mb-2 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      isHovered ? 'text-[var(--color-primary-blue)]' : 'text-[var(--color-neutral-500)]'
                    }`}>
                      {service.subtitle}
                    </p>
                  </CardHeader>
                  
                  {/* Hover Description Overlay */}
                  <div 
                    className={`absolute inset-x-0 bottom-0 bg-black/80 text-white p-6 transform transition-all duration-500 ease-in-out ${
                      isHovered 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    <CardDescription 
                      id={`service-description-${index}`}
                      className="text-white leading-relaxed text-sm"
                    >
                      {service.description}
                    </CardDescription>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}