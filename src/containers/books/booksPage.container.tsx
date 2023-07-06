import React from "react";
import BooksPageComponent from "../../components/books/BooksPageComponent";
import { BooksMap } from "../../types/books/booksPage.types";
import { useSelector } from "react-redux";
import { selectBooksStateField } from "../../store/books/selectors";

export default function BooksContainer(): JSX.Element {
  const books = useSelector(selectBooksStateField("books")) as BooksMap;
  return <BooksPageComponent booksMap={books} />;
}
