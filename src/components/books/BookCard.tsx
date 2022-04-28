import * as React from "react";
import { BookCardProps } from "../../types/books/bookCard.types";
import { useBooksCardStyles } from "../../styles/books/bookCard.styles";
import { createBookHighlightsLink, loadImageEffect } from "../../lib/utils";
import { useEffect, useState } from "react";

export default function BookCard(props: BookCardProps) {
  const { book } = props;
  const classes = useBooksCardStyles();
  const bookLink = createBookHighlightsLink(book.slug);

  const [bookImg, setBookImg] = useState("/book.png");
  useEffect(() => loadImageEffect(book.cover3dImageURL, setBookImg), [bookImg]);

  return (
    <div className={classes.root}>
      <a href={bookLink}>
        <img src={bookImg} title={book.title} className={classes.image} />
      </a>
    </div>
  );
}
