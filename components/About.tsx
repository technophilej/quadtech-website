"use client";

import { motion } from "framer-motion";
import { Headphones, MessageSquare, Shield, TrendingUp } from "lucide-react";

const values = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We explain options in plain language and set realistic expectations. No jargon, no surprises — just honest guidance you can act on.",
    gradient: "from-[#0d9488] to-[#0f766e]",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    description:
      "When something breaks, you have a team that responds quickly and follows through until it's resolved. We stay close to your day-to-day reality.",
    gradient: "from-[#14b8a6] to-[#0d9488]",
  },
  {
    icon: Shield,
    title: "Practical Security",
    description:
      "We help you understand where you're at risk and prioritize the improvements that matter most. No fear tactics, just sensible protection.",
    gradient: "from-[#0d9488] to-[#0f766e]",
  },
  {
    icon: TrendingUp,
    title: "Strategic Guidance",
    description:
      "A simple roadmap that connects technology decisions to your business goals. We recommend what makes sense, not what's most expensive.",
    gradient: "from-[#14b8a6] to-[#0d9488]",
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

export default function About() {
  return (
    <section
      id="about"
      className="py-10 md:py-14 bg-gradient-to-br from-[#1e3a5f] via-[#152d4a] to-[#0f2744] text-white relative overflow-hidden"
      aria-label="Why Choose QuadTech"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0d9488]/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0d9488]/10 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Hands-On IT Partner You Can Rely On
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We started QuadTech to give growing businesses an IT partner they
            can actually talk to. We focus on keeping your systems stable,
            responding when you need help, and recommending technology that
            makes sense for how your team works day-to-day.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/[0.08] backdrop-blur-sm p-5 md:p-8 rounded-3xl hover:bg-white/[0.12] transition-all duration-300 border border-white/10 group"
            >
              <div className="mb-5">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon
                    size={28}
                    strokeWidth={2}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
