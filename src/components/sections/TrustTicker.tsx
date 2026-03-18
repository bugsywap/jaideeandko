export const clients = [
  { name: '3 Degrees', label: 'Sustainability Consulting', src: '/img/3-deg.png' },
  { name: 'GC Logo', label: 'Corporate Client', src: '/img/GClogo_No Background.png' },
  { name: 'NIE', label: 'Educational Institute', src: '/img/NIE.png' },
  { name: 'V1', label: 'Technology Partner', src: '/img/V1_White.png' },
  { name: 'Wealth GPS', label: 'Financial Advisory', src: '/img/Wealth GPS.png' },
  { name: 'Accenture', label: 'Global Consulting', src: '/img/accenture-2.png' },
  { name: 'ANEXT Bank', label: 'Digital Bank', src: '/img/anext_bank1.png' },
  { name: 'Banpu', label: 'Energy & Resources', src: '/img/banpu.png' },
  { name: 'Enterprise SG', label: 'Government Agency', src: '/img/es_1ceXgYdj.png' },
  { name: 'LTA', label: 'Government Agency', src: '/img/land-transport-authority.png' },
  { name: 'Meltwater', label: 'Global SaaS Company', src: '/img/meltwa.png' },
  { name: 'Mentum', label: 'B2B Agency', src: '/img/mentum NSW.png' },
  { name: 'MOM', label: 'Government Agency', src: '/img/mom.png' },
  { name: 'Productivity', label: 'Consulting Agency', src: '/img/productivity.png' },
  { name: 'SCH', label: 'Public Healthcare', src: '/img/sch1.png' },
  { name: 'UOB', label: 'Financial Institution', src: '/img/uob_e.png' },
  { name: 'WSG', label: 'Government Agency', src: '/img/wsg.png' },
]

export function TrustTicker() {
  return (
    <div className="w-full bg-background py-16 sm:py-24 overflow-hidden border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <h2 className="text-center text-lg font-semibold leading-8 text-foreground uppercase tracking-widest">
          Trusted by leading organisations across Singapore and Southeast Asia
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative w-full overflow-hidden">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] mt-8 items-center">
            {/* Double map to allow for smooth looping without JS */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={`${client.name}-${i}`} className="flex flex-col items-center justify-center w-40 sm:w-48 shrink-0 gap-4 group">
                <img 
                  src={client.src} 
                  alt={`${client.name} - ${client.label} partner logo`} 
                  title={client.name}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  width={160}
                  height={48}
                />
                <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider text-center">
                  {client.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
