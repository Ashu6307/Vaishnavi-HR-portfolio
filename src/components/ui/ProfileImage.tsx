"use client";

import * as m from "motion/react-m";
import { useState } from "react";
import { AnimatedPortraitFrame } from "@/components/profile/AnimatedPortraitFrame";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ProfileImage({
  priority = false,
  className,
  size = "large"
}: {
  priority?: boolean;
  className?: string;
  size?: "large" | "compact";
}) {
  const dimensions = size === "large" ? { width: 720, height: 900 } : { width: 320, height: 400 };
  const [hasImage, setHasImage] = useState(profile.profileImageAvailable);

  return (
    <m.div
      className={cn(
        "relative overflow-hidden border border-strong bg-elevated shadow-soft",
        size === "large" ? "aspect-[4/5] rounded-[1.5rem]" : "aspect-[4/5] w-32 rounded-3xl",
        className
      )}
      initial={{ opacity: 0, scale: 0.97, y: 8 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -2 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {hasImage ? (
        <picture className="relative z-10 block h-full w-full">
          {profile.profileImageSrcSet ? (
            <source
              sizes={size === "large" ? "(min-width: 1024px) 360px, (min-width: 768px) 260px, 92vw" : "128px"}
              srcSet={profile.profileImageSrcSet}
              type="image/webp"
            />
          ) : null}
          <img
            alt="Vaishnavi Jaiswal, Human Resources Executive"
            className="h-full w-full object-cover object-center"
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            height={dimensions.height}
            loading={priority ? "eager" : "lazy"}
            onError={() => setHasImage(false)}
            sizes={size === "large" ? "(min-width: 1024px) 360px, (min-width: 768px) 260px, 92vw" : "128px"}
            src={profile.profileImage}
            width={dimensions.width}
          />
        </picture>
      ) : null}
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top_left,rgb(var(--color-sage)/0.22),transparent_42%),linear-gradient(135deg,rgb(var(--color-surface)),rgb(var(--color-elevated)))]">
        <span className="font-serif text-6xl font-semibold text-accent">{profile.initials}</span>
      </div>
      <AnimatedPortraitFrame />
    </m.div>
  );
}
