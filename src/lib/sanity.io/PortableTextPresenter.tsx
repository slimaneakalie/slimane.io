import BlockContent from "@sanity/block-content-to-react";

interface serializersCodeProps {
  node: {
    language: string;
    code: string;
  };
}

interface PortableTextPresenterProps {
  body: string;
}

const serializers = {
  types: {
    code: (props: serializersCodeProps) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function PortableTextPresenter({
  body,
}: PortableTextPresenterProps): JSX.Element {
  return <BlockContent blocks={body} serializers={serializers} />;
}
