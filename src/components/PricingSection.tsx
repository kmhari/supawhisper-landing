"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Key, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
            Completely Free, Forever
          </h2>
          <p className="text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            SupaWhisper is 100% free. Just bring your own Deepgram API key and start transcribing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 border-2 border-blue-500 dark:border-purple-500 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Open Source & Free
              </div>
              <h3 className="text-3xl font-light mb-4 text-black dark:text-white">
                All Features Included
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                No subscriptions, no hidden fees, no limits
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Unlimited transcriptions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Real-time voice to text</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">All export formats</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Custom keyboard shortcuts</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Beautiful waveform display</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Dark mode support</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Regular updates</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Community support</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 rounded-full font-medium text-base transition-all duration-200 border-0">
                Download Now
              </Button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Key className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-black dark:text-white">
                BYO API Key
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Use your own Deepgram API key for transcription
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-black dark:text-white">
                Privacy First
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Your data never leaves your device
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-black dark:text-white">
                No Limits
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                Transcribe as much as you want
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}