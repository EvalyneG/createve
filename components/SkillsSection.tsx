'use client'

import { useRef, useEffect, useState } from 'react'
import { Badge } from './ui/badge'

const allSkills = [
  'UX Research', 'UI Design', 'Prototyping', 'Design Systems',
  'Figma', 'Adobe XD', 'HTML/CSS',
  'Webflow', 'Information Architecture',
  'Wireframing', 'Visual Design', 'Interaction Design', 'Responsive Design'
]

export function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      
      e.preventDefault()
      scrollContainer.scrollLeft += e.deltaY
    }

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section id="skills" className="section-padding container-padding bg-gradient-to-br from-[var(--color-neutral-50)] to-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-[var(--color-neutral-900)] mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="lead max-w-3xl mx-auto">
            A comprehensive toolkit built through years of creating meaningful digital experiences
          </p>
        </div>

        {/* All Skills Scroll */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h3 className="text-center text-xl font-semibold text-[var(--color-neutral-900)] mb-8">
            Complete Skill Set
          </h3>
          
          <div 
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="region"
            aria-label="Skills list"
            tabIndex={0}
          >
            {allSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`whitespace-nowrap px-4 py-2 text-sm bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-neutral-700)] hover:bg-gradient-to-r hover:from-[var(--color-primary-blue)] hover:to-[var(--color-secondary-blue)] hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-default shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)] ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{
                  animationDelay: `${0.4 + (index * 0.05)}s`
                }}
                tabIndex={0}
                role="listitem"
                aria-label={`Skill: ${skill}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-[var(--color-neutral-500)]" aria-live="polite">
              ← Scroll horizontally to explore all skills →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}