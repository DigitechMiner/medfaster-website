// Shared shape for legal documents rendered by components/global/legal-document.tsx.
// Content format: paragraphs separated by a blank line; lines starting with
// "• " or "– " are rendered as list items.
export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalPart {
  title?: string;
  intro?: string;
  sections: LegalSection[];
}

export interface LegalDocumentData {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  summary?: string;
  parts: LegalPart[];
}
