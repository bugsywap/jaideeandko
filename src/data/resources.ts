export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "Guide" | "Template" | "Playbook" | "Checklist";
  downloadUrl: string;
  fileType: "PDF" | "ZIP" | "DOCX" | "XLSX";
  imageUrl?: string;
  isFeatured?: boolean;
}

export const RESOURCES: Resource[] = [
  {
    id: "b2b-video-roadmap",
    title: "5 Videos Every B2B Brand Needs",
    description: "Discover the definitive video assets that drive trust and shorten B2B sales cycles in Southeast Asia.",
    category: "Guide",
    downloadUrl: "/5_Videos_Every_B2B_Needs_Roadmap.pdf",
    imageUrl: "/res-featured-thumb.png",
    fileType: "PDF",
    isFeatured: true,
  },
  {
    id: "marketing-checklist",
    title: "Video Marketing Checklist",
    description: "A comprehensive roadmap for launching and scaling high-impact video marketing campaigns. Everything you need to plan, launch, and improve.",
    category: "Checklist",
    downloadUrl: "/Video Marketing Checklist_Jaideeko Resource.pdf", 
    imageUrl: "/res-checklist-thumb.png",
    fileType: "PDF",
  }
];
