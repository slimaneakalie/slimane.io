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
    id: "-66X3eWiIIQ",
    title: "أناس السدراتي — حوكمة الذكاء الاصطناعي، ويكيبيديا، حرية التعبير، الرأسمالية، الاشتراكية، الأناركية",
  },
  {
    id: "DYonOdrgixI",
    title: "محمد طلال لحلو — طوفان الأقصى، الشبهات في الإسلام، العلمانية، النسوية، الإقتصاد الإسلامي، كأس العالم",
  },
  {
    id: "YA84ooxZegA",
    title: "Ask Me Anything II — الإسلام السياسي، البرمجة، البودكاست، الإنتاجية، المغزى من الحياة، الفرنسية",
  },
  {
    id: "6ZOzQC2lmIE",
    title:
      "عثمان الصفصافي — الذكاء، السعادة، الرياضيات، صناعة المحتوى، البحث العلمي، التمييز الإيجابي، الحرية",
  },
  {
    id: "wqqjP-YUed8",
    title: "أسامة الزاكي — البرمجة الوظيفية، سبوتيفاي، الحرية المالية، تربية الأبناء، الصوفية، السويد، Skydiving"
  },
  {
    id: "jiskKs1QDnw",
    title: "حمزة بوربوح — العمل في جوجل و ناسا، الأرض المسطحة، أكاديمية الفهرية، الاستثمار و التقاعد المبكر"
  },
];

const staticState: HomeState = {
  latestArticles: {},
  latestPodcast: null,
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "bkxykh0GWB8",
  presenterVideoStart: 129,
  latestVideos: latestVideos,
};
