import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRAVICE Abogados Laboralistas | Asesoría y Blindaje Laboral",
  description:
    "PRAVICE ofrece servicios legales especializados en derecho laboral: asesoría preventiva, outsourcing laboral, defensa en procesos y auditorías. Blindamos su empresa para minimizar riesgos y garantizar cumplimiento legal.",
  keywords: [
    "abogados laboralistas",
    "derecho laboral",
    "asesoría laboral empresarial",
    "outsourcing laboral",
    "defensa procesos laborales",
    "auditoría laboral",
    "blindaje empresarial",
    "asesoría preventiva laboral",
  ],
  authors: [
    {
      name: "PRAVICE Abogados Laboralistas",
      url: "https://www.pravice.abogadoslaboralistas.comq",
    },
  ],
  creator: "PRAVICE Abogados Laboralistas",
  themeColor: "#004a80",
  openGraph: {
    title: "PRAVICE Abogados Laboralistas | Asesoría y Blindaje Laboral",
    description:
      "Servicios legales especializados en derecho laboral: asesoría preventiva, outsourcing laboral, defensa en procesos y auditorías.",
    url: "https://www.pravice.abogadoslaboralistas.com",
    siteName: "PRAVICE Abogados Laboralistas",
    images: [
      {
        url: "https://www.pravice.abogadoslaboralistas.com",
        width: 1200,
        height: 630,
        alt: "PRAVICE Abogados Laboralistas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRAVICE Abogados Laboralistas",
    description:
      "Servicios legales especializados en derecho laboral: asesoría preventiva, outsourcing laboral, defensa en procesos y auditorías.",
    images: ["https://pravice.abogadoslaboralistas.com/og-image.jpg"],
    creator: "@pravice_abogados",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
