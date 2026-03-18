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
    description: "Back for its second year, the Young Founders School Gala celebrated the impact of its supporters and donors. With results from 2024 proving their growth, YFS now aims to raise $500,000 to expand across Southeast Asia, India, and Africa.",
    gallery: [
      { vimeoId: "1021479637", type: 'corporate' },
      { vimeoId: "1131310388", type: 'corporate' },
      { vimeoId: "1131305270", type: 'corporate' }
    ]
  },
  {
    slug: "green-chapter",
    vimeoId: "1131319086",
    title: "Little Explorers",
    client: "Green Chapter",
    category: "Corporate Strategy",
    year: "2024",
    description: "Green Chapter launches a new series of videos promoting their Little Explorers guided nature explorations and terrarium workshops. Ready to explore?",
    gallery: [
      { vimeoId: "1131319486", type: 'corporate' },
      { vimeoId: "1131319400", type: 'corporate' },
      { vimeoId: "1131319578", type: 'corporate' },
      { vimeoId: "1131320700", type: 'corporate' },
      { vimeoId: "1131320755", type: 'corporate' }
    ]
  },
  {
    slug: "enterprise-singapore",
    vimeoId: "1021466679",
    title: "Failure to Launch",
    client: "Enterprise Singapore",
    category: "Event Production",
    year: "2024",
    description: "A fictional short film of first time F&B Founder struggling to launch his new cafe. Highlighting the relatable struggles of the industry and the shame of failure to friends.",
    gallery: [
      { vimeoId: "1021468009", type: 'corporate' },
      { vimeoId: "1021466720", type: 'corporate' }
    ]
  },
  {
    slug: "accenture",
    vimeoId: "1021463357",
    title: "Be You, Lead the New",
    client: "Accenture",
    category: "Thought Leadership",
    year: "2024",
    description: "A recruitment series featuring the talents at Accenture Philippines and how their passions align with their careers. The series emphasizes the importance of employee branding in showcasing the unique contributions of each team member.",
    gallery: [
      { vimeoId: "1021463525", type: 'corporate' },
      { vimeoId: "1021463433", type: 'corporate' },
      { vimeoId: "1021463571", type: 'corporate' },
      { vimeoId: "1021463466", type: 'corporate' },
      { vimeoId: "1021463501", type: 'corporate' },
      { vimeoId: "1021463311", type: 'corporate' },
      { vimeoId: "1021463389", type: 'corporate' },
      { vimeoId: "1021463623", type: 'corporate' }
    ]
  },
  {
    slug: "uob-asset-management",
    vimeoId: "1021494730",
    title: "UOB Asset Management Corp",
    client: "UOB Asset Management",
    category: "Documentary",
    year: "2024",
    description: "A corporate video showcasing UOB Asset Management’s commitment to building a sustainable future by offering everyday investors access to the issues that matter most to them",
    gallery: [

    ]
  },
  {
    slug: "meltwater",
    vimeoId: "738471780",
    title: "Culture Day 2022",
    client: "Meltwater",
    category: "Finance & ESG",
    year: "2023",
    description: "A ground-level look into Meltwater’s leadership, teams, and internal culture, capturing authentic moments from their 2022 Culture Day event in a rustic and genuine way.",
    gallery: [
      { vimeoId: "1021486218", type: 'social' },
      { vimeoId: "1021485735", type: 'social' },
      { vimeoId: "1021485764", type: 'social' },
      { vimeoId: "1021485785", type: 'social' },
      { vimeoId: "1026056750", type: 'social' }
    ]
  },
  {
    slug: "3-degrees",
    vimeoId: "1021450871",
    title: "Charity Video",
    client: "3 Degrees",
    category: "NGO Spotlight",
    year: "2024",
    description: "A featured video about the ItsRainingRaincoats charity and their founders’ mission to support migrant workers in Singapore by bridging cultural gaps and fostering inclusivity within society.",
    gallery: [
      { vimeoId: "1020466051", type: 'social' },
      { vimeoId: "1026056303", type: 'social' },
      { vimeoId: "1026056187", type: 'social' },
      { vimeoId: "1026058372", type: 'social' },
      { vimeoId: "1026056384", type: 'social' },
      { vimeoId: "1026058040", type: 'social' },
      { vimeoId: "1026056750", type: 'social' }
    ]
  },
  {
    slug: "wealth-gps",
    vimeoId: "1131316789",
    title: "Gala 2025",
    client: "Wealth GPS",
    category: "FinTech Innovation",
    year: "2024",
    description: "Wealth GPs marks their 2025 Gala Awards with gratitude and growth—celebrating success, reflecting on their journey, and opening doors for those seeking a second chance.",
    gallery: [

    ]
  },
  {
    slug: "productivity-joy",
    vimeoId: "1131316295",
    title: "Book Launch",
    client: "Productivity Joy",
    category: "Enterprise Solutions",
    year: "2024",
    description: "Psychologist Simi Rayat debuts Productivity Joy, helping readers rediscover balance and joy in the rush of everyday life.",
    gallery: [

    ]
  },
  {
    slug: "land-transport-authority",
    vimeoId: "1021465916",
    title: "Active Mobility Bill",
    client: "Land Transport Authority",
    category: "Banking Roadmap",
    year: "2024",
    description: "LTA's Active Mobility Bill was introduced to provide safety guidelines for mobility devices and a healthier lifestyle.  ",
    gallery: [

    ]
  },
  {
    slug: "kaleoscopic-communications",
    vimeoId: "1021483669",
    title: "Kaleoscopic Communications - ANEXT Bank: Open For Business Podcast",
    client: "Kaleoscopic Communications",
    category: "Conservation",
    year: "2024",
    description: "Kaleidoscopic, presents a new podcast in collaboration with ANEXT Bank, spotlighting the untold stories of Singapore’s entrepreneurs — and the real ways ANEXT has helped them grow their businesses.",
    gallery: [
      { vimeoId: "1021483731", type: 'corporate' },
      { vimeoId: "1021483755", type: 'corporate' },
      { vimeoId: "1021483780", type: 'corporate' },
      { vimeoId: "1131313558", type: 'corporate' },
      { vimeoId: "1131313814", type: 'corporate' }
    ]
  },
  {
    slug: "nie",
    vimeoId: "1021466316",
    title: "Corporate Video",
    client: "NIE",
    category: "Energy & Infrastructure",
    year: "2024",
    description: "NIE is constantly evolving. It’s here that the educators of tomorrow learn to hone their craft, shaping and empowering the next generation of Singaporeans.",
    gallery: [

    ]
  },
  {
    slug: "ministry-of-manpower",
    vimeoId: "1021466066",
    title: "Work Place Appreciation",
    client: "Ministry of Manpower",
    category: "Media Evolution",
    year: "2024",
    description: "Inspired by true stories of Singaporeans at different life stages who faced retrenchment, and the MOM officers who helped them get back on their feet.",
    gallery: [

    ]
  },
  {
    slug: "workforce-singapore",
    vimeoId: "1021467300",
    title: "Job Redesign",
    client: "Workforce Singapore",
    category: "Hospitality & Travel",
    year: "2024",
    description: "A short film and case study project showcasing the challenges of retail and the real success stories behind Singaporean-led businesses.",
    gallery: [
      { vimeoId: "1021467097", type: 'corporate' },
      { vimeoId: "1021467186", type: 'corporate' },
      { vimeoId: "1021467300", type: 'corporate' }
    ]
  },
  {
    slug: "mentem",
    vimeoId: "1131318031",
    title: "Banpu Testimonial Video",
    client: "Mentem",
    category: "Industrial Development",
    year: "2024",
    description: "A testimonial from Banpu, a leading Thai energy company, highlighting how Mentem helped design and deliver management enablement training for their team",
    gallery: [

    ]
  }
];
