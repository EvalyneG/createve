'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, TrendingUp, Users, Clock, Target, CheckCircle, Zap } from 'lucide-react'
import { getFeaturedCaseStudies } from '../data/caseStudies'

interface CaseStudiesSectionProps {
  onViewCaseStudy: (caseStudyId: string) => void
  onViewAllProjects: () => void
}

export function CaseStudiesSection({ onViewCaseStudy, onViewAllProjects }: CaseStudiesSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const featuredCaseStudies = getFeaturedCaseStudies()

  // Transform case studies data to match component expectations
  const caseStudies = featuredCaseStudies.map((caseStudy, index) => {
    const ids = ['easyshift-moving-platform', 'mindful-mental-health-app', 'agripath-sustainable-agriculture']
    return {
      id: ids[index],
      title: caseStudy.title,
      description: caseStudy.overview,
      image: caseStudy.heroImage,
      category: caseStudy.category,
      year: caseStudy.year,
      duration: caseStudy.duration,
      stats: caseStudy.results.slice(0, 3).map((result, idx) => ({
        icon: idx === 0 ? TrendingUp : idx === 1 ? Users : CheckCircle,
        value: result.metric,
        label: result.description
      })),
      tags: caseStudy.solution.keyFeatures.slice(0, 3)
    }
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('work')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [caseStudies.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="work" className="section-padding bg-[var(--color-neutral-50)]">
      <div className="max-w-7xl mx-auto container-padding">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-[var(--color-neutral-900)] mb-4">Featured Case Studies</h2>
          <p className="lead max-w-3xl mx-auto mb-8">
            Explore my design process and impact through detailed case studies that showcase 
            problem-solving, user research, and measurable results.
          </p>
        </div>

        <div className={`relative ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Card className="card-featured overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
              {/* Image Section */}
              <div className="lg:col-span-7 relative overflow-hidden">
                <ImageWithFallback
                  src={caseStudies[currentIndex].image}
                  alt={caseStudies[currentIndex].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Navigation Arrows - Enhanced visibility */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 z-10 border border-white/20 shadow-lg"
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 z-10 border border-white/20 shadow-lg"
                  aria-label="Next case study"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-[var(--color-primary-blue)] text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                  {caseStudies[currentIndex].category}
                </div>

                {/* Project Meta */}
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <div className="flex items-center space-x-4 text-sm">
                    <span>{caseStudies[currentIndex].year}</span>
                    <span>•</span>
                    <span>{caseStudies[currentIndex].duration}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[var(--color-neutral-900)] mb-4">
                      {caseStudies[currentIndex].title}
                    </h3>
                    <p className="text-[var(--color-neutral-600)] leading-relaxed">
                      {caseStudies[currentIndex].description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudies[currentIndex].stats.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[var(--color-primary-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <stat.icon className="h-5 w-5 text-[var(--color-primary-blue)]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--color-neutral-900)]">{stat.value}</div>
                          <div className="text-sm text-[var(--color-neutral-500)]">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>



                  {/* CTA Button */}
                  <Button 
                    onClick={() => onViewCaseStudy(caseStudies[currentIndex].id)}
                    className="btn-primary group w-full"
                  >
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[var(--color-primary-blue)] w-8'
                    : 'bg-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-400)]'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={onViewAllProjects}
            className="btn-secondary group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  )
}