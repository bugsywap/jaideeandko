"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Sparkles, 
  Search,
  BookOpen,
  Layout,
  CheckCircle,
  FileBox
} from "lucide-react"
import { RESOURCES, Resource } from "@/data/resources"
import { ResourceDownloadModal } from "@/components/resources/ResourceDownloadModal"

function ResourcesContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle auto-opening from URL params (e.g., ?id=b2b-video-roadmap)
  useEffect(() => {
    const resourceId = searchParams.get("id")
    if (resourceId) {
      const match = RESOURCES.find(r => r.id === resourceId)
      if (match) {
        setSelectedResource(match)
        setIsModalOpen(true)
      }
    }
  }, [searchParams])

  const categories = ["All", ...Array.from(new Set(RESOURCES.map(r => r.category)))]
  
  const filteredResources = RESOURCES.filter(resource => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredResource = RESOURCES.find(r => r.isFeatured)

  const handleDownloadClick = (resource: Resource) => {
    if (resource.downloadUrl === "#") return // Ignore "Soon" items
    setSelectedResource(resource)
    setIsModalOpen(true)
  }

  return (
    <div className="bg-background min-h-screen relative overflow-x-hidden pt-32 pb-32">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Navigation */}
        <ScrollReveal>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <ScrollReveal delay={0.1}>
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Knowledge Hub
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.0] mb-8">
              Scale Your <span className="text-primary italic">B2B Authority.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/60 max-w-2xl font-medium">
              A curated collection of playbooks, templates, and guides designed specifically for B2B tech leaders and non-profit innovators in Southeast Asia.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Resource (Lead Magnet) */}
        {featuredResource && (
          <ScrollReveal delay={0.4} className="mb-32">
            <div className="group relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="relative bg-surface border border-border/50 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Featured Download</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
                    {featuredResource.title}
                  </h2>
                  
                  <p className="text-foreground/70 mb-10 text-lg leading-relaxed font-medium">
                    {featuredResource.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="rounded-2xl px-8 h-14 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
                      onClick={() => handleDownloadClick(featuredResource)}
                    >
                      Download Guide <Download className="ml-2 w-4 h-4" />
                    </Button>
                    <Badge variant="outline" className="rounded-xl px-4 flex items-center gap-2 border-border/50 bg-background/50">
                      <FileText className="w-3.5 h-3.5 text-foreground/40" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{featuredResource.fileType} • 2.4MB</span>
                    </Badge>
                  </div>
                </div>

                <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden group/img">
                  {featuredResource.imageUrl && (
                    <div className="absolute inset-0">
                      <img 
                        src={featuredResource.imageUrl} 
                        alt={featuredResource.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:hidden block" />
                    </div>
                  )}
                  {/* Floating badge for image */}
                  <div className="absolute bottom-10 right-10 bg-surface/80 backdrop-blur-md border border-border/50 p-6 rounded-2xl shadow-2xl transform translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <BookOpen className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Resource Type</p>
                          <p className="text-sm font-bold">{featuredResource.category}</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Filter & Search Hub */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <ScrollReveal direction="right" className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? "bg-foreground text-background" 
                      : "bg-surface border border-border/50 text-foreground/50 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1} className="w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-[300px] h-12 bg-surface/50 backdrop-blur-sm border border-border/50 rounded-2xl pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.filter(r => !r.isFeatured).map((resource, index) => (
            <ScrollReveal key={resource.id} delay={0.1 * index} className="h-full">
              <div className="group bg-surface/40 backdrop-blur-md border border-border/50 rounded-[2rem] overflow-hidden h-full flex flex-col transition-all hover:bg-surface hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1">
                
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  {resource.imageUrl ? (
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                       <FileBox className="w-12 h-12 text-primary/20" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-surface/80 backdrop-blur-md border-border/50 text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1">
                      {resource.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110 duration-500 ${
                      resource.category === 'Template' ? 'bg-blue-500/10 text-blue-500' :
                      resource.category === 'Playbook' ? 'bg-purple-500/10 text-purple-500' :
                      resource.category === 'Checklist' ? 'bg-orange-500/10 text-orange-500' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {resource.category === 'Template' && <Layout className="w-5 h-5" />}
                      {resource.category === 'Playbook' && <FileBox className="w-5 h-5" />}
                      {resource.category === 'Checklist' && <CheckCircle className="w-5 h-5" />}
                      {resource.category === 'Guide' && <BookOpen className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-foreground/50 text-sm leading-relaxed mb-auto">
                    {resource.description}
                  </p>

                  <div className="mt-10 pt-8 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-tighter text-foreground/30">
                      {resource.fileType} • Free
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group/btn h-10 px-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleDownloadClick(resource)}
                    >
                      {resource.downloadUrl === '#' ? (
                        <>Soon <Sparkles className="ml-2 w-3.5 h-3.5" /></>
                      ) : (
                        <>Download <Download className="ml-2 w-3.5 h-3.5 group-hover/btn:animate-bounce" /></>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <ScrollReveal>
            <div className="py-32 text-center">
              <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-foreground/20" />
              </div>
              <h3 className="text-xl font-bold mb-2">No resources found</h3>
              <p className="text-foreground/50">Try adjusting your filters or search query.</p>
            </div>
          </ScrollReveal>
        )}

      </div>

      <ResourceDownloadModal 
        resource={selectedResource}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ResourcesContent />
    </Suspense>
  )
}
