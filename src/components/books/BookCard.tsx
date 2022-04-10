import { BookCardProps } from "../../types/books/bookCard.types";
import { useBooksCardStyles } from "../../styles/books/bookCard.styles";
import { createBookHighlightsLink } from "../../lib/utils";

export default function BookCard(props: BookCardProps) {
  const { book } = props;
  const classes = useBooksCardStyles();
  const bookLink = createBookHighlightsLink(book.highlightsNotionPageId);

  return (
    <div className={classes.root}>
      <a href={bookLink}>
        <img
          src={book.cover3dImageURL}
          title={book.title}
          className={classes.image}
        />
      </a>
    </div>
  );
}
