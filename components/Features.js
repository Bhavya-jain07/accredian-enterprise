"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🎓",
    title: "IIT & IIM Certified Programs",
    description:
      "Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.",
    color: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics Dashboard",
    description:
      "Real-time analytics on learner progress, engagement metrics, and ROI reporting — all in one command center.",
    color: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🧑‍🏫",
    title: "Live 1:1 Mentorship",
    description:
      "1:1 live sessions with 500+ industry practitioners across AI/ML, Data Science, Product, and Leadership domains.",
    color: "bg-orange-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: "👥",
    title: "Cohort-Based Learning",
    description:
      "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.",
    color: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
  },
  {
    icon: "🎯",
    title: "Custom Program Design",
    description:
      "Tailor programs to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all.",
    color: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: "🏅",
    title: "Globally Recognized Credentials",
    description:
      "Verifiable, shareable credentials from partner institutions. Career-defining certifications recognized worldwide.",
    color: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🤖",
    title: "Adaptive Learning Engine",
    description:
      "AI-powered engine surfaces the right content at the right time, maximizing engagement and knowledge retention.",
    color: "bg-cyan-50",
    border: "border-cyan-100",
    iconBg: "bg-cyan-100",
  },
  {
    icon: "📈",
    title: "Dedicated Success Manager",
    description:
      "Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky.",
    color: "bg-indigo-50",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".feature-card").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-up");
                el.classList.remove("opacity-0", "translate-y-6");
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">
            ✦ Platform Features
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            The Operating System for{" "}
            <span className="gradient-text">Ambitious L&D Teams</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From curriculum design to analytics — everything your learning organization needs to deliver measurable impact at scale.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`feature-card opacity-0 translate-y-6 ${feature.color} ${feature.border} border rounded-2xl p-6 card-hover cursor-default`}
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
