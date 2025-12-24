import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import WhoWeServe from "@/components/WhoWeServe";

export const metadata: Metadata = {
  title: "Why Choose Us | QuadTech Consulting",
  description:
    "Learn what sets QuadTech Consulting apart: clear communication, responsive support, practical security, and strategic guidance tailored to growing businesses.",
  alternates: {
    canonical: "/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Us | QuadTech Consulting",
    description:
      "Learn what sets QuadTech Consulting apart: clear communication, responsive support, practical security, and strategic guidance tailored to growing businesses.",
    url: "/why-choose-us",
  },
};

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content">
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Why Choose Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              QuadTech Consulting is built for teams that want an IT partner
              they can trust, talk to, and rely on. Here’s what you can expect
              when we work together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0d9488] text-white rounded-lg hover:bg-[#14b8a6] transition-colors duration-200 font-semibold shadow-lg"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors duration-200 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <About />
        <Testimonials />
        <WhoWeServe />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
