import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { miranoExtended } from "@/lib/fonts";
import { getPhysicianSchema } from "@/lib/schema";
import "./globals.css";

const siteTitle = "Dr. Giorgio Incarbone | Neurochirurgo Milano e Novara";
const siteDescription =
  "Neurochirurgo con oltre 1330 interventi. Specialista in neurochirurgia cranica, spinale, funzionale / neuromodulatoria e vascolare. Consulenze a Milano, Arese e Novara.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.giorgioincarbone.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "it_IT",
    siteName: "Dr. Giorgio Incarbone",
    url: "/",
    images: [
      {
        url: "/logo-giorgio.png",
        width: 800,
        height: 200,
        alt: "Dr. Giorgio Incarbone — Neurochirurgo",
      },
    ],
  },
  icons: {
    icon: "/logo-giorgio.png",
    apple: "/logo-giorgio.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "neurochirurgo",
    "neurochirurgia cranica",
    "neurochirurgia spinale",
    "neurochirurgia funzionale",
    "neurochirurgia vascolare",
    "neuromodulazione",
    "DBS",
    "Milano",
    "Novara",
    "Dr. Giorgio Incarbone",
    "second opinion neurochirurgica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const physicianSchema = getPhysicianSchema();

  return (
    <html
      lang="it"
      className={`${miranoExtended.variable} ${miranoExtended.className} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Vai al contenuto principale
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
