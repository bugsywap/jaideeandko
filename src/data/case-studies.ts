export interface CaseStudy {
  slug: string;
  vimeoId: string;
  title: string;
  client: string;
  category: string;
  description: string;
  year: string;
  gallery: { vimeoId: string; type: 'corporate' | 'social'; title: string; description: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aia-recruitment-event-2026",
    vimeoId: "1178920781",
    title: "AIA Recruitment Event 2026",
    client: "AIA",
    category: "Event Coverage",
    year: "2026",
    description: "We partnered with AIA to capture the energy and ambition behind their 2026 Recruitment Event, bringing to life the people, purpose, and opportunities that define the brand.",
    gallery: []
  },
  {
    slug: "young-founders-school",
    vimeoId: "1131310388",
    title: "Gala 2025",
    client: "Young Founders School",
    category: "Corporate Event",
    year: "2025",
    description: "Back for its second year, the Young Founders School Gala celebrated the impact of its supporters and donors. With results from 2024 proving their growth, YFS now aims to raise $500,000 to expand across Southeast Asia, India, and Africa.",
    gallery: [
      { vimeoId: "1021479637", type: 'corporate', title: "Social Teaser", description: "A quick reel highlighting the electric energy of the YFS entrepreneurship program." },
      { vimeoId: "1131310388", type: 'corporate', title: "Gala 2025 Highlight", description: "A celebration of stakeholders, supporters, and donors at the second annual gala." },
      { vimeoId: "1131305270", type: 'corporate', title: "SG120 Pitch", description: "Student finalists envision the innovative future of Singapore at SG120." }
    ]
  },
  {
    slug: "green-chapter",
    vimeoId: "1131319086",
    title: "Little Explorers",
    client: "Green Chapter",
    category: "Founder’s Story",
    year: "2024",
    description: "Green Chapter launches a new series of videos promoting their Little Explorers guided nature explorations and terrarium workshops. Ready to explore?",
    gallery: [
      { vimeoId: "1131319486", type: 'corporate', title: "Little Explorers 6-8", description: "A peek into the guided nature explorations tailored specifically for 6 to 8-year-olds." },
      { vimeoId: "1131319400", type: 'corporate', title: "Little Explorers 3-5", description: "Fostering early environmental curiosity with nature workshops for toddlers." },
      { vimeoId: "1131319578", type: 'corporate', title: "Little Explorers 9-12", description: "Advanced terrarium and ecosystem-building workshops for older kids." },
      { vimeoId: "1131320700", type: 'corporate', title: "Explorers Workshop", description: "Hands-on, guided environmental workshops turning abstract concepts into action." },
      { vimeoId: "1131320755", type: 'corporate', title: "Birthday Specials", description: "Showcasing the unique and engaging birthday celebration programs hosted by Green Chapter." }
    ]
  },
  {
    slug: "enterprise-singapore",
    vimeoId: "1021466679",
    title: "Failure to Launch",
    client: "Enterprise Singapore",
    category: "Corporate Short Film",
    year: "2024",
    description: "A fictional short film of first time F&B Founder struggling to launch his new cafe. Highlighting the relatable struggles of the industry and the shame of failure to friends.",
    gallery: [
      { vimeoId: "1021468009", type: 'corporate', title: "Failure to Launch Trailer", description: "A dramatic look at the risks, pressures, and harsh realities of launching an F&B business." },
      { vimeoId: "1021466720", type: 'corporate', title: "Economics of F&B", description: "Three successful female entrepreneurs share crucial foundational insights into running a cafe." }
    ]
  },
  {
    slug: "accenture",
    vimeoId: "1021463357",
    title: "Be You, Lead the New",
    client: "Accenture",
    category: "Employee Branding",
    year: "2024",
    description: "A recruitment series featuring the talents at Accenture Philippines and how their passions align with their careers. The series emphasizes the importance of employee branding in showcasing the unique contributions of each team member.",
    gallery: [
      { vimeoId: "1021463525", type: 'corporate', title: "Hello Manda!", description: "Discovering how Manda aligns her external passions with her career at Accenture." },
      { vimeoId: "1021463433", type: 'corporate', title: "Hello Gio!", description: "Exploring Gio's individual journey and creative contributions at Accenture Philippines." },
      { vimeoId: "1021463571", type: 'corporate', title: "Hello Patricia!", description: "Showcasing Patricia's unique approach to collaborative teamwork and success." },
      { vimeoId: "1021463466", type: 'corporate', title: "Hello Hendrick!", description: "A snapshot of Hendrick's daily inspiration and supportive leadership style." },
      { vimeoId: "1021463501", type: 'corporate', title: "Hello Jan!", description: "Highlighting Jan's career milestones, adaptability, and personal growth." },
      { vimeoId: "1021463311", type: 'corporate', title: "Hello Maria & Hiro!", description: "A collaborative look at Maria and Hiro's incredibly dynamic professional partnership." },
      { vimeoId: "1021463389", type: 'corporate', title: "Hello MJ!", description: "MJ shares the external interests that make her so remarkably effective at problem-solving." },
      { vimeoId: "1021463623", type: 'corporate', title: "Meet Raina Cheng", description: "An engaging profile wrapping up Raina's career ambitions and professional focus." }
    ]
  },
  {
    slug: "uob-asset-management",
    vimeoId: "1021494730",
    title: "UOB Asset Management Corp",
    client: "UOB Asset Management",
    category: "Corporate Video",
    year: "2024",
    description: "A corporate video showcasing UOB Asset Management’s commitment to building a sustainable future by offering everyday investors access to the issues that matter most to them",
    gallery: []
  },
  {
    slug: "meltwater",
    vimeoId: "738471780",
    title: "Culture Day 2022",
    client: "Meltwater",
    category: "Employee Branding",
    year: "2023",
    description: "A ground-level look into Meltwater’s leadership, teams, and internal culture, capturing authentic moments from their 2022 Culture Day event in a rustic and genuine way.",
    gallery: [
      { vimeoId: "1021486218", type: 'social', title: "GSS Sizzle Reel 2024", description: "A fast-paced recap of Meltwater's massive Global Sales Summit event in Vegas." },
      { vimeoId: "1021485735", type: 'social', title: "GSS Vegas Day 1", description: "Kicking off the summit on day one with high energy and massive announcements." },
      { vimeoId: "1021485764", type: 'social', title: "GSS Vegas Day 2", description: "Deep dives into high-level sales strategy, team-building, and corporate vision." },
      { vimeoId: "1021485785", type: 'social', title: "GSS Vegas Day 3", description: "Wrapping up the epic Vegas summit with unforgettable closing ceremonies and awards." },
      { vimeoId: "1026056750", type: 'social', title: "FDS Mosic Workshop", description: "Showcasing internal employee branding during the highly collaborative Mosic Workshop." },
      { vimeoId: "890946553", type: 'corporate', title: "TikTok Japan Collab 2023", description: "A dynamic regional collaboration exploring brand synergy within the Japanese market." },
      { vimeoId: "738471829", type: 'corporate', title: "Culture in a Nutshell", description: "A genuine, ground-level look into the daily culture inside Meltwater's Singapore office." }
    ]
  },
  {
    slug: "3-degrees",
    vimeoId: "1021450871",
    title: "Charity Video",
    client: "3 Degrees",
    category: "Non-Profit Founder’s Story",
    year: "2024",
    description: "A featured video about the ItsRainingRaincoats charity and their founders’ mission to support migrant workers in Singapore by bridging cultural gaps and fostering inclusivity within society.",
    gallery: [
      { vimeoId: "1020466051", type: 'social', title: "Founders Story (Social)", description: "A vertical cut tailored specifically to hook younger audiences dynamically on social media." },
      { vimeoId: "1026056303", type: 'social', title: "Public Opinion Snippet", description: "Gathering unfiltered, candid street perspectives on mental health and social inclusivity." },
      { vimeoId: "1026056187", type: 'social', title: "KK Denise Reflection", description: "A quiet, deeply personal reflective look at overcoming significant personal hurdles." },
      { vimeoId: "1026058372", type: 'social', title: "WINGS Founders Story", description: "Exploring the roots of the WINGS initiative and its targeted framework for social impact." },
      { vimeoId: "1026056384", type: 'social', title: "Community Kitchen", description: "Showcasing the massive logistical reality and heart behind feeding marginalized communities." },
      { vimeoId: "1026058040", type: 'social', title: "Journey To Blindness", description: "A powerful, empathetic narrative raising crucial awareness for widespread visual impairment." },
      { vimeoId: "1026056750", type: 'social', title: "Mosic Workshop Recap", description: "A social format cut of an internal creative alignment session." }
    ]
  },
  {
    slug: "wealth-gps",
    vimeoId: "1131316789",
    title: "Gala 2025",
    client: "Wealth GPS",
    category: "Corporate Events",
    year: "2024",
    description: "Wealth GPs marks their 2025 Gala Awards with gratitude and growth, celebrating success, reflecting on their journey, and opening doors for those seeking a second chance.",
    gallery: []
  },
  {
    slug: "productivity-joy",
    vimeoId: "1131316295",
    title: "Book Launch",
    client: "Productivity Joy",
    category: "Book Launch Event",
    year: "2024",
    description: "Psychologist Simi Rayat debuts Productivity Joy, helping readers rediscover balance and joy in the rush of everyday life.",
    gallery: []
  },
  {
    slug: "land-transport-authority",
    vimeoId: "1021465916",
    title: "Active Mobility Bill",
    client: "Land Transport Authority",
    category: "Government PSA",
    year: "2024",
    description: "LTA's Active Mobility Bill was introduced to provide safety guidelines for mobility devices and a healthier lifestyle.",
    gallery: []
  },
  {
    slug: "kaleoscopic-communications",
    vimeoId: "1021483669",
    title: "Kaleoscopic Communications - ANEXT Bank: Open For Business Podcast",
    client: "Kaleoscopic Communications",
    category: "Podcast Series",
    year: "2024",
    description: "Kaleidoscopic, presents a new podcast in collaboration with ANEXT Bank, spotlighting the untold stories of Singapore’s entrepreneurs, and the real ways ANEXT has helped them grow their businesses.",
    gallery: [
      { vimeoId: "1021483731", type: 'corporate', title: "Open For Business EP2", description: "Spotlighting the unseen hurdles of Singapore's boldest and brightest new entrepreneurs." },
      { vimeoId: "1021483755", type: 'corporate', title: "Open For Business EP3", description: "Exploring real ways ANEXT Bank provides massive leverage for scaling companies." },
      { vimeoId: "1021483780", type: 'corporate', title: "Open For Business EP4", description: "A candid, honest conversation about scaling up in completely unprecedented economic times." },
      { vimeoId: "1131313558", type: 'corporate', title: "Open For Business EP5", description: "Diving into operational strategies, team leadership, and major business pivot success stories." },
      { vimeoId: "1131313814", type: 'corporate', title: "Open For Business EP6", description: "Reflecting deeply on the long-term impact of adopting right-sized financial backing." }
    ]
  },
  {
    slug: "nie",
    vimeoId: "1021466316",
    title: "Corporate Video",
    client: "NIE",
    category: "Corporate Video",
    year: "2024",
    description: "NIE is constantly evolving. It’s here that the educators of tomorrow learn to hone their craft, shaping and empowering the next generation of Singaporeans.",
    gallery: []
  },
  {
    slug: "ministry-of-manpower",
    vimeoId: "1021466066",
    title: "Work Place Appreciation",
    client: "Ministry of Manpower",
    category: "Government Communications",
    year: "2024",
    description: "Inspired by true stories of Singaporeans at different life stages who faced retrenchment, and the MOM officers who helped them get back on their feet.",
    gallery: []
  },
  {
    slug: "workforce-singapore",
    vimeoId: "1021467300",
    title: "Job Redesign",
    client: "Workforce Singapore",
    category: "Corporate Video",
    year: "2024",
    description: "A short film and case study project showcasing the challenges of retail and the real success stories behind Singaporean-led businesses.",
    gallery: [
      { vimeoId: "1021467097", type: 'corporate', title: "Benjamin Barker Redesign", description: "How Benjamin Barker effectively reshaped retail roles to retain their top talent." },
      { vimeoId: "1021467186", type: 'corporate', title: "Sheng Siong Workflow", description: "A case study on dramatically improving supermarket efficiency and global worker satisfaction." },
      { vimeoId: "1021467300", type: 'corporate', title: "Star Furniture Structure", description: "Empowering long-term employees through foundational structural changes at Star Furniture." }
    ]
  },
  {
    slug: "mentem",
    vimeoId: "1131318031",
    title: "Banpu Testimonial Video",
    client: "Mentem",
    category: "Testimonials",
    year: "2024",
    description: "A testimonial from Banpu, a leading Thai energy company, highlighting how Mentem helped design and deliver management enablement training for their team",
    gallery: []
  }
];
