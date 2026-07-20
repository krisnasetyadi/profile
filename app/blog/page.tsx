import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/constant";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | Krisna Dwi Setyaadi",
  description:
    "Writing on software development, research, and publications by Krisna Dwi Setyaadi.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    siteName: "Krisna Dwi Setyaadi",
    title: "Blog | Krisna Dwi Setyaadi",
    description:
      "Writing on software development, research, and publications by Krisna Dwi Setyaadi.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">blog.</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                  <time
                    dateTime={post.date}
                    className="text-xs text-muted-foreground"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
