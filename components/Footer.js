import Link from "next/link";

const footerLinks = {
  Platform: ["Features", "Analytics Dashboard", "Mentorship", "Certifications", "Integrations"],
  Programs: ["Data Science & AI", "Product Management", "Cloud & DevOps", "Leadership", "Digital Marketing"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Top CTA bar */}
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 py-12">
        <div className="section-container text-center">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Ready to build a future-proof workforce?
          </h3>
          <p className="text-blue-100/70 mb-7 text-base">
            Join 200+ enterprises already upskilling with Accredian.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-700 font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Demo
            </a>
            <a
              href="mailto:enterprise@accredian.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">A</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                Accredian
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              India&apos;s most trusted enterprise learning platform. Powered by IITs, IIMs, and global universities.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-8 h-8 bg-gray-800 hover:bg-brand-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-xs text-gray-400 hover:text-white font-bold">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-200 text-sm transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with ❤️ for enterprise learners across India
          </p>
        </div>
      </div>
    </footer>
  );
}
