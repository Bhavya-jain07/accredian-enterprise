"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Enterprise Clients", icon: "🏢" },
  { value: 94, suffix: "%+", label: "Avg. Completion Rate", icon: "✅" },
  { value: 500, suffix: "+", label: "Expert Mentors", icon: "🧑‍🏫" },
  { value: 50000, suffix: "+", label: "Learners Upskilled", icon: "👩‍💻" },
  { value: 3.8, suffix: "x", label: "Average ROI", icon: "📈", isFloat: true },
  { value: 50, suffix: "+", label: "Programs Offered", icon: "🎓" },
];

function Counter({ value, suffix, isFloat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isFloat]);

  const display = isFloat ? count.toFixed(1) : count.toLocaleString();
  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Impact at Scale
          </h2>
          <p className="text-blue-200/70 text-lg">
            Numbers that reflect our commitment to enterprise learning excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1">
                <Counter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              </div>
              <p className="text-blue-200/60 text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
