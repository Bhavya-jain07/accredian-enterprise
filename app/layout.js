import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics.",
  keywords: "enterprise learning, upskilling, IIT, IIM, corporate training, L&D",
  openGraph: {
    title: "Accredian Enterprise",
    description: "India's most trusted enterprise learning platform.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
