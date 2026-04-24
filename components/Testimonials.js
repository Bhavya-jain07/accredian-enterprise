"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    author: "Priya Sharma",
    role: "Chief People Officer",
    company: "TechCorp India",
    avatar: "PS",
    color: "bg-blue-500",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    author: "Rajesh Kumar",
    role: "VP Engineering",
    company: "FinServ Solutions",
    avatar: "RK",
    color: "bg-purple-500",
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    author: "Anita Desai",
    role: "Global Head of L&D",
    company: "Meridian Group",
    avatar: "AD",
    color: "bg-green-500",
  },
  {
    quote:
      "The custom curriculum they designed for our product teams was exceptional. In just one cohort, we saw measurable improvements in product velocity and decision quality.",
    author: "Vikram Nair",
    role: "CHRO",
    company: "BuildFast Technologies",
    avatar: "VN",
    color: "bg-orange-500",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">✦ Testimonials</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Loved by L&D Leaders &{" "}
            <span className="gradient-text">CHROs</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Hear from the leaders who transformed their organizations with Accredian Enterprise.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative bg-gray-50 border rounded-2xl p-7 transition-all duration-300 cursor-pointer card-hover ${
                active === i
                  ? "border-brand-300 bg-brand-50 shadow-lg shadow-brand-100"
                  : "border-gray-100 hover:border-gray-200"
              }`}
              onClick={() => setActive(i)}
            >
              {/* Quote mark */}
              <div className="text-4xl text-brand-200 font-serif leading-none mb-4 select-none">"</div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                active === i ? "bg-brand-600 w-6" : "bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
