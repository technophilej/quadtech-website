import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import { resourcePosts } from "@/lib/resources";
import { formatDateShort } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

export const metadata: Metadata = {
  title: "Resources | QuadTech Consulting",
  description:
    "Practical IT and cybersecurity guides from QuadTech Consulting. Learn best practices for security, cloud, email migrations, and IT operations.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | QuadTech Consulting",
    description:
      "Practical IT and cybersecurity guides on security, cloud, email migrations, and IT operations from QuadTech Consulting.",
    url: "/resources",
  },
};

export default function ResourcesPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(resourcePosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = resourcePosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Resources
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
              Short, practical guides to help you make confident IT decisions,
              written for business owners and teams.
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-200 p-6 focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                  aria-label={`Read ${post.title}`}
                >
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                    <span>{formatDateShort(post.date)}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#1e3a5f] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-1 transform transition-transform duration-200">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </Link>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/resources"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
