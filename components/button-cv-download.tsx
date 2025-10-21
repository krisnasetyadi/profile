"use client";
import { contact } from "@/lib/constant";
import { Button } from "./ui/button";
import { ArrowDownToLine, Copy } from "lucide-react";
import { CheckedIcon, FailedIcon } from "./check-icon";
import { CVApi } from "@/services";
import { toast } from "sonner";
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
    await CVApi.download()
      .then(() => {
        toast.success("Download successful", {
          description: "The file has been downloaded successfully.",
        });
        setIsDownload({
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        toast.error("Download Failed", {
          description:
            error?.originalMessage ||
            "Something went wrong during the download.",
        });
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
      });
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
