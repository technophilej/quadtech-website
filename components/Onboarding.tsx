"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileCheck, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    desc: "We start by listening. Tell us about your business goals, current technology, and the challenges you face every day.",
    gradient: "from-[#0d9488] to-[#0f766e]",
  },
  {
    icon: ClipboardList,
    title: "Assessment",
    desc: "We review your current environment to understand what is working well and identify opportunities for immediate improvement.",
    gradient: "from-[#1e3a5f] to-[#0f2744]",
  },
  {
    icon: FileCheck,
    title: "Custom Proposal",
    desc: "You receive a clear proposal with defined scope, realistic timeline, and transparent pricing. No confusing jargon or hidden costs.",
    gradient: "from-[#0d9488] to-[#0f766e]",
  },
  {
    icon: Rocket,
    title: "Implementation and Ongoing Support",
    desc: "We roll out the agreed changes, document what we put in place, and provide ongoing support so your team is not left on its own.",
    gradient: "from-[#1e3a5f] to-[#0f2744]",
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

export default function Onboarding() {
  return (
    <section
      id="onboarding"
      aria-label="Our Onboarding Process"
      className="py-12 md:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#1e3a5f]/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-[#0d9488]/5 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#1e3a5f] to-[#0f2744] text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-5">
            Simple, Transparent Process
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Working with us is straightforward. We handle the complexity so you
            can focus on running your business.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-5 md:p-7 rounded-3xl shadow-lg border border-slate-200/80 hover:shadow-2xl hover:border-[#0d9488]/30 transition-all duration-300 relative group"
            >
              <div
                className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
              >
                {idx + 1}
              </div>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <step.icon size={26} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
