import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import * as React from "react";
import { BookItemPageProps } from "../../types/books/booksPage.types";
import { NotionRenderer } from "react-notion-x";
import { useBooksItemPageStyles } from "../../styles/books/bookItemPage.styles";
import ItemPageTitle from "../shared/ItemPageTitle";
import { loadImageEffect } from "../../lib/utils";
import { useEffect, useState } from "react";
import { CommentsPanelProps } from "../../types/shared/commentsPanel.types";
import CommentsPanel from "../shared/CommentsPanel";
import BooksSlider from "./BooksSlider";

export default function BookItemPage(props: BookItemPageProps): JSX.Element {
  const { book, otherBooks } = props;
  const classes = useBooksItemPageStyles();

  const [bookImg, setBookImg] = useState("/book.png");
  useEffect(() => loadImageEffect(book.cover3dImageURL, setBookImg), [bookImg]);

  const commentsProps: CommentsPanelProps = {
    mediaSlugID: book.slug,
    mediaTitle: book.title,
    mediaTypeSlug: "book",
  };

  return (
    <div className={classes.root}>
      <div className={classes.bodyContainer}>
        <ItemPageTitle>My highlights from {book.title}</ItemPageTitle>
        {book.highlightsNotionContent && (
          <div className={classes.highlightContainer}>
            <div className={classes.coverContainer}>
              <img
                src={bookImg}
                title={book.title}
                alt={book.title}
                className={classes.cover}
              />
            </div>
            <div className={classes.highlightContent}>
              <div className={classes.noteContainer}>
                <span>Note:</span> Click on the section title or the arrow ► to
                see the full content.
              </div>
              <NotionRenderer
                recordMap={book.highlightsNotionContent}
                fullPage={false}
                darkMode={false}
              />
            </div>
          </div>
        )}
        <div className={classes.disclaimerContainer}>
          <span>Disclaimer:</span> I don&apos;t always agree with the content of
          the book, the purpose of sharing my highlights is to help you decide
          whether to buy the book or not.
        </div>
        <BooksSlider books={otherBooks} />
        <CommentsPanel {...commentsProps} />
      </div>
    </div>
  );
}
