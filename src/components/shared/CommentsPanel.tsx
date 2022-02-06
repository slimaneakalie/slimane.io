import { DiscussionEmbed } from "disqus-react";
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

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}
