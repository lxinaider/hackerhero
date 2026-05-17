"use client";

import React from "react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { width: "150px", spineTranslation: "122px" },
  default: { width: "196px", spineTranslation: "168px" },
  lg: { width: "300px", spineTranslation: "272px" },
};

interface PerspectiveBookProps {
  size?: "sm" | "default" | "lg";
  className?: string;
  children: React.ReactNode;
  textured?: boolean;
}

export function PerspectiveBook({
  size = "default",
  className = "",
  children,
  textured = false,
}: PerspectiveBookProps) {
  const defaultColorClasses =
    'bg-[#1f1f1f] before:content-[""] before:bg-gradient-to-b before:from-[#ffffff1a] before:to-transparent before:absolute before:inset-0 before:rounded-[inherit] text-primary';

  return (
    <div className={`z-10 group [perspective:900px] w-min h-min`}>
      <div
        style={{
          width: sizeMap[size].width,
          borderRadius: "6px 4px 4px 6px",
          willChange: "transform",
        }}
        className={`transition-transform duration-300 ease-out relative [transform-style:preserve-3d] [transform:rotateY(0deg)] group-hover:[transform:rotateY(-20deg)] group-hover:scale-[1.066] group-hover:-translate-x-1 aspect-[49/60]`}
      >
        {/* Front Side */}
        <div
          className={cn(
            `absolute inset-y-0 overflow-hidden size-full left-0 flex flex-col p-[12%] after:content-[''] after:absolute after:inset-0 after:shadow-[0_1.8px_3.6px_#0000000d,_0_10.8px_21.6px_#00000014,_inset_0_-.9px_#0000001a,_inset_0_1.8px_1.8px_#ffffff1a,_inset_3.6px_0_3.6px_#0000001a] after:pointer-events-none after:rounded-[inherit] after:border-[#00000014] after:border after:border-solid`,
            className || defaultColorClasses,
          )}
          style={{
            transform: "translateZ(25px)",
            borderRadius: "6px 4px 4px 6px",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div
            className="absolute left-0 top-0 h-full"
            style={{
              minWidth: "8.2%",
              background:
                "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 12%, hsla(0, 0%, 100%, .25) 29.25%, hsla(0, 0%, 100%, 0) 50.5%, hsla(0, 0%, 100%, 0) 75.25%, hsla(0, 0%, 100%, .25) 91%, hsla(0, 0%, 100%, 0)), linear-gradient(90deg, rgba(0, 0, 0, .03), rgba(0, 0, 0, .1) 12%, transparent 30%, rgba(0, 0, 0, .02) 50%, rgba(0, 0, 0, .2) 73.5%, rgba(0, 0, 0, .5) 75.25%, rgba(0, 0, 0, .15) 85.25%, transparent)",
            }}
          ></div>
          <div className="pl-1 h-full">{children}</div>
          {textured && (
            <div
              className="absolute inset-0 mix-blend-overlay rotate-180 brightness-110 bg-no-repeat bg-cover pointer-events-none"
              style={{
                borderRadius: "6px 4px 4px 6px",
                backgroundImage: "url(/cbimage.avif)",
              }}
            />
          )}
        </div>

        {/* Spine */}
        <div
          className="absolute left-0 bg-[linear-gradient(90deg,#eaeaea_0%,#0000_80%),linear-gradient(#fff,#fafafa)]"
          style={{
            top: "1px",
            bottom: "1px",
            width: "48px",
            transform: `translateX(${
              sizeMap[size].spineTranslation
            }) rotateY(90deg)`,
          }}
        ></div>

        {/* Back Side */}
        <div
          className={cn(
            `absolute inset-y-0 overflow-hidden size-full left-0 flex flex-col justify-end p-[12%]`,
            className || defaultColorClasses,
          )}
          style={{
            transform: "translateZ(-25px)",
            borderRadius: "6px 4px 4px 6px",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        ></div>
      </div>
    </div>
  );
}

interface BookHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function BookHeader({ children, className = "" }: BookHeaderProps) {
  return <div className={`flex gap-2 flex-wrap ${className}`}>{children}</div>;
}

interface BookTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function BookTitle({ children, className = "" }: BookTitleProps) {
  return (
    <h1 className={`font-bold select-none mt-3 mb-1 text-balance ${className}`}>
      {children}
    </h1>
  );
}

interface BookDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function BookDescription({
  children,
  className = "",
}: BookDescriptionProps) {
  return (
    <p className={`select-none text-xs/relaxed ${className}`}>{children}</p>
  );
}

export default PerspectiveBook;
