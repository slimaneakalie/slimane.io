import { BlockMapType } from "react-notion";

export async function fetchHighlightsNotionContent(
  notionId: string
): Promise<BlockMapType | undefined> {
  const apiLink = `https://notion-api.splitbee.io/v1/page/${notionId}`;
  try {
    const notionData = await fetch(apiLink).then((res) => res.json());
    return notionData;
  } catch (error) {
    console.log("Error fetching notion page", apiLink, error);
  }
}
