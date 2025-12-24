import {
  ArrowLeft,
  Briefcase,
  CheckCircle,
  Cloud,
  Globe,
  HardDrive,
  Lock,
  Mail,
  Phone,
  Search,
  Server,
  Shield,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { ComponentType } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Service data with full details for each service page
 */
const servicesData: Record<
  string,
  {
    title: string;
    icon: ComponentType<{ size?: number; className?: string }>;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
    image: string;
  }
> = {
  "managed-it-services": {
    title: "Managed IT Services",
    icon: Server,
    description:
      "Continuous monitoring and maintenance that prevents problems before they impact your operations.",
    longDescription:
      "Our Managed IT Services provide comprehensive technology support tailored to your business needs. We proactively monitor your systems, resolve issues before they become problems, and ensure your infrastructure runs smoothly so you can focus on growing your business.",
    features: [
      "Proactive Monitoring",
      "Remote and Onsite Support",
      "Infrastructure Management",
      "Help Desk Support",
      "Patch Management",
      "Asset Tracking",
    ],
    benefits: [
      "Reduce downtime and increase productivity",
      "Predictable monthly IT costs",
      "Access to a team of IT experts",
      "Focus on your core business",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  "website-development": {
    title: "Website Development and Support",
    icon: Globe,
    description:
      "Modern, high-performance websites built to convert visitors into customers with ongoing technical support.",
    longDescription:
      "We design and develop custom websites that reflect your brand and drive results. From simple landing pages to complex web applications, our team delivers responsive, fast, and secure solutions with ongoing maintenance and support.",
    features: [
      "Custom Web Apps",
      "Performance Optimization",
      "Maintenance Plans",
      "SEO-Friendly Design",
      "Mobile Responsive",
      "Content Management",
    ],
    benefits: [
      "Professional online presence",
      "Increased lead generation",
      "Better user experience",
      "Ongoing technical support",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  "email-domain-migration": {
    title: "Email/Domain Migration",
    icon: Mail,
    description:
      "Seamless migration of your email systems and domains with minimal disruption.",
    longDescription:
      "Moving to a new email platform or domain can be complex. We handle the entire migration process, ensuring all your emails, contacts, and calendars transfer seamlessly with minimal downtime.",
    features: [
      "Seamless Transitions",
      "Complete Data Transfer",
      "Post-Migration Support",
      "DNS Management",
      "User Training",
      "Backup and Verification",
    ],
    benefits: [
      "Careful planning to minimize data loss",
      "Minimal business disruption",
      "Expert guidance throughout",
      "Ongoing support after migration",
    ],
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
  },
  "cybersecurity-training": {
    title: "Cybersecurity Training",
    icon: Shield,
    description:
      "Empower your team to recognize and prevent cyber threats with engaging, practical training programs.",
    longDescription:
      "Your employees are your first line of defense against cyber threats. Our training programs teach your team to identify phishing attempts, handle sensitive data properly, and follow security best practices to protect your organization.",
    features: [
      "Phishing Simulations",
      "Security Awareness",
      "Compliance Training",
      "Interactive Modules",
      "Progress Tracking",
      "Custom Scenarios",
    ],
    benefits: [
      "Reduce human error risks",
      "Meet compliance requirements",
      "Build a security-first culture",
      "Protect sensitive data",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  "compliance-security": {
    title: "State Compliance and Security",
    icon: Lock,
    description:
      "Navigate complex regulatory requirements with expert guidance and implementation support.",
    longDescription:
      "Staying compliant with industry regulations can be overwhelming. We help you understand your requirements, implement necessary controls, and prepare for audits so you can operate with confidence.",
    features: [
      "Gap Analysis",
      "Policy Creation",
      "Audit Preparation",
      "Risk Assessment",
      "Documentation",
      "Ongoing Compliance Monitoring",
    ],
    benefits: [
      "Avoid costly penalties",
      "Build customer trust",
      "Streamlined audit process",
      "Clear compliance roadmap",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  "penetration-testing": {
    title: "Penetration Testing",
    icon: Search,
    description:
      "Discover security weaknesses through ethical hacking before malicious actors exploit them.",
    longDescription:
      "Our certified security experts simulate real-world attacks on your systems to identify vulnerabilities. We provide detailed reports with prioritized recommendations to strengthen your security posture.",
    features: [
      "Network Testing",
      "Application Security",
      "Executive Reports",
      "Social Engineering Tests",
      "Remediation Guidance",
      "Retesting",
    ],
    benefits: [
      "Find vulnerabilities before hackers do",
      "Prioritized remediation plan",
      "Meet compliance requirements",
      "Protect your reputation",
    ],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  "security-assessments": {
    title: "Security Assessments",
    icon: ShieldCheck,
    description:
      "Comprehensive evaluation of your entire security posture with actionable improvement roadmaps.",
    longDescription:
      "Get a complete picture of your organization's security health. We evaluate your policies, procedures, and technical controls to identify gaps and provide a clear roadmap for improvement.",
    features: [
      "Perimeter Analysis",
      "Risk Evaluation",
      "Remediation Plans",
      "Policy Review",
      "Vulnerability Scanning",
      "Security Scoring",
    ],
    benefits: [
      "Understand your risk exposure",
      "Prioritize security investments",
      "Improve overall security posture",
      "Executive-ready reports",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    icon: Cloud,
    description:
      "Strategic cloud adoption and optimization that reduces costs while improving scalability and reliability.",
    longDescription:
      "Whether you're moving to the cloud or optimizing your existing setup, we help you leverage cloud technology to reduce costs, improve flexibility, and scale your infrastructure as your business grows.",
    features: [
      "Migration Strategy",
      "Cost Optimization",
      "Hybrid Solutions",
      "Cloud Security",
      "Performance Monitoring",
      "Disaster Recovery",
    ],
    benefits: [
      "Reduce infrastructure costs",
      "Scale on demand",
      "Improve reliability",
      "Access anywhere",
    ],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  "voip-phone-systems": {
    title: "VoIP and Phone Systems",
    icon: Phone,
    description:
      "Business calling solutions with call routing, IVR, and softphone/desk phone provisioning.",
    longDescription:
      "Upgrade your business communications with modern VoIP solutions. We set up and manage phone systems that integrate with your existing tools, reduce costs, and provide professional features like auto-attendants and call analytics.",
    features: [
      "Number Porting",
      "Call Routing and IVR",
      "Teams/Zoom Phone Setup",
      "Softphone Apps",
      "Call Analytics",
      "Voicemail to Email",
    ],
    benefits: [
      "Lower phone bills",
      "Work from anywhere",
      "Professional call handling",
      "Easy scalability",
    ],
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80",
  },
  "backup-disaster-recovery": {
    title: "Backup and Disaster Recovery",
    icon: HardDrive,
    description:
      "Automated backups and tested recovery plans to keep your data safe and your team online.",
    longDescription:
      "Protect your business from data loss with automated backup solutions and tested disaster recovery plans. We ensure your critical data is safe and can be restored quickly when you need it most.",
    features: [
      "Offsite Backups",
      "M365/Google Backup",
      "Recovery Testing",
      "Ransomware Protection",
      "RTO/RPO Planning",
      "Bare Metal Recovery",
    ],
    benefits: [
      "Peace of mind",
      "Fast recovery times",
      "Protection from ransomware",
      "Business continuity",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  "it-consulting-vcio": {
    title: "IT Consulting (vCIO)",
    icon: Briefcase,
    description:
      "Strategic planning and guidance to align technology investments with your business goals.",
    longDescription:
      "Get executive-level IT guidance without the full-time cost. Our virtual CIO services provide strategic technology planning, budgeting, and vendor management to ensure your IT investments drive business results.",
    features: [
      "Roadmaps and Budgeting",
      "Vendor Management",
      "Policy and Governance",
      "Technology Reviews",
      "Strategic Planning",
      "Quarterly Business Reviews",
    ],
    benefits: [
      "Align IT with business goals",
      "Optimize technology spending",
      "Expert guidance on demand",
      "Long-term technology strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
};

/**
 * Generate static params for all service pages
 */
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

/**
 * Generate metadata for each service page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | QuadTech Consulting`,
    description: service.description,
  };
}

/**
 * Service Detail Page
 * Displays full information about a specific service
 */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
    return null;
  }

  const IconComponent = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "United States",
    serviceType: service.title,
  };

  return (
    <div className="min-h-screen bg-white">
      <Script id={`service-jsonld-${slug}`} type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#services"
              className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 text-white mb-6">
                  <IconComponent size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                  Schedule a Free Consultation
                </Link>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={320}
                  className="w-full h-80 object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features and Benefits */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-3 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle
                        className="text-[#0d9488] mr-3 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other Services */}
        <div className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Explore other IT services:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(servicesData)
                .filter(([key]) => key !== slug)
                .slice(0, 4)
                .map(([key, svc]) => {
                  const ServiceIcon = svc.icon;
                  return (
                    <Link
                      key={key}
                      href={`/services/${key}`}
                      className="group flex flex-col items-center p-5 rounded-xl border border-gray-200 hover:border-[#0d9488]/30 hover:shadow-lg transition-all duration-200 bg-gray-50 hover:bg-white"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center mb-3 group-hover:bg-[#0d9488]/10 group-hover:text-[#0d9488] transition-colors">
                        <ServiceIcon size={28} />
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-center group-hover:text-[#0d9488] transition-colors">
                        {svc.title}
                      </span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-800 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your IT?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Schedule a free consultation and see how we can help your
              business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>

        {/* Footer link back */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/"
              className="text-[#0d9488] hover:text-[#14b8a6] font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
