import {
  Briefcase,
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
import type { ComponentType } from "react";

export type ServiceCard = {
  title: string;
  slug: string;
  description: string;
  image: string;
  category:
    | "Cybersecurity"
    | "Cloud and Infrastructure"
    | "Web and Communications"
    | "IT Management and Support";
  icon: ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;
};

export const serviceCategoryOrder: ServiceCard["category"][] = [
  "Cybersecurity",
  "Cloud and Infrastructure",
  "Web and Communications",
  "IT Management and Support",
];

export const categoryDescriptions: Record<ServiceCard["category"], string> = {
  Cybersecurity:
    "Protect your business from evolving threats with proactive security strategies, compliance expertise, and comprehensive risk reduction services.",
  "Cloud and Infrastructure":
    "Build scalable, reliable IT infrastructure with modern cloud solutions and robust business continuity planning.",
  "Web and Communications":
    "Establish a strong digital presence and streamline business communications with modern web and telephony solutions.",
  "IT Management and Support":
    "Keep your technology running smoothly with expert monitoring, proactive maintenance, and strategic IT leadership.",
};

export const serviceCards: ServiceCard[] = [
  {
    icon: Shield,
    title: "Cybersecurity Training",
    slug: "cybersecurity-training",
    description:
      "Empower your team to recognize and prevent cyber threats through engaging, practical training programs that build lasting security awareness.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    category: "Cybersecurity",
  },
  {
    icon: Lock,
    title: "State Compliance and Security",
    slug: "compliance-security",
    description:
      "Navigate complex regulatory requirements with expert guidance, thorough documentation, and hands-on implementation support.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    category: "Cybersecurity",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    slug: "penetration-testing",
    description:
      "Discover security weaknesses through controlled ethical hacking before malicious actors find and exploit them.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    category: "Cybersecurity",
  },
  {
    icon: ShieldCheck,
    title: "Security Assessments",
    slug: "security-assessments",
    description:
      "Comprehensive evaluation of your entire security posture with clear findings and actionable improvement roadmaps.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    category: "Cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Strategic cloud adoption and optimization that reduces costs while improving scalability, reliability, and team productivity.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    category: "Cloud and Infrastructure",
  },
  {
    icon: HardDrive,
    title: "Backup and Disaster Recovery",
    slug: "backup-disaster-recovery",
    description:
      "Automated backups and thoroughly tested recovery plans that keep your data safe and your team productive.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    category: "Cloud and Infrastructure",
  },
  {
    icon: Globe,
    title: "Website Development and Support",
    slug: "website-development",
    description:
      "Modern, high-performance websites built to convert visitors into customers, backed by ongoing technical support and maintenance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    category: "Web and Communications",
  },
  {
    icon: Mail,
    title: "Email/Domain Migration",
    slug: "email-domain-migration",
    description:
      "Seamless migration of your email systems and domains with minimal disruption to your daily operations.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
    category: "Web and Communications",
  },
  {
    icon: Phone,
    title: "VoIP and Phone Systems",
    slug: "voip-phone-systems",
    description:
      "Professional business phone systems with intelligent call routing, auto attendant features, and flexible device options.",
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80",
    category: "Web and Communications",
  },
  {
    icon: Server,
    title: "Managed IT Services",
    slug: "managed-it-services",
    description:
      "Continuous monitoring and proactive maintenance that prevents problems before they impact your operations.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    category: "IT Management and Support",
  },
  {
    icon: Briefcase,
    title: "IT Consulting (vCIO)",
    slug: "it-consulting-vcio",
    description:
      "Strategic IT leadership and planning that aligns your technology investments with your business goals and growth trajectory.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    category: "IT Management and Support",
  },
];
