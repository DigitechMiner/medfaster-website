import { Fragment } from "react";
import { cn } from "@/lib/utils";

// Renders CMS text: **words** become the orange accent and line breaks become <br />.
export function AccentText({ text, accentClassName }: { text: string; accentClassName?: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) =>
            part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
              <span key={partIndex} className={cn("text-[#F3651B]", accentClassName)}>
                {part.slice(2, -2)}
              </span>
            ) : (
              <Fragment key={partIndex}>{part}</Fragment>
            )
          )}
        </Fragment>
      ))}
    </>
  );
}

// Plain text for metadata, alt text and aria labels
export function stripAccents(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\s*\n\s*/g, " ");
}
