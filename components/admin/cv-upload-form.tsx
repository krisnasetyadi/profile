"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CVApi } from "@/services";
import { toastManager } from "@/lib/toast";

interface CvRecord {
  id: number;
  name: string;
  is_default: string;
}

export function CvUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [defaultCvId, setDefaultCvId] = useState<number | null>(null);

  useEffect(() => {
    CVApi.get<{ Data: CvRecord[] }>()
      .then((response) => {
        const defaultCv = response.Data?.find((cv) => cv.is_default === "Y");
        if (defaultCv) setDefaultCvId(defaultCv.id);
      })
      .catch(() => {
        // no existing CV yet, the next upload will create the first one
      });
  }, []);

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
      formData.append("is_default", "Y");
      if (defaultCvId) {
        formData.append("id", String(defaultCvId));
      }

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
