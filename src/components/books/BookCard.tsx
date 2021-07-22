import { BookCardProps } from "../../types/books/bookCard.types";
import { useBooksCardStyles } from "../../styles/books/bookCard.styles";
import { createBookCoverLink, createBookHighlightsLink } from "../../lib/utils";

export default function BookCard(props: BookCardProps) {
  const { book } = props;
  const classes = useBooksCardStyles();
  const bookLink = createBookHighlightsLink(book.highlightsNotionId);
  const bookCoverImageLink = createBookCoverLink(book.coverImageName);
  return (
    <div className={classes.root}>
      <a href={bookLink}>
        <img
          src={bookCoverImageLink}
          title={book.title}
          className={classes.image}
        />
      </a>
    </div>
  );
}
