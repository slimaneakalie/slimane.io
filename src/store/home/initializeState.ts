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
  {
    id: "85gwIFDZm78",
    title:
      "أحمد لكسايس: الأمن المعلوماتي، الإسلام و العلم، العملات المشفرة، الأنترنت المظلم و الحروب السيبرانية",
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
