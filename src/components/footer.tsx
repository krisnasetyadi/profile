"use client";

import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/krisna",
      label: "LinkedIn",
      icon: Linkedin,
      username: "@krisna",
    },
    {
      href: "https://github.com/krisna",
      label: "GitHub",
      icon: Github,
      username: "@krisna",
    },
    {
      href: "https://twitter.com/krisna",
      label: "Twitter",
      icon: Twitter,
      username: "@krisna",
    },
  ];

  return (
    <section className="relative z-0 bg-black text-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start flex-col md:justify-between mb-4 md:mb-16">
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl leading-relaxed max-w-2xl">
              Got an idea in mind?{" "}
              <span className="text-gray-400">Let’s build it together.</span>
              <br />
              Great things start with{" "}
              <span className="text-gray-400">simple conversations.</span>
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a
              href={socialMediaUrl.linkedin}
              className="hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={socialMediaUrl.github}
              className="hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
          <Link
            href={contact.whatsapp}
            className="bg-white text-black hover:bg-gray-100 px-8 py-3"
          >
            Get in Touch
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">Available For Work</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-gray-800">
          <div className="space-y-2 text-sm">
            <p>(+62) 813-1321-8350</p>
            <p>{contact.email}</p>
          </div>

          <div className="space-y-2 text-sm">
            <p>Developed</p>
            <p>by Krisna</p>
          </div>

          <div className="text-sm text-left md:text-right">
            <p>All rights reserved,</p>
            <p>KRSN ©2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// <footer
//   className="bg-foreground text-background transition-colors duration-300"
//   role="contentinfo"
// >
//   <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
//     {/* Main Footer Content */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//       {/* Brand Section */}
//       <div className="lg:col-span-2 space-y-6">
//         <Link
//           href="/"
//           className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
//         >
//           <span className="text-2xl font-bold">KRSN</span>
//           <div className="h-2 w-2 rounded-full bg-primary"></div>
//         </Link>
//         <p className="text-background/80 text-lg leading-relaxed max-w-md">
//           Curious about what we can create together? Let's build something
//           extraordinary with code!
//         </p>
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//           <Button
//             asChild
//             className="bg-background text-foreground hover:bg-background/90 transition-colors duration-200"
//           >
//             <Link href="/contact" aria-label="Get in touch with Krisna">
//               Get in Touch
//             </Link>
//           </Button>
//           <div className="flex items-center gap-3">
//             <div
//               className="w-3 h-3 bg-green-500 rounded-full"
//               aria-hidden="true"
//             ></div>
//             <span className="text-sm">Available For Work</span>
//           </div>
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//         <nav className="space-y-3" aria-label="Footer navigation">
//           {footerLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="block text-background/80 hover:text-background transition-colors duration-200"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Contact Information */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold mb-4">Contact</h3>
//         <address className="not-italic space-y-3">
//           <div className="flex items-start gap-3">
//             <MapPin
//               className="h-4 w-4 text-background/60 mt-1 flex-shrink-0"
//               aria-hidden="true"
//             />
//             <span className="text-background/80">Remote, Worldwide</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <Phone
//               className="h-4 w-4 text-background/60 flex-shrink-0"
//               aria-hidden="true"
//             />
//             <a
//               href="tel:+15551234567"
//               className="text-background/80 hover:text-background transition-colors duration-200"
//               aria-label="Call Krisna at +1 555 123 4567"
//             >
//               +1 (555) 123-4567
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <Mail
//               className="h-4 w-4 text-background/60 flex-shrink-0"
//               aria-hidden="true"
//             />
//             <a
//               href="mailto:hello@krisna.dev"
//               className="text-background/80 hover:text-background transition-colors duration-200"
//               aria-label="Email Krisna at hello@krisna.dev"
//             >
//               hello@krisna.dev
//             </a>
//           </div>
//         </address>
//       </div>
//     </div>

//     {/* Social Links Section */}
//     <div className="mb-16">
//       <h3 className="text-lg font-semibold mb-6">Connect With Me</h3>
//       <div className="flex flex-wrap gap-6">
//         {socialLinks.map((social) => {
//           const IconComponent = social.icon;
//           return (
//             <a
//               key={social.href}
//               href={social.href}
//               className="flex items-center gap-3 text-background/80 hover:text-background transition-colors duration-200 group"
//               aria-label={`Connect with Krisna on ${social.label}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
//               <div className="flex flex-col">
//                 <span className="font-medium">{social.label}</span>
//                 <span className="text-sm text-background/60">
//                   {social.username}
//                 </span>
//               </div>
//             </a>
//           );
//         })}
//       </div>
//     </div>

//     {/* Footer Bottom */}
//     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-background/20">
//       <div className="text-sm text-background/60">
//         <p>
//           Designed & Developed with ❤️ by{" "}
//           <Link
//             href="/"
//             className="hover:text-background transition-colors duration-200"
//           >
//             Krisna
//           </Link>
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-background/60">
//         <p>All rights reserved, KRISNA ©{currentYear}</p>
//         <div className="flex items-center gap-4">
//           <Link
//             href="/privacy"
//             className="hover:text-background transition-colors duration-200"
//           >
//             Privacy Policy
//           </Link>
//           <Link
//             href="/terms"
//             className="hover:text-background transition-colors duration-200"
//           >
//             Terms of Service
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Structured Data for SEO */}
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "Person",
//         name: "Krisna",
//         jobTitle: "Software Developer",
//         url: "https://krisna.dev",
//         email: "hello@krisna.dev",
//         telephone: "+15551234567",
//         sameAs: socialLinks.map((social) => social.href),
//         address: {
//           "@type": "PostalAddress",
//           addressLocality: "Remote",
//           addressCountry: "Worldwide",
//         },
//         knowsAbout: [
//           "Software Development",
//           "Web Development",
//           "React",
//           "Next.js",
//           "TypeScript",
//           "Full-Stack Development",
//         ],
//       }),
//     }}
//   />
// </footer>
