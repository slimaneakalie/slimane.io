import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { BookItemPageProps } from "../../types/books/booksPage.types";
import { NotionRenderer } from "react-notion";
import { useBooksItemPageStyles } from "../../styles/books/bookItemPage.styles";
import ItemPageTitle from "../shared/ItemPageTitle";
import { loadImageEffect } from "../../lib/utils";
import { useEffect, useState } from "react";
import {CommentsPanelProps} from "../../types/shared/commentsPanel.types";
import CommentsPanel from "../shared/CommentsPanel";

export default function BookItemPage(props: BookItemPageProps): JSX.Element {
  const { book } = props;
  const classes = useBooksItemPageStyles();

  const [bookImg, setBookImg] = useState("/book.png");
  useEffect(() => loadImageEffect(book.cover3dImageURL, setBookImg), [bookImg]);

  const commentsProps: CommentsPanelProps = {
    mediaSlugID: book.highlightsNotionPageId,
    mediaTitle: book.title,
    mediaTypeSlug: "book",
  };

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
        <CommentsPanel {...commentsProps} />
      </div>
    </div>
  );
}
