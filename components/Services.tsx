"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CloudCog,
  Globe,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

const categoryCards: {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  gradient: string;
  iconBg: string;
}[] = [
  {
    slug: "it-management",
    title: "IT Management and Support",
    description:
      "Keep your systems reliable with proactive maintenance, routine checks, and responsive support when something is not working, plus guidance on where to improve next.",
    icon: MonitorCog,
    gradient: "from-[#1e3a5f] to-[#0f2744]",
    iconBg: "bg-[#1e3a5f]/10",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Reduce risk with practical security measures, clear best practices for your team, and monitoring that helps you spot issues early.",
    icon: ShieldCheck,
    gradient: "from-[#0d9488] to-[#0f766e]",
    iconBg: "bg-[#0d9488]/10",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud and Infrastructure",
    description:
      "Use cloud tools and infrastructure that scale with your business, support remote work, and keep your files and systems organized.",
    icon: CloudCog,
    gradient: "from-[#1e3a5f] to-[#0f2744]",
    iconBg: "bg-[#1e3a5f]/10",
  },
  {
    slug: "web-communications",
    title: "Web and Communications",
    description:
      "Establish a professional online presence and streamline how your team communicates with modern websites, email systems, and phone solutions.",
    icon: Globe,
    gradient: "from-[#0d9488] to-[#0f766e]",
    iconBg: "bg-[#0d9488]/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-10 md:py-14 bg-white relative"
      aria-label="Our Services"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0d9488]/5 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-8 md:mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#1e3a5f] via-[#152d4a] to-[#0f2744] rounded-3xl p-6 md:p-12 text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6 w-fit shadow-lg">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Solutions Built Around Your Business
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Whether you need day to day IT help, stronger security, or a
                clearer plan for the next year, we start with where you are and
                build from there. Our core services cover managed IT,
                cybersecurity, cloud and infrastructure, and practical IT
                consulting and strategy. We learn how your team works, then
                design solutions that solve real problems instead of adding
                extra complexity.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-white font-semibold hover:text-[#0d9488] transition-colors group"
              >
                View All Services
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            {(() => {
              const featured = categoryCards[0];
              const FeaturedIcon = featured.icon;
              return (
                <Link
                  href={`/services/category/${featured.slug}`}
                  aria-label={`Learn more about ${featured.title}`}
                  className="block bg-gradient-to-br from-slate-50 to-white rounded-3xl p-5 md:p-10 border border-slate-200/80 hover:border-[#0d9488]/40 hover:shadow-2xl transition-all duration-300 h-full group"
                >
                  <div className="flex flex-col h-full">
                    <div
                      className={`w-16 h-16 ${featured.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
                    >
                      <FeaturedIcon
                        size={32}
                        strokeWidth={1.5}
                        className="text-[#1e3a5f]"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-[#1e3a5f] transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow text-lg leading-relaxed">
                      {featured.description}
                    </p>
                    <span className="inline-flex items-center text-[#0d9488] font-semibold group-hover:translate-x-2 transition-all duration-300">
                      Learn More
                      <ArrowRight size={18} className="ml-2" />
                    </span>
                  </div>
                </Link>
              );
            })()}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {categoryCards.slice(1).map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div key={category.slug} variants={itemVariants}>
                <Link
                  href={`/services/category/${category.slug}`}
                  aria-label={`Learn more about ${category.title}`}
                  className="block bg-gradient-to-br from-slate-50 to-white rounded-3xl p-5 md:p-8 border border-slate-200/80 hover:border-[#0d9488]/40 hover:shadow-2xl transition-all duration-300 h-full group"
                >
                  <div className="flex flex-col h-full">
                    <div
                      className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300`}
                    >
                      <CategoryIcon
                        size={28}
                        strokeWidth={1.5}
                        className={
                          category.gradient.includes("0d9488")
                            ? "text-[#0d9488]"
                            : "text-[#1e3a5f]"
                        }
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#1e3a5f] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-5 flex-grow leading-relaxed">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-2 transition-all duration-300">
                      Learn More
                      <ArrowRight size={16} className="ml-1.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
