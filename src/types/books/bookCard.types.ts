import { BlockMapType } from "react-notion";

export interface Book {
  title: string;
  highlightsNotionPageId: string;
  cover3dImageURL: string;
  shortDescription: string | null;
  highlightsNotionContent?: BlockMapType;
}

export interface BookCardProps {
  book: Book;
  className?: string;
}
