"use client";

import { useEffect, useRef } from "react";

const getFontSize = (fontSize) => {
  if (typeof fontSize === "number") return fontSize;
  const parsed = Number.parseFloat(fontSize);
  return Number.isNaN(parsed) ? 120 : parsed;
};

const getLetterSpacing = (letterSpacing) => {
  if (typeof letterSpacing === "number") return letterSpacing;
  const parsed = Number.parseFloat(letterSpacing);
  if (Number.isNaN(parsed)) return 0;
  return String(letterSpacing).endsWith("em") ? parsed * 16 : parsed;
};

export default function FuzzyText({
  text,
  font = {},
  color = "#ffffff",
  gradientMiddle = "#38bdf8",
  gradientEnd = "#0369a1",
  useGradient = true,
  enableHover = true,
  baseIntensity = 1,
  hoverIntensity = 4,
  fuzzRange = 24,
  fps = 45,
  className = "",
}) {
  const canvasRef = useRef(null);
  const interactionRef = useRef({ hovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let animationFrameId;
    let cancelled = false;
    let lastFrameTime = 0;
    const frameDuration = 1000 / fps;

    const fontSize = getFontSize(font.fontSize);
    const letterSpacing = getLetterSpacing(font.letterSpacing);
    const fontWeight = font.fontWeight || 700;
    const fontFamily = font.fontFamily || "sans-serif";
    const fontString = `${fontWeight} ${fontSize}px ${fontFamily}`;

    const source = document.createElement("canvas");
    const sourceContext = source.getContext("2d");
    if (!sourceContext) return undefined;

    sourceContext.font = fontString;
    sourceContext.textBaseline = "alphabetic";

    let textWidth = 0;
    for (const character of text) {
      textWidth += sourceContext.measureText(character).width + letterSpacing;
    }
    textWidth = Math.max(1, textWidth - (text ? letterSpacing : 0));

    const metrics = sourceContext.measureText(text);
    const ascent = metrics.actualBoundingBoxAscent || fontSize;
    const descent = metrics.actualBoundingBoxDescent || fontSize * 0.2;
    const textHeight = Math.ceil(ascent + descent);
    const padding = 8;

    source.width = Math.ceil(textWidth + padding * 2);
    source.height = textHeight;
    sourceContext.font = fontString;
    sourceContext.textBaseline = "alphabetic";

    if (useGradient) {
      const gradient = sourceContext.createLinearGradient(0, 0, source.width, 0);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, gradientMiddle);
      gradient.addColorStop(1, gradientEnd);
      sourceContext.fillStyle = gradient;
    } else {
      sourceContext.fillStyle = color;
    }

    if (letterSpacing === 0) {
      sourceContext.fillText(text, padding, ascent);
    } else {
      let x = padding;
      for (const character of text) {
        sourceContext.fillText(character, x, ascent);
        x += sourceContext.measureText(character).width + letterSpacing;
      }
    }

    const horizontalPadding = fuzzRange + padding;
    canvas.width = source.width + horizontalPadding * 2;
    canvas.height = source.height;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(horizontalPadding, 0);

    const draw = (timestamp) => {
      if (cancelled) return;
      if (timestamp - lastFrameTime < frameDuration) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      lastFrameTime = timestamp;
      context.clearRect(-horizontalPadding, 0, canvas.width, canvas.height);

      const intensity = interactionRef.current.hovering && enableHover
        ? hoverIntensity
        : baseIntensity;

      for (let row = 0; row < source.height; row += 1) {
        const offset = Math.floor((intensity / 10) * (Math.random() - 0.5) * fuzzRange);
        context.drawImage(source, 0, row, source.width, 1, offset, row, source.width, 1);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseIntensity, color, enableHover, font, fps, fuzzRange, gradientEnd, gradientMiddle, hoverIntensity, text, useGradient]);

  return (
    <span
      className={`inline-block max-w-full align-top ${className}`}
      onPointerEnter={() => {
        interactionRef.current.hovering = true;
      }}
      onPointerLeave={() => {
        interactionRef.current.hovering = false;
      }}
      style={{ pointerEvents: "auto" }}
    >
      <canvas
        ref={canvasRef}
        aria-label={text}
        role="img"
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
          pointerEvents: "auto",
          userSelect: "none",
        }}
      />
    </span>
  );
}