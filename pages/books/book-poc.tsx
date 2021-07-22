import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { BlockMapType, NotionRenderer } from "react-notion";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/Hacking-growth-94b5a18e8068421db13c1f21adb7539c"
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

export default ({ blockMap }) => (
  <div style={{ maxWidth: 768 }}>
    <NotionRenderer blockMap={blockMap} />
  </div>
);
