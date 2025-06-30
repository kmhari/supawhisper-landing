"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  className?: string;
  variant?: "default" | "ghost";
  size?: "sm" | "lg";
  showIcon?: boolean;
}

export default function DownloadButton({
  className,
  variant = "default",
  size = "lg",
  showIcon = true,
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download - in production, this would trigger actual download
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      // Create a dummy download link
      const link = document.createElement("a");
      link.href = "#"; // In production: link to actual DMG file
      link.download = "SupaWhisper-1.0.0.dmg";
      link.click();
      
      // Reset state after 3 seconds
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);
    }, 2000);
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size={size}
      className={cn(
        variant === "default"
          ? "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
          : "",
        "rounded-full font-medium transition-all duration-200 border-0",
        className
      )}
    >
      {showIcon && (
        <>
          {isComplete ? (
            <Check className="w-4 h-4 mr-2" />
          ) : (
            <Download className={cn("w-4 h-4 mr-2", isDownloading && "animate-bounce")} />
          )}
        </>
      )}
      {isComplete ? "Downloaded!" : isDownloading ? "Downloading..." : "Download for Mac"}
    </Button>
  );
}