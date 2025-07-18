import agripathCoverImage from 'figma:asset/4ae0f2f76464f80ade2a8cb664e8ff2abc4b8049.png';

export interface CaseStudyResult {
  metric: string
  description: string
}

export interface CaseStudyProcess {
  phase: string
  duration: string
  description: string
  deliverables: string[]
  diagramImage: string
}

export interface CaseStudyProblem {
  title: string
  description: string
  painPoints: string[]
}

export interface CaseStudySolution {
  title: string
  description: string
  keyFeatures: string[]
}

export interface CaseStudy {
  title: string
  subtitle: string
  category: string
  year: string
  duration: string
  role: string
  heroImage: string
  overview: string
  problem: CaseStudyProblem
  solution: CaseStudySolution
  process: CaseStudyProcess[]
  results: CaseStudyResult[]
  learnings: string[]
  images: string[]
}

export const caseStudiesData: Record<string, CaseStudy> = {
  'easyshift-moving-platform': {
    title: 'EasyShift – Simplifying the Stress of Moving in Kenya',
    subtitle: 'A smoother way to shift',
    category: 'Web Platform Design',
    year: '2024',
    duration: '1.5 months',
    role: 'Lead UX/UI Designer',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    overview: 'Moving houses or offices in Kenya often comes with guesswork, back-and-forth calls, and price shocks. My friends and I had experienced this more than once — the confusion, the hidden costs, and the silence after follow-ups. So we thought: why not design something better? EasyShift was born — a platform where users can calculate their moving costs upfront, choose their relocation services, and book with clarity and confidence.',
    problem: {
      title: 'The Challenge',
      description: 'Through personal experiences and informal interviews, we noticed a pattern of frustration and confusion in the moving process across Kenya.',
      painPoints: [
        'Hard to get prices upfront — users had to hop between phone calls, WhatsApp messages, or unreliable online listings',
        'Many users weren\'t sure what services they were entitled to — was packing included? Assembly? Storage?',
        'Trust was low. Communication felt scattered, and last-minute changes left users frustrated and stranded'
      ]
    },
    solution: {
      title: 'The Solution',
      description: 'EasyShift brings clarity, structure, and control to the relocation process. With a simple cost calculator based on location, house size, and service type, users get a clear estimate within seconds. Beyond pricing, the platform offers tailored packages — from full moves to furniture assembly, fragile handling, and short-term storage. We wanted to make it as easy as calling a friend, only better.',
      keyFeatures: [
        'Instant cost calculator based on location and house size',
        'Transparent service packages with clear inclusions',
        'Tailored options for different moving needs',
        'Upfront pricing with no hidden costs',
        'Streamlined booking and communication system'
      ]
    },
    process: [
      {
        phase: 'Research & Discovery',
        duration: '1.5 weeks',
        description: 'We began with firsthand accounts and informal chats with frequent movers in Nairobi. We listened for the pain — confusion, mistrust, and constant surprises.',
        deliverables: ['User interviews', 'Pain point analysis', 'Market research', 'Competitive analysis'],
        diagramImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Ideation',
        duration: '1 week',
        description: 'We sketched and whiteboarded. What if moving felt more like shopping for Uber rides? Could we show prices before booking? Could the site guide users to exactly what they need?',
        deliverables: ['Concept sketches', 'User flow diagrams', 'Feature prioritization', 'Service architecture'],
        diagramImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Design & Prototyping',
        duration: '2 weeks',
        description: 'Using Figma, I designed a lightweight and mobile-first experience. From the homepage to the cost calculator, everything was built with clarity in mind.',
        deliverables: ['Mobile-first designs', 'Cost calculator interface', 'Service selection flow', 'Interactive prototype'],
        diagramImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Testing & Iteration',
        duration: '1 week',
        description: 'We tested our prototype with users who had moved in the last 3 months — their feedback sharpened the flow and language.',
        deliverables: ['User testing sessions', 'Feedback analysis', 'Design iterations', 'Final prototype'],
        diagramImage: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      }
    ],
    results: [
      { metric: '4/5', description: 'Users would "definitely" use the platform' },
      { metric: '100%', description: 'Pricing transparency appreciation' },
      { metric: '95%', description: 'Found service clarity helpful' },
      { metric: 'High', description: 'Interest from logistics startups' }
    ],
    learnings: [
      'Pricing transparency was the most valued feature among potential users',
      'The storytelling angle ("we went through this too") made the interface feel more human and trustworthy',
      'Mobile-first design was crucial for the Kenyan market context',
      'Clear service descriptions eliminated most user confusion',
      'The concept sparked real conversations with logistics startups looking to digitize their process'
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'mindful-mental-health-app': {
    title: 'Mindful – A Mental Health Mobile App',
    subtitle: 'Designing safe, personalized mental health support for real people with real needs',
    category: 'Mobile App Design',
    year: '2024',
    duration: '4 months',
    role: 'Lead UX/UI Designer',
    heroImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    overview: 'Mental health is deeply personal — yet most digital solutions still feel one-size-fits-all. With Mindful, I set out to design an app that adapts to the user rather than the other way around. From personalized onboarding to anonymous group sessions and AI-powered support, Mindful meets users where they are, how they prefer, and at their pace.',
    problem: {
      title: 'The Challenge',
      description: 'Many mental health apps offer helpful tools, but often lack personalization and emotional sensitivity. Through research and observation, we identified critical gaps in existing solutions.',
      painPoints: [
        'Users often abandon apps that don\'t reflect their preferred modes of support (e.g. some prefer music, others prefer conversation)',
        'Most platforms treat therapy as transactional, not relational',
        'There\'s little room for anonymity; users have a stigma threat',
        'Group sessions rarely match people based on shared challenges or familiarity',
        'Access to help is lost when offline, a major gap in data-sensitive regions like Kenya'
      ]
    },
    solution: {
      title: 'The Solution',
      description: 'Mindful offers a tailored mental health experience from the very first tap, adapting to user preferences and needs while maintaining privacy and accessibility.',
      keyFeatures: [
        'Personalized onboarding flow based on emotional goals and support preferences',
        'Adaptive personalization that refines with user engagement',
        'Professional group therapy sessions based on shared needs and familiar faces',
        'Therapist matching flow with recommendations based on group history or peer referrals',
        'User anonymity through chosen usernames',
        'Offline access to key resources like downloaded music, exercises, and journal entries'
      ]
    },
    process: [
      {
        phase: 'Research & Discovery',
        duration: '1.5 weeks',
        description: 'I interviewed users who had tried mental health apps but stopped using them. I also read reviews of existing solutions and studied behavior patterns across digital wellness tools.',
        deliverables: ['User interviews', 'App abandonment analysis', 'Behavioral patterns study', 'Mental health expert consultations'],
        diagramImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Ideation',
        duration: '1 weeks',
        description: 'Key questions guided the ideation phase: "What would make someone feel safe enough to come back again?" "How do we build trust, choice, and empathy into every step?" I mapped out various user types from the quiet listener to the socially anxious to the affirmation-seeker.',
        deliverables: ['User type mapping', 'Safety-first design principles', 'Trust-building strategies', 'Empathy framework'],
        diagramImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Design & Prototyping',
        duration: '1.5 weeks',
        description: 'I designed a warm, human-centered interface using a soft color palette (sage, sand, coral) and intuitive UX flows. Features like AI tone selection, customizable dashboards, and therapist referral flows were prototyped and tested.',
        deliverables: ['Warm color palette design system', 'Personalized onboarding flow', 'Anonymous group session interface', 'Offline resource architecture'],
        diagramImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Testing & Validation',
        duration: '1 week',
        description: 'Conducted sensitive user testing with individuals who had mental health app experience, focusing on safety, comfort, and feature preferences.',
        deliverables: ['Sensitivity-focused user testing', 'Anonymity validation', 'Feature preference analysis', 'Safety protocol validation'],
        diagramImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      }
    ],
    results: [
      { metric: '92%', description: 'Preferred familiar faces in group sessions' },
      { metric: 'High', description: 'Value placed on anonymity features' },
      { metric: 'Essential', description: 'Offline access importance rating' },
      { metric: '85%', description: 'Felt safer with personalized approach' }
    ],
    learnings: [
      'Anonymity and privacy were fundamental requirements, not optional features',
      'Users strongly preferred group sessions with familiar faces over random matching',
      'Offline access was crucial for users in regions with limited or unstable connectivity',
      'Personalization from the first interaction built trust and encouraged return usage',
      'The warm, human-centered design language reduced anxiety and promoted comfort',
      'Therapist referrals based on peer recommendations were more trusted than algorithmic matches'
    ],
    images: [
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'agripath-sustainable-agriculture': {
    title: 'AgriPath – Bridging Sustainable Agriculture and Digital Access',
    subtitle: 'Bringing AgriPath\'s global mission to life through an intuitive, informative, and accessible web experience',
    category: 'Webflow Development',
    year: '2023',
    duration: '4 months',
    role: 'Lead UX Designer & Webflow Developer',
    heroImage: agripathCoverImage,
    overview: 'AgriPath is an international initiative dedicated to advancing sustainable agriculture by scaling digital advisory services across the globe. To support this mission, they needed a central platform where partners, stakeholders, and the wider public could easily access insights, upcoming events, and research-driven blogs. I was brought in as the Webflow developer to translate their content and vision into a responsive, dynamic website that clearly communicates their impact and makes their resources easy to explore.',
    problem: {
      title: 'The Challenge',
      description: 'AgriPath\'s growing library of insights, blog articles, and event updates needed a digital home that felt both structured and inviting. Before this, they had no centralized online platform to host and categorize this content — which limited how accessible and actionable their knowledge truly was.',
      painPoints: [
        'No centralized online platform to showcase their extensive research and insights',
        'Content scattered across different platforms made it difficult for stakeholders to find relevant resources',
        'Needed a site that could reflect their credibility and international presence',
        'Required easy content management without heavy technical input',
        'Lacked a structured way to organize blogs, events, and research insights'
      ]
    },
    solution: {
      title: 'The Solution',
      description: 'I developed a fully responsive website using Webflow, with a clean and scalable content structure that showcases AgriPath\'s work while making exploration seamless. Each page was crafted to maintain visual consistency while allowing flexibility for future updates.',
      keyFeatures: [
        'Dynamic content systems (CMS collections) for blogs, events, and research insights',
        'Clear navigation and minimal design with subtle interactions',
        'Responsive design optimized for all devices',
        'Easy content management system for non-technical team members',
        'Structured categorization of resources for better discoverability',
        'Professional design reflecting international credibility'
      ]
    },
    process: [
      {
        phase: 'Design & Visual Identity',
        duration: '3 weeks',
        description: 'The designer created a design system that reflects AgriPath\'s professional, international presence while maintaining warmth and accessibility. Focused on clear typography and intuitive navigation.',
        deliverables: ['Design system', 'Visual identity guidelines', 'Page templates', 'Component library'],
        diagramImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Webflow Development',
        duration: '8 weeks',
        description: 'Built the responsive website in Webflow, implementing dynamic CMS collections for blogs, events, and insights. Created custom interactions and ensured optimal performance across all devices.',
        deliverables: ['Responsive Webflow build', 'CMS collections setup', 'Custom interactions', 'Performance optimization'],
        diagramImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Testing & Training',
        duration: '2 weeks',
        description: 'Conducted thorough testing across devices and browsers, then trained the AgriPath team on content management. Ensured they could easily update and maintain the site independently.',
        deliverables: ['Cross-browser testing', 'Content management training', 'Documentation', 'Launch support'],
        diagramImage: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      }
    ],
    results: [
      { metric: '100%', description: 'Successful launch with zero technical issues' },
      { metric: '300%', description: 'Increase in content discoverability' },
      { metric: 'Zero', description: 'Technical friction for content updates' },
      { metric: 'Global', description: 'Reach for stakeholder engagement' }
    ],
    learnings: [
      'A well-structured CMS is crucial for organizations with rapidly growing content libraries',
      'Clear information architecture significantly improved how users discover and consume content',
      'Training non-technical team members on content management reduces long-term maintenance costs',
      'Responsive design was essential for reaching global stakeholders across different devices',
      'The platform became a central hub that enhanced AgriPath\'s credibility and professional presence',
      'Simple, clean design allowed the content and mission to take center stage'
    ],
    images: [
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'standard-chartered-banking-redesign': {
    title: 'Standard Chartered Digital Mobile Banking Redesign',
    subtitle: 'Simplifying a legacy banking experience by addressing usability pain points, reducing friction, and restoring user trust',
    category: 'Mobile App Design',
    year: '2023',
    duration: '6 months',
    role: 'UX Designer',
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    overview: 'Standard Chartered Bank is a well-established institution, but its digital platforms present several usability challenges from cluttered layouts and inconsistent UI to complex user flows that can leave users feeling overwhelmed. This redesign initiative began with one goal in mind: to transform the digital experience into one that feels intuitive, focused, and empowering for everyday users. By identifying key frustration points, I aimed to streamline the interface, clarify navigation, and prioritize user needs all while maintaining the brand\'s credibility and professionalism.',
    problem: {
      title: 'Challenge and Pain Points',
      description: 'Despite being a trusted and established bank, Standard Chartered\'s digital mobile banking experience struggles to meet modern user expectations. The current state presents several critical usability challenges that impact user satisfaction and trust.',
      painPoints: [
        'Cluttered interfaces that overwhelm users with too many options and poor visual hierarchy',
        'Inconsistent UI patterns across different sections of the app create confusion',
        'Complex user flows that make simple tasks unnecessarily complicated',
        'Poor navigation structure that makes it difficult to find key banking functions',
        'Lack of personalization and modern user experience expectations'
      ]
    },
    solution: {
      title: 'The Solution',
      description: 'Currently in progress - developing a comprehensive redesign approach that focuses on simplifying the user experience while maintaining security and functionality that users expect from a trusted banking institution.',
      keyFeatures: [
        'Streamlined interface design with clear visual hierarchy',
        'Consistent UI patterns and design system implementation',
        'Simplified user flows for common banking tasks',
        'Improved navigation structure and information architecture',
        'Enhanced personalization and modern UX patterns'
      ]
    },
    process: [
      {
        phase: 'Research & Discovery',
        duration: 'In Progress',
        description: 'Currently conducting comprehensive analysis of existing user flows, pain points, and conducting user research to understand current user behavior and frustrations with the existing app.',
        deliverables: ['User research analysis', 'Current state assessment', 'Pain point identification', 'Competitive analysis'],
        diagramImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Design Strategy',
        duration: 'In Progress',
        description: 'Developing design principles and strategy that will guide the redesign process, focusing on user-centered design while maintaining banking security standards.',
        deliverables: ['Design principles', 'Information architecture', 'User journey mapping', 'Design system planning'],
        diagramImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Design & Prototyping',
        duration: 'Upcoming',
        description: 'Will create comprehensive designs that address identified pain points while ensuring security and compliance with banking regulations.',
        deliverables: ['Design system', 'High-fidelity mockups', 'Interactive prototypes', 'Mobile responsive designs'],
        diagramImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      },
      {
        phase: 'Testing & Validation',
        duration: 'Upcoming',
        description: 'Will conduct comprehensive testing to ensure the redesigned experience meets user needs and maintains the security standards expected of a banking application.',
        deliverables: ['Usability testing', 'Security compliance validation', 'Design iterations', 'Implementation guidelines'],
        diagramImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
      }
    ],
    results: [
      { metric: 'In Progress', description: 'Challenge analysis and pain point identification' },
      { metric: 'In Progress', description: 'Solution design and prototyping' },
      { metric: 'In Progress', description: 'User testing and validation' },
      { metric: 'Upcoming', description: 'Final results and impact measurement' }
    ],
    learnings: [
      'Project currently in progress - learnings will be documented as the redesign process continues',
      'Initial insights show the importance of balancing security with user experience in banking applications',
      'Legacy system constraints require careful consideration during the redesign process',
      'User trust is paramount in banking applications and must be maintained throughout the redesign'
    ],
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  }
}

export const getCaseStudy = (id: string): CaseStudy | null => {
  return caseStudiesData[id] || null
}

export const getAllCaseStudyIds = (): string[] => {
  return Object.keys(caseStudiesData)
}

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  // Return the first 3 case studies as featured (EasyShift, Mindful, AgriPath)
  return Object.values(caseStudiesData).slice(0, 3)
}