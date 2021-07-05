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
    id: "_K4yL623sMg",
    title:
      "توقف عن تضييع الوقت على لينكد إن - Stop wasting time on LinkedIn",
  },
  {
    id: "tC5oI4DIvDY",
    title:
      "هل البيتكوين ممنوع في المغرب؟ - Is bitcoin banned in Morocco?",
  },
  {
    id: "w59IW6sbzOE",
    title:
      "كيف تختار كتبا للقراءة - How to choose books to read",
  },
  {
    id: "oKpUy9wSZxU",
    title:
      "العمل عن بعد، التعلم الذاتي، Open-source، الشركات الناشئة، السفر و تنظيم الوقت | مع إسماعيل غالو",
  },
  {
    id: "AXLG39cSZgE",
    title:
      "العمل في جوجل، مسابقات البرمجة، الجيتار، Golang, GraalVM, Rust, Java, قراءة الكتب | مع مهدي شراشر",
  },
  {
    id: "VzNDxZ01nk0",
    title:
      "التكوين المهني، العمل في جوجل، توازن الحياة و العمل، Cloud computing و TEDx | عبد الفتاح الصغيور",
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
