import { ArticleItemPageProps } from "../../types/articles/articleItemPage.types";
import PortableTextPresenterProps from "../../lib/sanity.io/PortableTextPresenter";
import { useArticleItemPageStyles } from "../../styles/articles/articleItemPage.styles";
import ImageTitle from "../shared/ImageTitle";
import ArticleMetadata from "./ArticleMetadata";
import { Head } from "next/document";

export default function ArticleItemPage({
  article,
}: ArticleItemPageProps): JSX.Element {
  const classes = useArticleItemPageStyles();
  return (
    <>
      <Head>
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.thumbnailURL} />
        <meta property="og:description" content={article.shortDescription} />
      </Head>
      <article className={classes.root}>
        <ImageTitle mainImageUrl={article.thumbnailURL} title={article.title} />
        <div className={classes.bodyContainer}>
          <ArticleMetadata article={article} />
          {article.body && <PortableTextPresenterProps body={article.body} />}
        </div>
      </article>
    </>
  );
}
