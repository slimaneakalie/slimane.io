import BooksPageContainer from "../../src/containers/books/booksPage.container";
import React from "react";
import Head from "next/head";

export default function BooksIndexPage(): JSX.Element {
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
    props: {},
  };
  // return {
  //   props: await getPodcastInitialState(),
  // };
}
