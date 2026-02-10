"use client";

import { useEffect, useMemo, useState } from "react";
import { RoughNotation } from "react-rough-notation";

interface AsciiMorphHeaderProps {
  text: string;
  className?: string;
  startDelay?: number;
  variant?: "default" | "tech" | "matrix" | "blueprint" | "terminal";
  underlineColor?: string;
  prefix?: string;
  element?: "h1" | "span";
  asciiStyle?: "boxed" | "inline";
  asciiOrnament?: string;
}

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{};:,.?/\\|";
const GLITCH_CHARS_MATRIX = "01[]{}<>/\\|#@";
const GLITCH_CHARS_BLUEPRINT = "+-=:/\\[]{}.";
const GLITCH_CHARS_TERMINAL = "._-~^*#@$%&";

const VARIANT_CLASS_MAP: Record<
  NonNullable<AsciiMorphHeaderProps["variant"]>,
  string
> = {
  default: "ascii-header-art--default",
  tech: "ascii-header-art--tech",
  matrix: "ascii-header-art--matrix",
  blueprint: "ascii-header-art--blueprint",
  terminal: "ascii-header-art--terminal",
};

function getGlitchChars(
  variant: NonNullable<AsciiMorphHeaderProps["variant"]>
): string {
  if (variant === "matrix") {
    return GLITCH_CHARS_MATRIX;
  }
  if (variant === "blueprint") {
    return GLITCH_CHARS_BLUEPRINT;
  }
  if (variant === "terminal") {
    return GLITCH_CHARS_TERMINAL;
  }
  return GLITCH_CHARS;
}

function noisyLineFrom(
  cleanLine: string,
  keepRatio: number,
  glitchChars: string
): string {
  return cleanLine
    .split("")
    .map((char) => {
      if (char === " " || char === "|" || char === "+") {
        return char;
      }
      if (Math.random() < keepRatio) {
        return char;
      }
      const randomIndex = Math.floor(Math.random() * glitchChars.length);
      return glitchChars[randomIndex];
    })
    .join("");
}

function buildAsciiFrames(
  text: string,
  variant: NonNullable<AsciiMorphHeaderProps["variant"]>,
  asciiOrnament: string
): string[] {
  const upper = text.toUpperCase().replace(/\s+/g, " ").trim();
  const ornament = asciiOrnament.trim() ? `  ${asciiOrnament}` : "";
  const centered = `${upper.split("").join(" ")}${ornament}`;
  const inner = ` ${centered} `;
  const bar = variant === "terminal" ? "=" : "-";
  const top = `+${bar.repeat(inner.length)}+`;
  const bottom = top;
  const clean = `|${inner}|`;
  const glitchChars = getGlitchChars(variant);

  const noisyA = noisyLineFrom(clean, 0.15, glitchChars);
  const noisyB = noisyLineFrom(clean, 0.45, glitchChars);
  const noisyC = noisyLineFrom(clean, 0.7, glitchChars);

  return [
    [top, noisyA, bottom].join("\n"),
    [top, noisyB, bottom].join("\n"),
    [top, noisyC, bottom].join("\n"),
    [top, clean, bottom].join("\n"),
  ];
}

function buildInlineFrames(
  text: string,
  variant: NonNullable<AsciiMorphHeaderProps["variant"]>,
  prefix: string,
  asciiOrnament: string
): string[] {
  const ornament = asciiOrnament.trim() ? ` ${asciiOrnament}` : "";
  const clean = `${prefix}${text}${ornament}`;
  const glitchChars = getGlitchChars(variant);

  const noisyA = noisyLineFrom(clean, 0.2, glitchChars);
  const noisyB = noisyLineFrom(clean, 0.45, glitchChars);
  const noisyC = noisyLineFrom(clean, 0.72, glitchChars);

  return [noisyA, noisyB, noisyC, clean];
}

export default function AsciiMorphHeader({
  text,
  className,
  startDelay = 0,
  variant = "default",
  underlineColor = "#2563eb",
  prefix = "> ",
  element = "h1",
  asciiStyle = "boxed",
  asciiOrnament = "",
}: AsciiMorphHeaderProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<"ascii" | "typing" | "done">("ascii");
  const [showUnderline, setShowUnderline] = useState(false);

  const frames = useMemo(() => {
    return asciiStyle === "boxed"
      ? buildAsciiFrames(text, variant, asciiOrnament)
      : buildInlineFrames(text, variant, prefix, asciiOrnament);
  }, [asciiOrnament, asciiStyle, prefix, text, variant]);
  const variantClass = VARIANT_CLASS_MAP[variant];
  const Element = element;
  const baseClassName =
    element === "h1"
      ? "ascii-header text-3xl md:text-5xl mb-6 md:mb-8 font-bold tracking-tight"
      : "ascii-header-inline";

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setPhase("done");
      setTypedText(`${prefix}${text}`);
      setShowUnderline(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let typeIntervalId: ReturnType<typeof setInterval> | undefined;
    let morphTimeoutId: ReturnType<typeof setTimeout> | undefined;

    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        index += 1;
        setFrameIndex(Math.min(index, frames.length - 1));

        if (index >= frames.length - 1) {
          if (intervalId) {
            clearInterval(intervalId);
          }

          morphTimeoutId = setTimeout(() => {
            setPhase("typing");

            const target = `${prefix}${text}`;
            let charIndex = 0;

            typeIntervalId = setInterval(() => {
              charIndex += 1;
              setTypedText(target.slice(0, charIndex));

              if (charIndex >= target.length) {
                if (typeIntervalId) {
                  clearInterval(typeIntervalId);
                }
                setPhase("done");
                setShowUnderline(true);
              }
            }, 42);
          }, 180);
        }
      }, 180);
    }, startDelay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (typeIntervalId) {
        clearInterval(typeIntervalId);
      }
      if (morphTimeoutId) {
        clearTimeout(morphTimeoutId);
      }
    };
  }, [frames.length, prefix, startDelay, text]);

  return (
    <Element
      className={`${baseClassName} ${className ?? ""}`}
    >
      {phase === "ascii" ? (
        <>
          {asciiStyle === "boxed" ? (
            <pre aria-hidden className={`ascii-header-art ${variantClass}`}>
              {frames[frameIndex]}
            </pre>
          ) : (
            <span
              aria-hidden
              className={`ascii-header-inline-art ${variantClass}`}
            >
              {frames[frameIndex]}
            </span>
          )}
          <span className="sr-only">{`${prefix}${text}`}</span>
        </>
      ) : (
        <RoughNotation
          type="underline"
          show={showUnderline}
          color={underlineColor}
          strokeWidth={3}
          animationDuration={650}
        >
          <span className="ascii-header-word">
            {typedText}
            {phase !== "done" ? <span className="ascii-caret">_</span> : null}
          </span>
        </RoughNotation>
      )}
    </Element>
  );
}
