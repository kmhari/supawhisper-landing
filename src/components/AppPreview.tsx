"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AppPreviewProps {
  className?: string;
}

export default function AppPreview({ className }: AppPreviewProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      <div className="relative">
        {/* macOS Window Frame */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              SupaWhisper
            </span>
          </div>
        </div>

        {/* App Content */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-b-lg shadow-2xl overflow-hidden">
          <div className="p-8">
            {/* Recording Interface */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                {/* Animated rings */}
                <div className="absolute inset-0 -m-2">
                  <div className="w-full h-full rounded-full border-2 border-blue-400 dark:border-blue-600 opacity-25 animate-ping" />
                </div>
                <div className="absolute inset-0 -m-4">
                  <div className="w-full h-full rounded-full border-2 border-purple-400 dark:border-purple-600 opacity-20 animate-ping animation-delay-150" />
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Recording...
              </p>
            </div>

            {/* Waveform Visualization */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-1 h-16">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-blue-500 to-purple-600 rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Transcription Output */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-inner">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed animate-pulse">
                "The quick brown fox jumps over the lazy dog. This is a sample
                transcription showing real-time voice to text conversion..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 blur-3xl -z-10" />
    </div>
  );
}