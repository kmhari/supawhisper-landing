"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Mic, Settings } from "lucide-react";

interface TranscriptionDemoProps {
  className?: string;
}

const TranscriptionDemo = ({ className = "" }: TranscriptionDemoProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [waveformValues, setWaveformValues] = useState<number[]>(
    Array(40).fill(5),
  );
  const [transcriptionText, setTranscriptionText] = useState("");

  // Sample transcription text to simulate real-time transcription
  const sampleText =
    "Welcome to SupaWhisper. This is a demonstration of our real-time transcription capabilities. Our advanced AI accurately captures your speech and converts it to text instantly.";

  // Simulate waveform animation when recording
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRecording) {
      interval = setInterval(() => {
        setWaveformValues((prev) => {
          return prev.map(() => Math.floor(Math.random() * 30) + 5);
        });
      }, 100);

      // Simulate gradual text appearance
      let charIndex = 0;
      const textInterval = setInterval(() => {
        if (charIndex < sampleText.length) {
          setTranscriptionText(sampleText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(textInterval);
        }
      }, 50);

      return () => {
        clearInterval(interval);
        clearInterval(textInterval);
      };
    } else {
      // Reset waveform to flat line when not recording
      setWaveformValues(Array(40).fill(5));
      return () => {};
    }
  }, [isRecording]);

  const toggleRecording = () => {
    if (!isRecording) {
      setTranscriptionText("");
    }
    setIsRecording(!isRecording);
  };

  return (
    <div
      className={`bg-black rounded-xl shadow-2xl overflow-hidden ${className}`}
    >
      {/* App header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-400 text-sm">Recording</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Settings size={16} />
        </Button>
      </div>

      {/* Waveform visualization */}
      <div className="p-6 flex justify-center items-center h-32 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="flex items-center justify-center w-full h-full space-x-1">
          {waveformValues.map((value, index) => (
            <div
              key={index}
              className="w-1 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100"
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Transcription text area */}
      <div className="p-6 h-40 overflow-y-auto bg-gray-900/50">
        <p className="text-gray-200 leading-relaxed">
          {transcriptionText ||
            "Press the record button or Space key to start transcribing..."}
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center p-4 border-t border-gray-800 bg-black">
        <Button
          onClick={toggleRecording}
          className={`rounded-full w-16 h-16 flex items-center justify-center ${isRecording ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          <Mic size={24} />
        </Button>
        <div className="absolute right-8 flex space-x-4">
          <div className="flex items-center">
            <span className="text-gray-400 text-xs mr-2">Stop</span>
            <kbd className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded">
              ⌘Space
            </kbd>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-xs mr-2">Cancel</span>
            <kbd className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded">
              Esc
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptionDemo;
