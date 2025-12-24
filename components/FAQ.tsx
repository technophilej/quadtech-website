type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How does onboarding with QuadTech work?",
    answer:
      "We start with a discovery call and an assessment of your current technology, then share a clear proposal with priorities and next steps. Once you approve, we schedule the work and keep you updated.",
  },
  {
    question: "How do you handle pricing and flexibility?",
    answer:
      "Pricing is based on the level of support, systems in scope, and the type of work you need. We explain costs in plain language and can start small, then adjust as your needs change.",
  },
  {
    question: "Can you work with our existing systems and vendors?",
    answer:
      "Yes. We often begin by stabilizing and improving what you already have, then discuss changes only when they make sense.",
  },
  {
    question: "How do you approach security?",
    answer:
      "We focus on practical steps like strong authentication, backups, updates, and user awareness. We review your current setup, recommend improvements, and help you build habits that reduce risk over time.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-10 md:py-14 bg-gradient-to-br from-slate-50 via-white to-slate-100"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Common Questions About Working With Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Clear answers to help you understand how we work, what to expect,
            and how we support your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6"
            >
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                {item.question}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
