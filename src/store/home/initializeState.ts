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
    id: "_rJq3fRkSag",
    title: "كيف تصبح مبرمجا محترف بالتفصيل - The Clean Coder",
  },
  {
    id: "_nUFrezkh14",
    title: "أمين شوقي: موقع البطولة، Docker, Golang, Scalability, TDD, العمل عن بعد، الإجتماعات، الزواج، النجاح",
  },
  {
    id: "4G_Lt_VxVQo",
    title:
      "يوسف العزيزي: برمجة التطبيقات، open source, Geeks BlaBla, التدوين، Neuralink, Touch typing",
  },
  {
    id: "fMmjagEoAtA",
    title: "قيمة البيتكوين تتراجع بشكل مهول، تعرف لماذا؟ و كيف تحمي نفسك؟",
  },
  {
    id: "CrlJFImCFmY",
    title: "دروس قاسية من 2021",
  },
  {
    id: "N0W9XvN_r50",
    title:
      "عفاف الرماني: البحث العلمي، جواز التلقيح، المثلية الجنسية، التطبيع، الإعدام، الشباب و السياسة، السفر",
  },
];

const staticState: HomeState = {
  latestArticles: {},
  latestPodcast: null,
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "3h4EgfubQiU",
  presenterVideoStart: 74,
  latestVideos: latestVideos,
};
