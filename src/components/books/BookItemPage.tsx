import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { BookItemPageProps } from "../../types/books/booksPage.types";
import { NotionRenderer } from "react-notion";
import ImageTitle from "../shared/ImageTitle";
import { useBooksItemPageStyles } from "../../styles/books/bookItemPage.styles";
import BookCard from "./BookCard";
import { Typography } from "@material-ui/core";

export default function BookItemPage(props: BookItemPageProps): JSX.Element {
  const { book } = props;
  const classes = useBooksItemPageStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bodyContainer}>
        <Typography variant="h2" component="h1" className={classes.title}>
          {book.title}
        </Typography>

        {book.highlightsNotionContent && (
          <div className={classes.highlightContent}>
            <NotionRenderer blockMap={book.highlightsNotionContent} />
          </div>
        )}
      </div>
    </div>
  );
}
