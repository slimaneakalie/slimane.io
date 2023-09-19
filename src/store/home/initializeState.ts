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
  {
    id: "JYmXDojq7rU",
    title: "زكرياء اجعيط — الشركات الناشئة، WAANDA، الفرص في إفريقيا، تكوين العلاقات المهنية، العيش في ألمانيا",
  },
  {
    id: "P2QVXiCHaQA",
    title: "نسيم القشيري— التسويق، Branding، قمع العقول المبدعة، احتكار السوق المغربي، الحاجة إلى قيادة",
  },
  {
    id: "I0mBMcm46m4",
    title: "هشام تيفلاتي — أحداث 16 ماي بالدار البيضاء، الإرهاب، الإصلاح في المغرب ،الهوية الدينية و العلمانية",
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
