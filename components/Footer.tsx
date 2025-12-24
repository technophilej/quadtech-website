"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = {
  services: [
    { label: "Managed IT", href: "/services/managed-it-services" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Cybersecurity", href: "/services/security-assessments" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "VoIP and Phone Systems", href: "/services/voip-phone-systems" },
    {
      label: "Backup and Recovery",
      href: "/services/backup-disaster-recovery",
    },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "All Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Why Choose Us", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: siteConfig.facebookUrl, label: "Facebook" },
  { icon: Twitter, href: siteConfig.twitterUrl, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.linkedinUrl, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0a1120] text-white pt-20 pb-8 relative overflow-hidden">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#0d9488]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-[#1e3a5f]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="QuadTech Consulting"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Your trusted IT partner for business growth and digital
              transformation. We deliver reliable technology solutions with a
              personal touch.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(
                (social) =>
                  social.href && (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-[#0d9488] hover:to-[#0f766e] hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent"
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                      </Link>
                    </motion.div>
                  ),
              )}
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-[#0d9488] hover:to-[#0f766e] hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#14b8a6] transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#0d9488] group-hover:w-2 transition-all duration-200 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#14b8a6] transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#0d9488] group-hover:w-2 transition-all duration-200 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {siteConfig.phone && (
                <li className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </li>
              )}
              <li className="hover:text-white transition-colors">
                {siteConfig.email}
              </li>
              {siteConfig.addressLine1 && (
                <li className="hover:text-white transition-colors">
                  {siteConfig.addressLine1}
                </li>
              )}
              {siteConfig.addressLine2 && (
                <li className="hover:text-white transition-colors">
                  {siteConfig.addressLine2}
                </li>
              )}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} QuadTech Consulting. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
