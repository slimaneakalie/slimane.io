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
  {
    id: "Po4sLhNDaRY",
    title: "إسماعيل بلخياط — منصة شاري، BCG ،Sarouty ،Y Combinator، التوازن في الحياة، الفرق بين فرنسا و أمريكا"
  },
  {
    id: "iLQr4ecDWt8",
    title: "ريم عكراش — المرض النفسي، التنمر، الجنس بدون زواج، الإجهاض، الثقافة الجنسية، الإدمان، ضريح بويا عمر"
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
