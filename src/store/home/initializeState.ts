import { HomeState } from "../../types/home/store.home.types";
import {
  fetchLatestArticles,
  fetchLatestPodcast,
} from "../../lib/graphql/fetchers/home";

export async function getHomeInitialState(): Promise<HomeState> {
  const [latestArticles, latestPodcast] = await Promise.all([
    fetchLatestArticles(3),
    fetchLatestPodcast(),
  ]);
  return {
    ...staticState,
    latestArticles: latestArticles,
    latestPodcast: latestPodcast,
  };
}

const latestVideos = [
  {
    id: "js51Hdo2tyg",
    title:
      "لا تفعل هذا لتربح المال على الأنترنت",
  },
  {
    id: "85gwIFDZm78",
    title:
      "أحمد لكسايس: الأمن المعلوماتي، الإسلام و العلم، العملات المشفرة، الأنترنت المظلم و الحروب السيبرانية",
  },
  {
    id: "HWmZm2MF7dc",
    title:
      "الراحة الجسدية ليست هي الغاية",
  },
  {
    id: "esnOaaYi1M0",
    title:
      "ضحى العمراني: الحرية المالية، السفر، الدراسة في الخارج، تعلم اللغات، أهمية الأصدقاء",
  },
  {
    id: "_K4yL623sMg",
    title:
      "توقف عن تضييع الوقت على لينكد إن - Stop wasting time on LinkedIn",
  },
  {
    id: "tC5oI4DIvDY",
    title:
      "هل البيتكوين ممنوع في المغرب؟ - Is bitcoin banned in Morocco?",
  },
];

const staticState: HomeState = {
  latestArticles: {},
  latestPodcast: null,
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "1sM54FPUagk",
  latestVideos: latestVideos,
};
