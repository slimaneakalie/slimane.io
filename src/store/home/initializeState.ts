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
    id: "IJZJOA83mPY",
    title: "سارة العاطف — الذكاء الاصطناعي، المال، البحث العلمي، عمل المرأة و الإسلام، الاستقرار في المغرب"
  },
  {
    id: "qzjKsc4Ru5E",
    title: "الدروس السليمانية #1 — العمل الشاق و الذكي، تقبل ألم التعلم مع الكبر، مصداقية النصيحة، الثقة و الفعل"
  },
  {
    id: "6bVZKDuNGKs",
    title: "ياسين قشاني — الشركات الناشئة، وادي السيليكون، التوظيف، أهمية ثقافة الشركة، MVP، Product-Market Fit",
  },
  {
    id: "HCWCiIl3FnE",
    title: "أحمد العزابي — إجازة التفرغ، تعلم الغوص، المال والسعادة، الوظيفة و العبودية، الوالدين، سم النسوية",
  },
  {
    id: "P_1lcihimZM",
    title: "مهدي علوي — منظومات الشركات الناشئة، التحول من البرمجة إلى الأعمال، هجرة الأدمغة، الزواج، كرة القدم",
  },
  {
    id: "xX9dHUzAneo",
    title:
      "حسن بوفوس — برنامج أمودو، عودة ظهور أسد الأطلس و فهد الأطلس، قناة هل تعلم، المغرب العميق، حب السفر",
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
