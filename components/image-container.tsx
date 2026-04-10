"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface CoverImageContainerProps {
  src: any;
  alt: string;
  subtitle?: string | ReactNode;
  title?: string | ReactNode;
  aspectRatio?:
    | "square"
    | "video"
    | "portrait"
    | "landscape"
    | "wide"
    | "custom";
  customAspectRatio?: string;
  overlay?: "none" | "light" | "dark" | "gradient";
  textPosition?:
    | "bottom-left"
    | "bottom-right"
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "below";
  textColor?: "white" | "black" | "inherit";
  subtitleSize?: "sm" | "base" | "lg" | "xl" | "2xl";
  titleSize?: "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  children?: ReactNode;
  url: string;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[21/9]",
  custom: "",
};

const overlayClasses = {
  none: "",
  light: "before:absolute before:inset-0 before:bg-white/20 before:z-10",
  dark: "before:absolute before:inset-0 before:bg-black/40 before:z-10",
  gradient:
    "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/85 before:via-black/30 before:to-transparent before:z-10",
};

const textPositionClasses = {
  "bottom-left": "bottom-4 left-4 text-left",
  "bottom-right": "bottom-4 right-4 text-right",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 text-center",
  "top-left": "top-4 left-4 text-left",
  "top-right": "top-4 right-4 text-right",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
};

const textColorClasses = {
  white: "text-white",
  black: "text-black",
  inherit: "",
};

const subtitleSizeClasses = {
  sm: "text-xs md:text-sm",
  base: "text-sm md:text-base",
  lg: "text-sm md:text-lg",
  xl: "text-sm md:text-xl",
  "2xl": "text-base md:text-2xl",
};

const titleSizeClasses = {
  lg: "text-base md:text-lg",
  xl: "text-lg md:text-xl",
  "2xl": "text-xl md:text-2xl",
  "3xl": "text-xl md:text-3xl",
  "4xl": "text-2xl md:text-4xl",
  "5xl": "text-2xl md:text-5xl",
};

const roundedClasses = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
};

export function CoverImageContainer({
  src,
  alt,
  subtitle,
  title,
  aspectRatio = "landscape",
  customAspectRatio,
  overlay = "gradient",
  textPosition = "bottom-left",
  textColor = "white",
  subtitleSize = "lg",
  titleSize = "3xl",
  className,
  imageClassName,
  textClassName,
  priority = false,
  quality = 85,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  rounded = "lg",
  shadow = "md",
  children,
  url = "",
  ...props
}: CoverImageContainerProps) {
  const containerClasses = cn(
    "relative overflow-hidden",
    aspectRatio !== "custom" ? aspectRatioClasses[aspectRatio] : "",
    overlayClasses[overlay],
    roundedClasses[rounded],
    shadowClasses[shadow],
    className,
  );

  const customStyle =
    aspectRatio === "custom" && customAspectRatio
      ? { aspectRatio: customAspectRatio }
      : {};

  return (
    <Link href={url}>
      <div className={textPosition === "below" ? "group" : ""}>
        <div className={containerClasses} style={customStyle} {...props}>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill={fill}
            priority={priority}
            quality={quality}
            sizes={sizes}
            className={cn(
              "object-cover transition-transform duration-300 hover:scale-105",
              imageClassName,
            )}
          />

          {(title || subtitle || children) && textPosition !== "below" && (
            <div
              className={cn(
                "absolute z-20",
                textPositionClasses[
                  textPosition as keyof typeof textPositionClasses
                ],
                textColorClasses[textColor],
                textClassName,
              )}
            >
              {title && (
                <h2
                  className={cn("font-bold mb-2", titleSizeClasses[titleSize])}
                  style={{
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
                  }}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className={cn(
                    "font-medium text-muted-foreground",
                    subtitleSizeClasses[subtitleSize],
                  )}
                  style={{
                    textShadow:
                      "0 1px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7)",
                  }}
                >
                  {subtitle}
                </p>
              )}
              {children}
            </div>
          )}
        </div>

        {/* Text below the image frame */}
        {textPosition === "below" && (title || subtitle || children) && (
          <div className={cn("pt-3", textClassName)}>
            {title && (
              <h2 className={cn("font-semibold", titleSizeClasses[titleSize])}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-muted-foreground mt-1",
                  subtitleSizeClasses[subtitleSize],
                )}
              >
                {subtitle}
              </p>
            )}
            {children}
          </div>
        )}
      </div>
    </Link>
  );
}
