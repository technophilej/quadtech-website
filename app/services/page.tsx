import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  categoryDescriptions,
  serviceCards,
  serviceCategoryOrder,
} from "@/lib/serviceCards";

export const metadata: Metadata = {
  title: "Services | QuadTech Consulting",
  description:
    "Explore QuadTech Consulting services including managed IT, cybersecurity, cloud solutions, backup and disaster recovery, VoIP, and strategic IT consulting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | QuadTech Consulting",
    description:
      "Explore managed IT, cybersecurity, cloud, backup and disaster recovery, VoIP, and IT consulting services from QuadTech Consulting.",
    url: "/services",
  },
};

export default function ServicesLandingPage() {
  const groups = serviceCategoryOrder
    .map((name) => ({
      name,
      items: serviceCards.filter((s) => s.category === name),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
              From proactive IT support to cybersecurity and cloud strategy, we
              help you build a reliable, secure foundation for growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0d9488] text-white rounded-lg hover:bg-[#14b8a6] transition-colors duration-200 font-semibold shadow-lg"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors duration-200 font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {groups.map((group) => (
              <section
                key={group.name}
                className="mb-16"
                aria-label={`${group.name} services`}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">
                    {group.name}
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl">
                    {categoryDescriptions[group.name]}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-200 p-6 focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent" />
                      </div>
                      <div className="mb-4 text-[#1e3a5f]">
                        <service.icon size={40} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#1e3a5f] transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-5 inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-1 transform transition-transform duration-200">
                        Learn More
                        <ArrowRight size={16} className="ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0f2744] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not sure where to start?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We'll review your current setup and recommend the best next steps
              based on your goals and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#0d9488] text-white rounded-lg hover:bg-[#14b8a6] transition-colors font-semibold shadow-lg"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
