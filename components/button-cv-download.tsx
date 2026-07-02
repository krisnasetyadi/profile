"use client";
import { contact } from "@/lib/constant";
import { Button } from "./ui/button";
import { ArrowDownToLine, Copy } from "lucide-react";
import { CheckedIcon, FailedIcon } from "./check-icon";
import { CVApi } from "@/services";
import { toastManager } from "@/lib/toast";
import { useState } from "react";

export function ButtonCvDownload() {
  const [copied, setCopied] = useState(false);
  const [isDownload, setIsDownload] = useState({
    loading: false,
    error: false,
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = async () => {
    setIsDownload({
      loading: true,
      error: false,
    });

    try {
      // Try API download first
      await CVApi.download();
      toastManager.showSuccess(
        "Download successful",
        "The file has been downloaded successfully.",
      );
      setIsDownload({
        loading: false,
        error: false,
      });
    } catch (apiError) {
      console.warn("API download failed, trying fallback:", apiError);

      try {
        // Fallback to static file
        const response = await fetch(
          "/Krisna%20Dwi%20Setyaadi%20-%20Resume.pdf",
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Krisna Dwi Setyaadi - Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        toastManager.showSuccess(
          "Download successful",
          "CV downloaded from backup file.",
        );
        setIsDownload({
          loading: false,
          error: false,
        });
      } catch (fallbackError) {
        console.error("Fallback download also failed:", fallbackError);

        toastManager.showError(
          "Download Failed",
          "Unable to download CV. Please try again later.",
        );
        setIsDownload({
          loading: false,
          error: true,
        });

        setTimeout(() => {
          setIsDownload({
            loading: false,
            error: false,
          });
        }, 3000);
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-14">
      <div className="flex items-center gap-3 text-sm">
        <span>{contact.email}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyEmail}
          className="h-6 w-6"
        >
          <Copy className="h-3 w-3" />
        </Button>
        {copied && <CheckedIcon />}
      </div>
      <div className="flex items-center  gap-4 text-sm ">
        <Button
          variant="ghost"
          onClick={handleDownloadCV}
          className="flex justify-start md:justify-normal items-center gap-2 text-sm p-0 hover:bg-background"
          disabled={isDownload.loading}
        >
          <span className="hover:underline hover:underline-offset-4">
            {isDownload.loading ? "downloading..." : "download cv"}
          </span>
          <ArrowDownToLine className="h-3 w-3" />
        </Button>
        {isDownload.error && <FailedIcon />}
      </div>
    </div>
  );
}
