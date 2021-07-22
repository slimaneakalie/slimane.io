import MainTitle from "../shared/MainTitle";
import { BooksPageProps } from "../../types/books/booksPage.types";
import BookCard from "./BookCard";
import { useBooksPageStyles } from "../../styles/books/bookPage.styles";

export default function BooksPageComponent(props: BooksPageProps): JSX.Element {
  const classes = useBooksPageStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <MainTitle className={classes.title}>My Book highlights</MainTitle>
        <div className={classes.booksCardsContainer}>
          {Object.values(props.books).map((book) => (
            <BookCard book={book} key={book.highlightsNotionId} />
          ))}
        </div>
      </div>
    </section>
  );
}
