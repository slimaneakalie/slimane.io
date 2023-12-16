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
    id: "Po4sLhNDaRY",
    title: "إسماعيل بلخياط — منصة شاري، BCG ،Sarouty ،Y Combinator، التوازن في الحياة، الفرق بين فرنسا و أمريكا"
  },
  {
    id: "iLQr4ecDWt8",
    title: "ريم عكراش — المرض النفسي، التنمر، الجنس بدون زواج، الإجهاض، الثقافة الجنسية، الإدمان، ضريح بويا عمر"
  },
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
