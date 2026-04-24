"use client";

const companies = [
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra",
  "Deloitte", "Accenture", "Cognizant", "Capgemini", "IBM",
];

export default function TrustedBy() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="section-container">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Trusted by 200+ leading enterprises across India
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          <div className="flex gap-12 items-center overflow-hidden">
            <div className="flex gap-12 items-center animate-marquee whitespace-nowrap min-w-full">
              {[...companies, ...companies].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200"
                >
                  <span className="text-gray-700 font-display font-semibold text-sm tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
