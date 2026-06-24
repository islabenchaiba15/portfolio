import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Islam Benchaiba | Full Stack Data Analyst",
  description: "Portfolio of Mohamed Islam Benchaiba, a Full Stack Data Analyst with a software engineering background. Specializing in connecting data sources, building ETL pipelines, star-schema modeling, and interactive dashboards.",
  keywords: [
    "Mohamed Islam Benchaiba",
    "Full Stack Data Analyst",
    "Data Analyst Algeria",
    "SQL Developer",
    "Power BI Dashboard",
    "Medallion Architecture",
    "ETL Data Pipelines",
    "n8n automation",
    "Python Data Analysis",
  ],
  authors: [{ name: "Mohamed Islam Benchaiba" }],
  openGraph: {
    title: "Mohamed Islam Benchaiba | Full Stack Data Analyst",
    description: "End-to-end data solutions: integration → pipelines → modeling → dashboards/automation.",
    type: "website",
    locale: "en_US",
    siteName: "Mohamed Islam Benchaiba Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-ink-black selection:bg-ink-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
