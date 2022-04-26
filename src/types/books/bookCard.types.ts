import { BlockMapType } from "react-notion";

export interface BookPageData {
  book: Book;
  otherBooks: Book[];
}

export interface Book {
  title: string;
  highlightsNotionPageId: string;
  cover3dImageURL: string;
  highlightsNotionContent?: BlockMapType;
}

export interface BookCardProps {
  book: Book;
  className?: string;
}
