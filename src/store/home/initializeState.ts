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
      id: "nACQBYPSUxc",
      title:
        "كيف تربح المال من التضخم",
    },
   {
    id: "3N8sJi3EV00",
    title:
      "كوثر بنحمو: co-working، جامعة الأخوين، AISEC، أهمية المشاركة في السياسة، العمل في تركيا",
   },
   {
     id: "-z-LGm4o5iI",
     title:
      "سارة القرمودي: الشركات الناشئة، الفشل، scrum master، المرض النفسي، المال و السعادة، B2B vs B2C",
   },
   {
    id: "P7i8xKn9nqY",
    title:
      "منصف عيساوي: PHP, الإشتغال بفرنسا, البرمجة B2B, الشهادات التقنية, تعلم الجيتار",
  },
  {
    id: "3h4EgfubQiU",
    title:
      "عبد العزيز الروي: العمل في جوجل، البرمجة التنافسية، شبكات التواصل، التسيير، مقابلات توظيف المبرمجين",
  },
  {
    id: "JlKd9cy_VW4",
    title:
      "How to write clean code ",
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
