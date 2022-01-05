import React from "react";
import PortableTextPresenterProps from "../../lib/sanity.io/PortableTextPresenter";
import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";
import { useArticleItemPageStyles } from "../../styles/articles/articleItemPage.styles";
import ImageTitle from "../shared/ImageTitle";
import ArticleMetadata from "./ArticleMetadata";
import { MDXRemote } from "next-mdx-remote";

export default function ArticleItemPage({
  article,
}: ArticleItemPageProps): JSX.Element {
  const classes = useArticleItemPageStyles();
  return (
    <article className={classes.root}>
      <ImageTitle mainImageUrl={article.thumbnailURL} title={article.title} />
      <div className={classes.bodyContainer}>
        <ArticleMetadata article={article} />
        {article.body && Object.keys(article.body).length > 0 && <PortableTextPresenterProps body={article.body} />}
        {article.bodyMarkdown && <MDXRemote {...article.bodyMarkdown} />}
      </div>
    </article>
  );
}
