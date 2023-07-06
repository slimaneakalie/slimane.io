import React from "react";
import { BookItemPageProps } from "../../types/books/booksPage.types";
import BookItemPage from "../../components/books/BookItemPage";

export default function BookItemPageContainer(
  props: BookItemPageProps
): JSX.Element {
  return <BookItemPage {...props} />;
}
