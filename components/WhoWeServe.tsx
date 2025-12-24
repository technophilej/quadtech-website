import { Briefcase, Building2, Lightbulb, Users } from "lucide-react";

export default function WhoWeServe() {
  const items = [
    {
      icon: Briefcase,
      title: "Small and Growing Businesses",
      description:
        "Organizations that need reliable day-to-day IT support without building a full internal team.",
    },
    {
      icon: Building2,
      title: "Professional Services Firms",
      description:
        "Accounting, legal, financial, and other service-based businesses that rely on stable systems and secure data.",
    },
    {
      icon: Lightbulb,
      title: "Startups and Founders",
      description:
        "Teams that want thoughtful guidance on tools, security, and infrastructure as they grow and change.",
    },
    {
      icon: Users,
      title: "Businesses That Need IT Guidance",
      description:
        "Leaders who want a trusted partner to explain options in plain language and help them make better technology decisions.",
    },
  ];

  return (
    <section
      id="who-we-serve"
      className="py-12 md:py-20 bg-gradient-to-br from-white via-slate-50 to-white"
      aria-label="Who We Serve"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            A Good Fit for Teams That Value Reliable IT
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            QuadTech is a good match for businesses that want practical support,
            honest advice, and a partner who understands the realities of day to
            day work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900/90 text-white flex items-center justify-center mb-4">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
