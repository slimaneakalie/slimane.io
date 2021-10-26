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
    id: "3h4EgfubQiU",
    title:
      "عبد العزيز الروي: العمل في جوجل، البرمجة التنافسية، شبكات التواصل، التسيير، مقابلات توظيف المبرمجين",
  },
  {
    id: "JlKd9cy_VW4",
    title:
      "How to write clean code ",
  },
  {
    id: "Q4wtbSNKudw",
    title:
      "سلمى مستعد: جامعة الأخوين، الشركات الناشئة، الشباب و السياسة، قانون الجذب، الشغف، التوازن، القراءة",
  },
  {
    id: "ThCxZHVvViw",
    title:
      "كيف أتحكم في وقتي - How I control my time and how you can control yours",
  },
  {
    id: "OkiBHCyzATg",
    title:
      "إلياس باكوش: العمل في أمازون، الزواج، تصميم الأنظمة، الشهادات التقنية، توازن الحياة و العمل، الكتب",
  },
  {
    id: "js51Hdo2tyg",
    title:
      "لا تفعل هذا لتربح المال على الأنترنت",
  },
];

const staticState: HomeState = {
  latestArticles: {},
  latestPodcast: null,
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "Q4wtbSNKudw",
  presenterVideoStart: 6592,
  latestVideos: latestVideos,
};
