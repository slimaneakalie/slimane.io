import BooksPageContainer from "../../src/containers/books/booksPage.container";
import React from "react";
import Head from "next/head";
import { getBooksPageInitialState } from "../../src/store/books/initializeState";
import { BooksPageState } from "../../src/types/books/store.books.types";
import { useDispatch } from "react-redux";
import { setBooksState } from "../../src/store/books/slice";

export default function BooksIndexPage(props: BooksPageState): JSX.Element {
  const dispatch = useDispatch();
  dispatch(setBooksState(props));
  return (
    <>
      <Head>
        <title>Book highlights | Slimane Akalië</title>
      </Head>
      <BooksPageContainer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: getBooksPageInitialState(),
  };
}
