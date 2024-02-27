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
  {
    id: "-66X3eWiIIQ",
    title: "أناس السدراتي — حوكمة الذكاء الاصطناعي، ويكيبيديا، حرية التعبير، الرأسمالية، الاشتراكية، الأناركية",
  },
  {
    id: "DYonOdrgixI",
    title: "محمد طلال لحلو — طوفان الأقصى، الشبهات في الإسلام، العلمانية، النسوية، الإقتصاد الإسلامي، كأس العالم",
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
