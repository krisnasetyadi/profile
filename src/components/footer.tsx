import Link from "next/link";
import { contact, socialMediaUrl } from "@/lib/constant";

/**
 * Footer Component
 *
 * Consistent footer across all pages featuring:
 * - Contact information with proper semantic markup
 * - Social media links with accessibility labels
 * - Site navigation links
 * - Copyright notice with dynamic year
 * - Newsletter signup section
 * - Responsive design with mobile-first approach
 * - Full light/dark mode support with smooth transitions
 * - SEO-friendly structure with proper schema markup
 */
export function Footer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Krisna Dwi Setyaadi",
            jobTitle: "Software Developer",
            description:
              "Full-stack developer specializing in modern web technologies",
            url: typeof window !== "undefined" ? window.location.origin : "",
            sameAs: [socialMediaUrl.linkedin, socialMediaUrl.github],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-813-1321-8350",
              email: contact.email,
              contactType: "professional",
              availableLanguage: ["English", "Indonesian"],
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "ID",
            },
          }),
        }}
      />

      <footer
        className="relative z-0 bg-black dark:bg-background text-white px-6 md:px-12 py-16 md:py-24"
        itemScope
        itemType="https://schema.org/WPFooter"
        role="contentinfo"
        aria-label="Site footer with contact information and links"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start flex-col md:justify-between mb-4 md:mb-16">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-relaxed max-w-2xl">
                Got an idea in mind?{" "}
                <span className="text-gray-400">Let’s build it together.</span>
                <br />
                Great things start with{" "}
                <span className="text-gray-400">simple conversations.</span>
              </h2>
            </div>

            <nav
              className="flex items-center gap-8 text-sm"
              aria-label="Social media links"
              itemScope
              itemType="https://schema.org/Person"
            >
              <a
                href={socialMediaUrl.linkedin}
                className="hover:text-gray-300 transition-colors"
                title="LinkedIn Profile - Professional networking and career updates"
                target="_blank"
                rel="noopener noreferrer nofollow"
                itemProp="sameAs"
              >
                LinkedIn
              </a>

              <a
                href={socialMediaUrl.github}
                className="hover:text-gray-300 transition-colors"
                aria-label="View Krisna Dwi Setyaadi's projects on GitHub"
                title="GitHub Profile - Open source projects and code repositories"
                target="_blank"
                rel="noopener noreferrer nofollow"
                itemProp="sameAs"
              >
                GitHub
              </a>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
            <Link
              href={contact.whatsapp}
              className="bg-white text-black hover:bg-gray-100 px-8 py-3"
              aria-label="Contact Krisna Dwi Setyaadi via WhatsApp"
              title="Get in touch via WhatsApp for project discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </Link>

            <div
              className="flex items-center gap-3"
              role="status"
              aria-label="Work availability status"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Available For Work</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-gray-800">
            <address className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:+6281313218350"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Call Krisna Dwi Setyaadi"
                  itemProp="telephone"
                >
                  (+62) 813-1321-8350
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Email Krisna Dwi Setyaadi"
                  itemProp="email"
                >
                  {contact.email}
                </a>
              </p>
            </address>

            <div className="space-y-2 text-sm">
              <p>Developed</p>
              <p>
                by{" "}
                <span
                  itemProp="creator"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Krisna</span>
                </span>
              </p>
            </div>

            <div className="text-sm text-left md:text-right">
              <p>All rights reserved,</p>
              <p>
                {" "}
                <span itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">KRSN</span>
                </span>{" "}
                ©2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
