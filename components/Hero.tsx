"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Shield,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const benefits = [
  "Expert Support When You Need It",
  "Flexible Month to Month Service",
  "Clear and Honest Pricing",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-10 md:pt-24 md:pb-16 overflow-hidden"
      aria-label="Welcome to QuadTech Consulting"
    >
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0d9488]/8 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1e3a5f]/8 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#0d9488]/5 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-none mt-4 md:mt-0"
          >
            <motion.div
              custom={0}
              variants={fadeInUp}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-[#1e3a5f] to-[#0f2744] text-white rounded-full text-sm font-medium mb-5 md:mb-8 shadow-lg leading-snug w-fit max-w-full"
            >
              <span className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse flex-shrink-0" />
              <span className="min-w-0 whitespace-normal break-words">
                Helping growing businesses stay secure and productive
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeInUp}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-[1.1] mb-4 md:mb-6"
            >
              Reliable IT Solutions{" "}
              <span className="bg-gradient-to-r from-[#0d9488] to-[#0f766e] bg-clip-text text-transparent">
                for Growing Businesses
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeInUp}
              className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed"
            >
              QuadTech Consulting helps businesses stay secure, productive, and
              scalable with modern IT solutions tailored to their needs.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeInUp}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-6 md:mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0d9488]/10 flex items-center justify-center">
                    <CheckCircle2
                      className="text-[#0d9488]"
                      size={14}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold shadow-lg shadow-[#0d9488]/25"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-xl hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] max-h-[280px] md:max-h-none ring-1 ring-slate-200/50">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="IT consulting team reviewing network infrastructure and security solutions for a small business client"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
              {[
                {
                  icon: Shield,
                  label: "Proactive Security",
                  color: "text-[#0d9488]",
                  delay: 0.5,
                },
                {
                  icon: Headphones,
                  label: "Responsive Support",
                  color: "text-[#1e3a5f]",
                  delay: 0.6,
                },
                {
                  icon: TrendingUp,
                  label: "Scalable Solutions",
                  color: "text-[#0d9488]",
                  delay: 0.7,
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.3 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-slate-100"
                >
                  <item.icon
                    size={16}
                    className={item.color}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
