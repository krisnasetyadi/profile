"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CVApi } from "@/services";
import { toastManager } from "@/lib/toast";

export function CvUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toastManager.showWarning("No file selected", "Choose a CV file first.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      await CVApi.updateCV(formData);
      toastManager.showSuccess(
        "CV updated",
        "The CV has been updated successfully.",
      );
      setFile(null);
    } catch (error) {
      toastManager.showError(
        "Update failed",
        "Unable to update the CV. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload new CV"}
      </Button>
    </form>
  );
}
