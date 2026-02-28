import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mdmagnuson-creator.github.io/opencode-toolkit-website";

export const metadata: Metadata = {
  title: {
    default: "yo, go — AI Agents for Software Development",
    template: "%s | yo, go",
  },
  description:
    "64 specialized agents working together to build software. An agent system for opencode.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "yo, go",
    title: "yo, go — AI Agents for Software Development",
    description: "64 specialized agents working together to build software. An agent system for opencode.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "yo, go — AI Agents for Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yo, go — AI Agents for Software Development",
    description: "64 specialized agents working together to build software. An agent system for opencode.",
    images: ["/og/default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script to check system preference and set dark mode before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
