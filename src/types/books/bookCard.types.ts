export interface Book {
  highlightsNotionId: string;
  title: string;
  coverImageName: string;
}

export interface BookCardProps {
  book: Book;
  className?: string;
}
