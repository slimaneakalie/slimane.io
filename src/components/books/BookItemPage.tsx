import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { BookItemPageProps } from "../../types/books/booksPage.types";
import { NotionRenderer } from "react-notion";
import { useBooksItemPageStyles } from "../../styles/books/bookItemPage.styles";
import { Typography } from "@material-ui/core";
import ItemPageTitle from "../shared/ItemPageTitle";

export default function BookItemPage(props: BookItemPageProps): JSX.Element {
  const { book } = props;
  const classes = useBooksItemPageStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bodyContainer}>
        <ItemPageTitle>{book.title}</ItemPageTitle>

        {book.highlightsNotionContent && (
          <div className={classes.highlightContent}>
            <NotionRenderer blockMap={book.highlightsNotionContent} />
          </div>
        )}
      </div>
    </div>
  );
}
