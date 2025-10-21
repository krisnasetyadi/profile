"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Grid3X3, Menu, X, Sun, Moon } from "lucide-react";
// import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { socialMediaUrl } from "@/lib/constant";
import { useTheme } from "next-themes";

/**
 * Navigation Component with Dark Mode Support
 *
 * Enhanced navigation featuring:
 * - Responsive design with mobile hamburger menu
 * - Active route highlighting for better UX
 * - Integrated theme toggle with dropdown options
 * - Social media links with hover effects
 * - Accessibility features with proper ARIA labels
 * - Smooth transitions that work in both light and dark modes
 * - Backdrop blur effect for modern glass-morphism look
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const navItems = [
    { href: "/", label: "Home" },
    // { href: "/work", label: "Work" },
    // { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: "Main Navigation",
            url: "https://krisnadwisetyaadi.vercel.app",
            hasPart: navItems.map((item) => ({
              "@type": "WebPage",
              name: item.label,
              url: `https://krisnadwisetyaadi.vercel.app/${item.href}`,
            })),
          }),
        }}
      />

      <header
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <nav
          className="container flex h-16 items-center justify-between px-6 md:px-12"
          role="navigation"
          aria-label="Main navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            data-theme-ignore
            itemProp="url"
            aria-label="KRSN - Krisna Dwi Setyaadi Portfolio Home"
          >
            <span className="text-xl font-bold text-foreground" itemProp="name">
              KRSN
            </span>
            <div
              className="h-2.5 w-2.5 bg-blue-400 rounded-full ml-0.5 animate-pulse"
              aria-hidden="true"
            ></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8" role="menubar">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className={`text-sm transition-all duration-200 hover:text-primary relative ${
                      isActive(item.href)
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    }`}
                    role="menuitem"
                    aria-current={isActive(item.href) ? "page" : undefined}
                    itemProp="url"
                  >
                    <span itemProp="name">{item.label}</span>
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <div data-theme-toggle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-3"
              itemScope
              itemType="https://schema.org/Person"
            >
              <Link
                href={socialMediaUrl.linkedin}
                className="text-primary hover:text-primary/80 transition-all duration-200 hover:scale-110"
                aria-label="Connect with Krisna Dwi Setyaadi on LinkedIn"
                title="LinkedIn Profile - Krisna Dwi Setyaadi"
                target="_blank"
                rel="noopener noreferrer nofollow"
                itemProp="sameAs"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={socialMediaUrl.github}
                className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                aria-label="View Krisna Dwi Setyaadi's projects on GitHub"
                title="GitHub Profile - Krisna Dwi Setyaadi"
                target="_blank"
                rel="noopener noreferrer nofollow"
                itemProp="sameAs"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>

            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-accent hover:text-accent-foreground lg:hidden"
              aria-label="Open menu options"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center gap-4">
            <div data-theme-toggle>
              {" "}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              className="h-9 w-9"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Menu Content */}
              <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden shadow-theme-medium">
                <div className="container px-6 py-6">
                  <ul className="space-y-4" role="menu">
                    {navItems.map((item) => (
                      <li key={item.href} role="none">
                        <Link
                          href={item.href}
                          className={`block text-lg transition-colors duration-200 hover:text-primary ${
                            isActive(item.href)
                              ? "text-primary font-medium"
                              : "text-foreground"
                          }`}
                          role="menuitem"
                          onClick={() => setIsMenuOpen(false)}
                          aria-current={
                            isActive(item.href) ? "page" : undefined
                          }
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Social Links */}
                  <div
                    className="flex items-center gap-6 mt-8 pt-6 border-t border-border"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <a
                      href={socialMediaUrl.linkedin}
                      className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-200"
                      aria-label="Connect with Krisna Dwi Setyaadi on LinkedIn"
                      title="LinkedIn Profile - Krisna Dwi Setyaadi"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      itemProp="sameAs"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={socialMediaUrl.github}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200"
                      aria-label="View Krisna Dwi Setyaadi's projects on GitHub"
                      title="GitHub Profile - Krisna Dwi Setyaadi"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      itemProp="sameAs"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
