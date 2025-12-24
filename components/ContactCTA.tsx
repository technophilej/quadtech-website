"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-10 md:py-14 bg-gradient-to-br from-[#1e3a5f] via-[#152d4a] to-[#0f2744] text-white relative overflow-hidden"
      aria-label="Contact Us"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0d9488]/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#0d9488]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6"
          >
            Get Started
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Elevate Your Technology?
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Schedule a free consultation to review your current technology
            environment. We will identify opportunities to improve performance,
            strengthen security, and reduce costs.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
          >
            Schedule a Free Consultation
            <ArrowRight size={20} aria-hidden="true" />
          </Link>

          <p className="mt-8 text-sm text-slate-400">
            No obligation • Response within 1 business day
          </p>
        </motion.div>
      </div>
    </section>
  );
}
