'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft, Clock, Users, TrendingUp, ExternalLink, CheckCircle, Target, Lightbulb, Zap } from 'lucide-react'
import { getCaseStudy } from '../data/caseStudies'

interface CaseStudyPageProps {
  caseStudyId: string
  onBack: () => void
  onViewAllProjects: () => void
  onNavigateToContact: () => void
}

export function CaseStudyPage({ caseStudyId, onBack, onViewAllProjects, onNavigateToContact }: CaseStudyPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const caseStudy = getCaseStudy(caseStudyId)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [caseStudyId])

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Case Study Not Found</h2>
          <Button onClick={onBack} className="btn-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <header className="sticky top-16 z-40">
        <div className="max-w-7xl mx-auto container-padding py-4">
          <Button
            onClick={onViewAllProjects}
            variant="ghost"
            className="mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Projects
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-4 pb-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-[var(--color-primary-blue)]/10 text-[var(--color-primary-blue)] px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>{caseStudy.category}</span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-4">{caseStudy.title}</h1>
            <p className="lead max-w-3xl mx-auto mb-8">{caseStudy.subtitle}</p>
            
            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[var(--color-neutral-600)]">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{caseStudy.role}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>{caseStudy.year}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative rounded-3xl overflow-hidden shadow-[var(--shadow-2xl)] ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <ImageWithFallback
              src={caseStudy.heroImage}
              alt={`${caseStudy.title} hero image`}
              className="w-full h-[60vh] object-contain bg-[var(--color-neutral-50)]"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto container-padding space-y-16 pb-20">
        {/* Overview */}
        <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Card className="card-modern p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-primary-blue)]/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-[var(--color-primary-blue)]" />
              </div>
              <h3 className="text-[20px] font-bold">Project Overview</h3>
            </div>
            <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">{caseStudy.overview}</p>
            <div>
              <h4 className="font-semibold text-[var(--color-neutral-800)] mb-2">My Role</h4>
              <p className="text-[var(--color-neutral-600)]">{caseStudy.role}</p>
            </div>
          </Card>
        </section>

        {/* Problem */}
        <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Card className="card-modern p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-accent-orange)]/10 rounded-lg flex items-center justify-center">
                <ExternalLink className="h-5 w-5 text-[var(--color-accent-orange)]" />
              </div>
              <h3 className="font-bold text-[20px]">{caseStudy.problem.title}</h3>
            </div>
            <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">{caseStudy.problem.description}</p>
            <div>
              <h4 className="font-semibold text-[var(--color-neutral-800)] mb-4">Key Pain Points</h4>
              <ul className="space-y-3">
                {caseStudy.problem.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-accent-orange)] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--color-neutral-600)]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Solution */}
        <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <Card className="card-modern p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-[20px] font-bold">{caseStudy.solution.title}</h3>
            </div>
            <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">{caseStudy.solution.description}</p>
            <div>
              <h4 className="font-semibold text-[var(--color-neutral-800)] mb-4">Key Features</h4>
              <ul className="space-y-3">
                {caseStudy.solution.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-neutral-600)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Process */}
        <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <div className="mb-8">
            <h3 className="text-center text-[var(--color-neutral-900)] mb-4 text-[20px] font-bold">Design Process</h3>
            <p className="text-center text-[var(--color-neutral-600)] max-w-2xl mx-auto">
              A structured approach to solving complex design challenges through research, ideation, and iteration.
            </p>
          </div>
          <div className="space-y-8">
            {caseStudy.process.map((phase, index) => (
              <Card key={index} className="card-modern p-6">
                <div className="space-y-6">
                  {/* Phase Header */}
                  <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[var(--color-primary-blue)]/10 rounded-lg flex items-center justify-center">
                        <span className="text-[var(--color-primary-blue)] font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="font-semibold text-[var(--color-neutral-800)]">{phase.phase}</h4>
                        <span className="text-sm text-[var(--color-neutral-500)] mt-1 md:mt-0">{phase.duration}</span>
                      </div>
                      <p className="text-[var(--color-neutral-600)] mb-4">{phase.description}</p>
                      <div>
                        <h5 className="font-medium text-[var(--color-neutral-700)] mb-2">Deliverables:</h5>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <span key={idx} className="bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] px-3 py-1 rounded-full text-sm">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Card className="card-modern p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-[20px] font-bold">Results & Impact</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[var(--color-primary-blue)] mb-2">{result.metric}</div>
                  <div className="text-sm text-[var(--color-neutral-600)]">{result.description}</div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-neutral-800)] mb-4">Key Learnings</h4>
              <ul className="space-y-3">
                {caseStudy.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--color-primary-blue)] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--color-neutral-600)]">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Additional Images */}
        <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
                <ImageWithFallback
                  src={image}
                  alt={`${caseStudy.title} design ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <section className="bg-[var(--color-neutral-50)] py-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h3 className="text-[var(--color-neutral-900)] mb-4">Interested in working together?</h3>
          <p className="text-[var(--color-neutral-600)] mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create meaningful digital experiences. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onNavigateToContact}
              className="btn-primary"
            >
              Get In Touch
            </Button>
            <Button onClick={onViewAllProjects} className="btn-secondary">
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}