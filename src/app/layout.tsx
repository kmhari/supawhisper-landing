import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SupaWhisper - Free Audio Transcription for Mac",
  description: "A free, open-source macOS application that captures and transcribes your voice in real-time. Just bring your own Deepgram API key and start transcribing.",
  keywords: "free audio transcription, mac app, voice to text, speech recognition, macOS, real-time transcription, productivity, deepgram, open source",
  openGraph: {
    title: "SupaWhisper - Free Audio Transcription for Mac",
    description: "Transform your voice into text instantly with our free macOS app. BYO Deepgram API key.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SupaWhisper - Free Audio Transcription for Mac",
    description: "Transform your voice into text instantly with our free macOS app. BYO Deepgram API key.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <TempoInit />
        </Providers>
      </body>
    </html>
  );
}
