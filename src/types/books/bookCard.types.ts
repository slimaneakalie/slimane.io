import { ExtendedRecordMap } from "notion-types";

export interface BookPageData {
  book: Book;
  otherBooks: Book[];
}

export interface Book {
  title: string;
  slug: string;
  highlightsNotionPageId: string;
  cover3dImageURL: string;
  highlightsNotionContent?: ExtendedRecordMap;
}

export interface BookCardProps {
  book: Book;
  className?: string;
}
