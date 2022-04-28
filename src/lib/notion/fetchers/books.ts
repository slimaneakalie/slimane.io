import * as notion from "notion-client";
import { ExtendedRecordMap } from "notion-types";

const notionAPI = new notion.NotionAPI();

export async function fetchHighlightsNotionContent(
  notionId: string
): Promise<ExtendedRecordMap | undefined> {
  try {
    const recordMap = await notionAPI.getPage(notionId);
    return recordMap;
  } catch (error) {
    console.log("Error fetching notion page", notionId, error);
  }
}
