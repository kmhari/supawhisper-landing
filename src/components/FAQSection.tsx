"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why is SupaWhisper free?",
    answer: "SupaWhisper is free because you bring your own Deepgram API key for transcription. This means you only pay for what you use directly to Deepgram, with no markup or subscription fees from us. We believe in transparent, fair pricing.",
  },
  {
    question: "What is a Deepgram API key and how do I get one?",
    answer: "Deepgram is the AI service that powers our transcription. You can get a free API key by signing up at deepgram.com. They offer $200 in free credits to start, which is enough for thousands of minutes of transcription.",
  },
  {
    question: "How much does Deepgram cost?",
    answer: "Deepgram offers very competitive pricing at around $0.0043 per minute for standard transcription. With their $200 free credit, you can transcribe approximately 46,500 minutes before paying anything. After that, you only pay for what you use.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes! Your audio is sent directly from your Mac to Deepgram's secure servers for transcription. We never store or have access to your audio, transcriptions, or API key. Everything stays between you and Deepgram.",
  },
  {
    question: "What makes SupaWhisper different from other transcription apps?",
    answer: "SupaWhisper is built specifically for macOS with native performance and a beautiful, minimalist interface. It offers real-time transcription with stunning waveform visualization, keyboard shortcuts for seamless workflow integration, and it's completely free.",
  },
  {
    question: "What audio formats does SupaWhisper support?",
    answer: "SupaWhisper supports real-time microphone input and can import common audio formats including MP3, WAV, M4A, and AAC. You can also transcribe system audio.",
  },
  {
    question: "Can I export my transcriptions?",
    answer: "Absolutely! You can export transcriptions in multiple formats including plain text, markdown, PDF, and Word documents. All export features are included free.",
  },
  {
    question: "What languages are supported?",
    answer: "SupaWhisper supports all languages that Deepgram supports, including English, Spanish, French, German, Portuguese, Russian, Japanese, Chinese, and many more. Check Deepgram's documentation for the full list.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6 text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about SupaWhisper
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-800 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <h3 className="text-lg font-light text-black dark:text-white pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                )}
              >
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@supawhisper.com"
            className="text-blue-600 dark:text-blue-400 hover:underline font-light"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}