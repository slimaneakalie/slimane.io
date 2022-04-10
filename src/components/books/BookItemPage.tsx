import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { BookItemPageProps } from "../../types/books/booksPage.types";
import { NotionRenderer } from "react-notion";
import { useBooksItemPageStyles } from "../../styles/books/bookItemPage.styles";
import ItemPageTitle from "../shared/ItemPageTitle";
import { loadImageEffect } from "../../lib/utils";
import { useEffect, useState } from "react";

export default function BookItemPage(props: BookItemPageProps): JSX.Element {
  const { book } = props;
  const classes = useBooksItemPageStyles();

  const [bookImg, setBookImg] = useState("/book.png");
  useEffect(() => loadImageEffect(book.cover3dImageURL, setBookImg), [bookImg]);

  return (
    <div className={classes.root}>
      <div className={classes.bodyContainer}>
        <ItemPageTitle>{book.title}</ItemPageTitle>
        {book.highlightsNotionContent && (
          <div className={classes.highlightContainer}>
            <div className={classes.coverContainer}>
              <img src={bookImg} title={book.title} className={classes.cover}/>
            </div>
            <div className={classes.highlightContent}>
              <NotionRenderer blockMap={book.highlightsNotionContent} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
