"use client";

const steps = [
  {
    step: "01",
    title: "Discovery & Needs Analysis",
    description:
      "We start with a deep-dive into your organization's skill gaps, business objectives, and workforce structure to design the right learning strategy.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Custom Program Design",
    description:
      "Our academic partners co-create a curriculum tailored to your industry context, role requirements, and strategic goals — no off-the-shelf solutions.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Cohort Launch & Delivery",
    description:
      "Structured cohorts launch with live sessions, mentor assignments, and our adaptive platform — all accessible on web and mobile.",
    icon: "🚀",
  },
  {
    step: "04",
    title: "Track, Measure & Optimize",
    description:
      "Real-time dashboards give you full visibility into engagement, completion, and ROI. Monthly reviews keep programs on track.",
    icon: "📊",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">
            ✦ Process
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            How Accredian Enterprise Works
          </h2>
          <p className="text-gray-500 text-lg">
            From kickoff to ROI — a proven four-step engagement model that delivers results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-white border-2 border-brand-200 group-hover:border-brand-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-brand-200 transition-all duration-300">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center font-display">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-gray-900 text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary">
            Start Your Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
