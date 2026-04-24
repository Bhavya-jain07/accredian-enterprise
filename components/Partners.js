const partners = [
  { name: "IIT Delhi", type: "IIT", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "IIT Bombay", type: "IIT", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "IIT Madras", type: "IIT", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "IIM Ahmedabad", type: "IIM", color: "bg-red-50 text-red-700 border-red-100" },
  { name: "IIM Bangalore", type: "IIM", color: "bg-red-50 text-red-700 border-red-100" },
  { name: "IIM Calcutta", type: "IIM", color: "bg-red-50 text-red-700 border-red-100" },
  { name: "SP Jain", type: "B-School", color: "bg-amber-50 text-amber-700 border-amber-100" },
  { name: "XLRI", type: "B-School", color: "bg-amber-50 text-amber-700 border-amber-100" },
  { name: "Google", type: "Tech", color: "bg-green-50 text-green-700 border-green-100" },
  { name: "Microsoft", type: "Tech", color: "bg-purple-50 text-purple-700 border-purple-100" },
  { name: "AWS", type: "Tech", color: "bg-orange-50 text-orange-700 border-orange-100" },
  { name: "IBM", type: "Tech", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge mb-4">✦ Academic Partners</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Certified by India&apos;s{" "}
            <span className="gradient-text">Finest Institutions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Our programs are co-designed and certified by India&apos;s most prestigious academic institutions and global technology leaders.
          </p>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`${partner.color} border rounded-xl px-5 py-3 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <p className="font-display font-bold text-sm">{partner.name}</p>
              <p className="text-xs opacity-60">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* Credential highlight */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-sm">
          <div className="text-4xl mb-4">🏅</div>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
            Globally Recognized Credentials
          </h3>
          <p className="text-gray-500 text-base leading-relaxed">
            Every learner receives a verifiable, shareable credential from our partner institutions —
            recognized by employers across India and internationally. These certifications are
            career-defining and tied to real skill outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
