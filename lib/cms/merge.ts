// Merges content saved in the CMS over the code defaults.
// Empty or missing values fall back to the defaults, so a page always renders
// complete content, with or without the CMS. Uploaded images resolve to URLs.

type Plain = Record<string, unknown>;

function isPlain(value: unknown): value is Plain {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function mediaUrl(value: unknown): string | undefined {
  if (isPlain(value) && typeof value.url === "string" && value.url) return value.url;
  return undefined;
}

// Shape of a new list item an editor added beyond the defaults
function blankLike(sample: unknown): unknown {
  if (typeof sample === "string") return "";
  if (typeof sample === "boolean") return false;
  if (typeof sample === "number") return 0;
  if (Array.isArray(sample)) return [];
  if (isPlain(sample)) return Object.fromEntries(Object.entries(sample).map(([k, v]) => [k, blankLike(v)]));
  return sample;
}

// Content with no default (e.g. a list item an editor added): keep it as saved,
// minus database ids, with uploaded images resolved to their URLs
function passThrough(value: unknown): unknown {
  const url = mediaUrl(value);
  if (url) return url;
  if (Array.isArray(value)) return value.map(passThrough);
  if (isPlain(value)) return Object.fromEntries(Object.entries(value).filter(([k]) => k !== "id").map(([k, v]) => [k, passThrough(v)]));
  return value ?? "";
}

export function mergeContent<T>(defaults: T, cms: unknown, saved: boolean): T {
  if (defaults === undefined) return passThrough(cms) as T;
  if (typeof defaults === "string") {
    const url = mediaUrl(cms);
    if (url) return url as T;
    return (typeof cms === "string" && cms.trim() !== "" ? cms : defaults) as T;
  }
  if (typeof defaults === "boolean") return (typeof cms === "boolean" ? cms : defaults) as T;
  if (typeof defaults === "number") return (typeof cms === "number" ? cms : defaults) as T;

  if (Array.isArray(defaults)) {
    if (!Array.isArray(cms) || (!saved && cms.length === 0)) return defaults;
    const stringList = defaults.length === 0 ? cms.length > 0 && cms.every((row) => typeof row === "string" || (isPlain(row) && "text" in row)) : defaults.every((item) => typeof item === "string");
    if (defaults.length === 0 && !stringList) return passThrough(cms) as T;
    if (stringList) {
      return cms
        .map((row) => (typeof row === "string" ? row : isPlain(row) ? row.text : undefined))
        .filter((text): text is string => typeof text === "string" && text.trim() !== "") as T;
    }
    return cms.map((row, index) => mergeContent(defaults[index] ?? blankLike(defaults[0]), row, saved)) as T;
  }

  if (isPlain(defaults)) {
    const source = isPlain(cms) ? cms : {};
    const out: Plain = {};
    for (const [key, value] of Object.entries(defaults)) out[key] = mergeContent(value, source[key], saved);
    return out as T;
  }

  return defaults;
}
