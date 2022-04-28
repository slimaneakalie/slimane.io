import * as React from "react";
import { Divider, Typography } from "@mui/material";
import { useArticleMetadataStyles } from "../../styles/articles/articleMetadata.styles";
import { ArticleMetadataProps } from "../../types/articles/articleItemPage.types";
import { Tag } from "../../types/shared/articles.types";

export default function ArticleMetadata({
  article,
}: ArticleMetadataProps): JSX.Element {
  const classes = useArticleMetadataStyles();
  const Separator = () => <span className={classes.separator}>|</span>;
  return (
    <>
      <Typography variant="body1" component="p" className={classes.root}>
        <span>{article.publishingDateStr}</span>
        <Separator />
        <span className={classes.authorLabel}>Written by </span>
        <a
          href={article.author?.contactLink}
          target={"_blank"}
          rel="noreferrer"
          className={classes.link}
        >
          {article.author?.name}
        </a>
        {article.tags && article.tags.length > 0 && (
          <>
            <Separator />
            <ArticleTags tags={article.tags as Tag[]} />
          </>
        )}
      </Typography>
      <Divider />
    </>
  );
}

function ArticleTags({ tags }: { tags: Tag[] }): JSX.Element | null {
  const classes = useArticleMetadataStyles();
  if (tags.length < 1) {
    return null;
  }

  const content: string[] = [tags[0].name];
  for (let i = 1; i < tags.length; i++) {
    content.push(", ", tags[i].name);
  }
  return <span className={classes.tags}>{content.join("")}</span>;
}
