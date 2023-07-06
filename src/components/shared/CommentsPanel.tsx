import * as React from "react";
import { DiscussionEmbed } from "disqus-react";
import { useCommentsPanelStyles } from "../../styles/shared/commentsPanel.styles";
import { CommentsPanelProps } from "../../types/shared/commentsPanel.types";

export default function CommentsPanel(props: CommentsPanelProps) {
  const url =
    process.env.NEXT_PUBLIC_WEBSITE_DOMAIN +
    "/" +
    props.mediaTypeSlug +
    "/" +
    props.mediaSlugID;

  const disqusConfig = {
    url,
    identifier: props.mediaSlugID,
    title: props.mediaTitle,
  };

  const disqusShortname = "https-www-slimane-io";

  const className = props.className
    ? props.className
    : useCommentsPanelStyles().defaultClassName;
  const discussionEmbed = new DiscussionEmbed({
    shortname: disqusShortname,
    config: disqusConfig,
  });

  return <div className={className}>{discussionEmbed.render()}</div>;
}
