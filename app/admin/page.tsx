import { CvUploadForm } from "@/components/admin/cv-upload-form";

export default function AdminPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col gap-6 px-4 py-16">
      <h1 className="text-lg font-medium">Update CV</h1>
      <CvUploadForm />
    </div>
  );
}
