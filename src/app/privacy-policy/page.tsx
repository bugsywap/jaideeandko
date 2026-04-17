"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, FileText, Lock, Scale, Mail, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy")

  const privacySections = [
    { title: "1. Information We Collect", content: "We collect the following types of information: name, email address, phone number, ip address, mailing address, website usage information, cookie data, location data, device information, payment information. This information is collected when you use our services, create an account, make a purchase, or interact with our website." },
    { title: "2. How We Use Your Information", content: "We use the information we collect to provide and improve our services, communicate with users, process transactions, personalize your experience, and ensure the security of our website. We may also use this information for marketing purposes, but you can opt out at any time." },
    { title: "3. Data Sharing and Disclosure", content: "We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, subject to confidentiality agreements. We may also disclose your information if required by law or to protect our rights or the rights of others." },
    { title: "4. Data Security", content: "We implement a variety of security measures to maintain the safety of your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security." },
    { title: "5. Your Rights and Choices", content: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict use of your information. You can exercise these rights by contacting us using the information provided below." },
    { title: "6. Cookies and Tracking Technologies", content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." },
    { title: "7. Children's Privacy", content: "Our service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information." },
    { title: "8. Changes to This Privacy Policy", content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'last updated' date at the top of this Privacy Policy." },
    { title: "9. Contact Information", content: "For any questions or concerns regarding this privacy policy, please contact us at gkoay@jaideeandko.com." }
  ]

  const termsSections = [
    { title: "1. Acceptance of Terms", content: "By accessing and using jaideeandko.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service." },
    { title: "2. Description of Service", content: "Jaidee & Ko provides video production and content services. You are responsible for obtaining access to the Service and that access may involve third-party fees (such as Internet service provider or airtime charges)." },
    { title: "3. User Conduct", content: "You agree to use the Service in accordance with all applicable laws. You agree not to use the Service in any way that is unlawful, or harms Jaidee & Ko, its service providers, suppliers or any other user." },
    { title: "4. Intellectual Property", content: "The content on jaideeandko.com is owned by or licensed to Jaidee & Ko, subject to copyright and other intellectual property rights under the law." },
    { title: "5. Third-Party Services and Content", content: "We may provide links to third-party websites or services. You acknowledge and agree that we shall not be responsible for any Third-Party Services, including their accuracy or legality." },
    { title: "6. Disclaimer of Warranties", content: "Your use of the service is at your sole risk. The service is provided on an 'AS IS' and 'AS AVAILABLE' basis. Jaidee & Ko expressly disclaims all warranties of any kind." },
    { title: "7. Limitation of Liability", content: "Jaidee & Ko shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of the service." },
    { title: "8. Termination", content: "We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever." },
    { title: "9. Governing Law", content: "These Terms shall be governed and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions." },
    { title: "10. Changes to Terms", content: "We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms on this page." },
    { title: "11. Contact Information", content: "If you have any questions about these Terms, please contact us at gkoay@jaideeandko.com." }
  ]

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-foreground/50 hover:text-primary transition-colors text-sm font-bold mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
              Legal Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-8">
              Rules of the <span className="text-primary italic">Game</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Transparent, professional, and built on trust. Here's how we protect your data and govern our production standards.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs / Content Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-80 shrink-0 relative lg:sticky lg:top-32 z-20">
              <div className="flex flex-col gap-2 p-2 bg-surface rounded-3xl border border-border shadow-sm">
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                    activeTab === "privacy" 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Lock className={`w-5 h-5 ${activeTab === "privacy" ? "text-white" : "text-primary"}`} />
                  Privacy Policy
                </button>
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                    activeTab === "terms" 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "text-foreground/60 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Scale className={`w-5 h-5 ${activeTab === "terms" ? "text-white" : "text-primary"}`} />
                  Terms of Service
                </button>
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-black uppercase tracking-widest mb-4">Need Help?</h4>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  Have questions about our data practices or collaboration terms?
                </p>
                <a 
                  href="mailto:gkoay@jaideeandko.com"
                  className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
                >
                  Contact Support <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface p-8 lg:p-12 rounded-[2.5rem] border border-border shadow-xl min-h-[600px]"
                >
                  <div className="flex items-center gap-3 mb-12">
                    {activeTab === "privacy" ? (
                      <>
                        <Shield className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-black">Privacy Policy</h2>
                      </>
                    ) : (
                      <>
                        <FileText className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-black">Terms of Service</h2>
                      </>
                    )}
                  </div>

                  <div className="space-y-12">
                    {(activeTab === "privacy" ? privacySections : termsSections).map((section, idx) => (
                      <div key={idx} className="group">
                        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-20 pt-10 border-t border-border/50 text-sm text-foreground/40 font-medium">
                    Last updated: March 18, 2026 • Jaidee & Ko Legal Office
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
