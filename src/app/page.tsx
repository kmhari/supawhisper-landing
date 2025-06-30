"use client";

import AppStoreBadge from "@/components/AppStoreBadge";
import DownloadButton from "@/components/DownloadButton";
import FAQSection from "@/components/FAQSection";
import FeatureCard from "@/components/FeatureCard";
import PricingSection from "@/components/PricingSection";
import TranscriptionDemo from "@/components/TranscriptionDemo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  Keyboard,
  Mic,
  Palette,
  Settings,
  Zap
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-6 pt-32 pb-24 lg:pt-48 lg:pb-40">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400 border-0 rounded-full px-4 py-2 text-sm font-medium">
              Now Available for macOS
            </Badge>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-8 text-black dark:text-white leading-none">
              SupaWhisper
            </h1>

            <p className="text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed">
              Instant Audio Transcription for Mac
            </p>

            <p className="text-lg lg:text-xl font-light text-gray-500 dark:text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              A sleek, minimalist desktop application that captures and
              transcribes your voice in real-time with high accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <DownloadButton className="px-8 py-4 text-base" />
              <Button
                variant="ghost"
                size="lg"
                className="px-8 py-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full font-medium text-base transition-all duration-200"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
              <div>macOS 12.0+</div>
              <div>•</div>
              <div>100% Free</div>
              <div>•</div>
              <div>BYO API Key</div>
            </div>
          </div>

          {/* App Preview */}
          
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
              See It In Action
            </h2>
            <p className="text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience real-time transcription with beautiful waveform
              visualization
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <TranscriptionDemo className="w-full" />
          </div>

          <div className="text-center">
            <p className="text-base text-gray-500 dark:text-gray-500 font-light">
              Press{" "}
              <kbd className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-mono text-gray-700 dark:text-gray-300">
                Space
              </kbd>{" "}
              to start recording,{" "}
              <kbd className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-mono text-gray-700 dark:text-gray-300 ml-1">
                ⌘Space
              </kbd>{" "}
              to stop
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
              Powerful Features
            </h2>
            <p className="text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need for seamless audio transcription
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            <FeatureCard
              icon={Mic}
              title="Real-time Transcription"
              description="Instant transcription delivered right on your Mac without leaving your workflow. High accuracy speech recognition powered by advanced AI."
              badge="AI Powered"
            />

            <FeatureCard
              icon={Zap}
              title="Beautiful Waveform"
              description="Clean, floating interface with vibrant audio waveform display that responds to your voice in real-time with stunning visual feedback."
            />

            <FeatureCard
              icon={Keyboard}
              title="Keyboard Shortcuts"
              description="One-click recording with keyboard shortcut support. Press Space to toggle recording and stay in your flow without interruption."
              badge="Productivity"
            />

            <FeatureCard
              icon={Palette}
              title="Modern Design"
              description="Modern gradient UI with dark mode support and unobtrusive design that fits perfectly with your Mac's aesthetic."
            />

            <FeatureCard
              icon={Settings}
              title="Simple Settings"
              description="Simple settings panel for customization and preferences. Configure the app exactly how you want it to work."
            />

            <FeatureCard
              icon={Download}
              title="Native Mac App"
              description="Built specifically for macOS with native performance, system integration, and the familiar Mac experience you expect."
              badge="Native"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Mac users who are already using SupaWhisper to
            capture their thoughts instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <DownloadButton className="px-8 py-4 text-base" />
            <a
              href="https://console.deepgram.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="px-8 py-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full font-medium text-base transition-all duration-200"
              >
                Get API Key
              </Button>
            </a>
          </div>

          <p className="text-base text-gray-500 dark:text-gray-500 font-light">
            100% Free • No subscriptions • Just bring your Deepgram API key
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-light mb-2 text-black dark:text-white">
                SupaWhisper
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-500 font-light mb-4">
                Instant audio transcription for Mac
              </p>
              <AppStoreBadge />
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-base text-gray-500 dark:text-gray-500">
              <a
                href="/privacy-policy"
                className="hover:text-black dark:hover:text-white transition-colors font-light"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-black dark:hover:text-white transition-colors font-light"
              >
                Terms of Service
              </a>
              <a
                href="mailto:support@supawhisper.com"
                className="hover:text-black dark:hover:text-white transition-colors font-light"
              >
                Support
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <p className="text-base text-gray-500 dark:text-gray-500 font-light">
              &copy; 2025 SupaWhisper. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
