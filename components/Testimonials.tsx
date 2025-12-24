import { CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const items = [
    {
      title: "Clear Communication",
      description:
        "Clients often look for an IT partner who explains options in plain language and sets realistic expectations.",
    },
    {
      title: "Reliable Day to Day Support",
      description:
        "Leaders want to know that when something breaks, they have a responsive team they can contact for help.",
    },
    {
      title: "Practical Security Guidance",
      description:
        "Most businesses need help understanding where they are at risk and which improvements matter most.",
    },
    {
      title: "A Plan for the Future",
      description:
        "Many clients value a simple roadmap that connects technology decisions to their business goals.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 bg-white"
      aria-label="What Clients Typically Look For in an IT Partner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4">
            What Clients Typically Look For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            When Choosing an IT Partner
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            These are common themes we hear from businesses when they describe
            what matters most in an IT relationship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-3xl border border-slate-200/80 p-4 md:p-6 h-full flex flex-col"
            >
              <div className="w-9 h-9 rounded-full bg-[#0d9488]/10 flex items-center justify-center mb-4">
                <CheckCircle2
                  className="text-[#0d9488]"
                  size={18}
                  aria-hidden="true"
                />
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
