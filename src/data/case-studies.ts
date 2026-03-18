export interface CaseStudy {
  slug: string;
  vimeoId: string;
  title: string;
  client: string;
  category: string;
  description: string;
  year: string;
  gallery: { vimeoId: string; type: 'corporate' | 'social' }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "young-founders-school",
    vimeoId: "1131310388",
    title: "Gala 2025",
    client: "Young Founders School",
    category: "Corporate Branding",
    year: "2025",
    description: "A comprehensive brand film capturing the future-oriented vision of Singapore's enterprise landscape, designed to inspire stakeholders and communicate strategic roadmaps.",
    gallery: [
      { vimeoId: "1020466051", type: 'social' },
      { vimeoId: "1026056505", type: 'social' }
    ]
  },
  {
    slug: "green-chapter",
    vimeoId: "1131319086",
    title: "Little Explorers",
    client: "Green Chapter",
    category: "Corporate Strategy",
    year: "2024",
    description: "High-end corporate narrative showcasing the power of collaborative innovation and strategic alignment in the global consulting space.",
    gallery: [
      { vimeoId: "1021485785", type: 'social' },
      { vimeoId: "1021486218", type: 'social' }
    ]
  },
  {
    slug: "enterprise-singapore",
    vimeoId: "1021466679",
    title: "Failure to Launch",
    client: "Enterprise Singapore",
    category: "Event Production",
    year: "2024",
    description: "Dynamic event coverage that captures the energy, key themes, and breakthrough moments of one of Asia's premier technology gatherings.",
    gallery: [
      { vimeoId: "1026056187", type: 'social' },
      { vimeoId: "1026056303", type: 'social' }
    ]
  },
  {
    slug: "accenture",
    vimeoId: "1021463357",
    title: "Be You, Lead the New",
    client: "Accenture",
    category: "Thought Leadership",
    year: "2024",
    description: "Authentic founder and executive profiles that humanize the brand and articulate complex SaaS value propositions through personal storytelling.",
    gallery: [
      { vimeoId: "1021485735", type: 'social' },
      { vimeoId: "1026056396", type: 'social' }
    ]
  },
  {
    slug: "uob-asset-management",
    vimeoId: "1021494730",
    title: "UOB Asset Management Corp",
    client: "UOB Asset Management",
    category: "Documentary",
    year: "2024",
    description: "A deeply personal look into the origin story and mission of 3 Degrees, bridging the gap between corporate goals and human passion.",
    gallery: [
      { vimeoId: "1020466051", type: 'social' },
      { vimeoId: "1021486218", type: 'social' }
    ]
  },
  {
    slug: "meltwater",
    vimeoId: "738471780",
    title: "Culture Day 2022",
    client: "Meltwater",
    category: "Finance & ESG",
    year: "2023",
    description: "Visualizing the impact of sustainable investing and ESG initiatives through compelling B2B storytelling and data-driven narratives.",
    gallery: [
      { vimeoId: "1131310388", type: 'corporate' },
      { vimeoId: "1131319086", type: 'corporate' }
    ]
  },
  {
    slug: "3-degrees",
    vimeoId: "1021450871",
    title: "Charity Video",
    client: "3 Degrees",
    category: "NGO Spotlight",
    year: "2024",
    description: "Shedding light on the next generation of changemakers, this case study explores the social fabric and drive behind Young Founders' initiatives.",
    gallery: [
      { vimeoId: "1026056505", type: 'social' },
      { vimeoId: "1026056303", type: 'social' }
    ]
  },
  {
    slug: "wealth-gps",
    vimeoId: "1131316789",
    title: "Gala 2025",
    client: "Wealth GPS",
    category: "FinTech Innovation",
    year: "2024",
    description: "Communicating the complex journey of digital evolution in banking, making technological progress relatable and visionary.",
    gallery: [
      { vimeoId: "1021466679", type: 'corporate' },
      { vimeoId: "1021463357", type: 'corporate' }
    ]
  },
  {
    slug: "productivity-joy",
    vimeoId: "1131316295",
    title: "Book Launch",
    client: "Productivity Joy",
    category: "Enterprise Solutions",
    year: "2024",
    description: "Showcasing Singtel's commitment to seamless connectivity and enterprise excellence across the Asian market.",
    gallery: [
      { vimeoId: "1021485785", type: 'social' },
      { vimeoId: "1021494730", type: 'corporate' }
    ]
  },
  {
    slug: "land-transport-authority",
    vimeoId: "1021465916",
    title: "Active Mobility Bill",
    client: "Land Transport Authority",
    category: "Banking Roadmap",
    year: "2024",
    description: "Visualizing the landscape of modern banking and the digital-first approach that defines DBS's leadership in Singapore.",
    gallery: [
      { vimeoId: "738471780", type: 'corporate' },
      { vimeoId: "1021450871", type: 'corporate' }
    ]
  },
  {
    slug: "kaleoscopic-communications",
    vimeoId: "1021483669",
    title: "Open for Business Podcast",
    client: "Kaleoscopic Communications",
    category: "Conservation",
    year: "2024",
    description: "Emotional and strategic visual content aimed at driving awareness and action for conservation efforts in the region.",
    gallery: [
      { vimeoId: "1026056187", type: 'social' },
      { vimeoId: "1026056396", type: 'social' }
    ]
  },
  {
    slug: "nie",
    vimeoId: "1021466316",
    title: "Corporate Video",
    client: "NIE",
    category: "Energy & Infrastructure",
    year: "2024",
    description: "A testament to industrial strength and strategic growth, highlighting Sembcorp's pivotal role in Singapore's infrastructure.",
    gallery: [
      { vimeoId: "1131318031", type: 'corporate' },
      { vimeoId: "1131316789", type: 'corporate' }
    ]
  },
  {
    slug: "ministry-of-manpower",
    vimeoId: "1021466066",
    title: "Work Place Appreciation",
    client: "Ministry of Manpower",
    category: "Media Evolution",
    year: "2024",
    description: "Exploring the future of content consumption and Mediacorp's evolution into a multi-platform media powerhouse.",
    gallery: [
      { vimeoId: "1131316295", type: 'corporate' },
      { vimeoId: "1021465916", type: 'corporate' }
    ]
  },
  {
    slug: "workforce-singapore",
    vimeoId: "1021467300",
    title: "Job Redesign",
    client: "Workforce Singapore",
    category: "Hospitality & Travel",
    year: "2024",
    description: "Capturing the world-class service and global connectivity that makes Singapore Airlines a symbol of national pride and excellence.",
    gallery: [
      { vimeoId: "1021483669", type: 'corporate' },
      { vimeoId: "1021466316", type: 'corporate' }
    ]
  },
  {
    slug: "mentem",
    vimeoId: "1131318031",
    title: "Banpu Testimonial Video",
    client: "Mentem",
    category: "Industrial Development",
    year: "2024",
    description: "Showcasing JTC's transformative impact on Singapore's industrial landscape and its nurturing of future-forward innovation hubs.",
    gallery: [
      { vimeoId: "1021466066", type: 'corporate' },
      { vimeoId: "1021467300", type: 'corporate' }
    ]
  }
];
