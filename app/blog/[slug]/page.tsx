import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { siteUrl } from "@/lib/constant";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return {};

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Krisna Dwi Setyaadi`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: "Krisna Dwi Setyaadi",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = getPostBySlug(slug);
  const url = `${siteUrl}/blog/${post.slug}`;

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <article className="max-w-3xl mx-auto prose dark:prose-invert">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              url,
              author: {
                "@type": "Person",
                name: "Krisna Dwi Setyaadi",
                url: siteUrl,
              },
            }),
          }}
        />
        <h1>{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <MDXRemote source={post.content} />
      </article>
    </section>
  );
}
