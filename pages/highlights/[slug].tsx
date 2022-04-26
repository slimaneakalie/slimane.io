import { GetStaticPropsContext } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Book, BookPageData } from "../../src/types/books/bookCard.types";
import {
  fetchAllBooksSlugs,
  fetchBookHighlightsFullData,
} from "../../src/lib/graphql/fetchers/books";
import { setBookItemState } from "../../src/store/books/slice";
import BookItemPageContainer from "../../src/containers/books/bookItemPage.container";

export default function BookHighlightsItem(props: BookPageData): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const action = {
    id: slug as string,
    newState: props,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBookItemState(action));
  }, []);

  console.log("props: ", props);

  const { book, otherBooks } = props;

  return (
    <>
      <Head>
        <title>{book.title} | Slimane Akalië</title>
        <meta property="og:title" content={book.title} />
        <meta property="og:image" content={book.cover3dImageURL} />
        <meta property="og:description" content={book.title} />
        <meta name="description" content={book.title} />
      </Head>
      <BookItemPageContainer book={book} otherBooks={otherBooks} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const slug = context.params.slug as string;
  return {
    props: await fetchBookHighlightsFullData(slug),
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await fetchAllBooksSlugs(),
  };
}
