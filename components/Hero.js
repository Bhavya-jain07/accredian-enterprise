"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-view").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-up");
                el.classList.remove("opacity-0");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-400/15 rounded-full blur-3xl animate-pulse-slow animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-700/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-view opacity-0 mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            India&apos;s #1 Enterprise Learning Platform
          </div>

          {/* Headline */}
          <h1 className="animate-on-view opacity-0 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            Upskill Your Workforce{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-brand-300 to-accent-400 bg-clip-text text-transparent">
                at Scale
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C50 3 100 1 150 3C200 5 250 3 298 9"
                  stroke="#fb923c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-on-view opacity-0 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with IITs, IIMs, and global universities to upskill your enterprise
            teams with curated programs, live mentorship, and real-time analytics that
            deliver measurable ROI.
          </p>

          {/* CTAs */}
          <div className="animate-on-view opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-brand-700 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base"
            >
              Schedule a Free Demo
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 text-base"
            >
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              See How It Works
            </a>
          </div>

          {/* Social proof strip */}
          <div className="animate-on-view opacity-0 flex flex-wrap justify-center gap-6 sm:gap-10 text-white/70 text-sm">
            {[
              { value: "200+", label: "Enterprise Clients" },
              { value: "94%+", label: "Completion Rate" },
              { value: "500+", label: "Expert Mentors" },
              { value: "50+", label: "Programs" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-display font-bold text-white">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="animate-on-view opacity-0 mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <div className="flex-1 bg-white/10 rounded-md h-5 mx-4" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Active Learners", value: "1,247", change: "+12%" },
                  { label: "Avg. Completion", value: "94.3%", change: "+5%" },
                  { label: "ROI Delivered", value: "3.8x", change: "+0.4x" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-3">
                    <p className="text-white/50 text-xs mb-1">{item.label}</p>
                    <p className="text-white font-bold font-display text-lg">{item.value}</p>
                    <p className="text-green-400 text-xs font-medium">{item.change} this month</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-3 h-24 flex items-end gap-1 px-4">
                {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-brand-500 to-brand-300 rounded-t-sm opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            {/* Floating badges */}
            <div className="hidden sm:block absolute -left-8 top-1/3 bg-white rounded-xl px-4 py-3 shadow-xl animate-float">
              <p className="text-xs text-gray-500">Latest enrollment</p>
              <p className="text-sm font-bold text-gray-900">Data Science • TCS</p>
            </div>
            <div className="hidden sm:block absolute -right-8 bottom-1/3 bg-white rounded-xl px-4 py-3 shadow-xl animate-float animate-delay-300">
              <p className="text-xs text-gray-500">Certification issued</p>
              <p className="text-sm font-bold text-gray-900">IIT Delhi • 23 learners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
