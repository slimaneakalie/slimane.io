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
    id: "gLGSQaSxdvs",
    title:
      "دعاء أحمدون: الذكاء الاصطناعي، الأقسام التحضيرية، الحجاب و النقاب، المثلية و التحول الجنسي، السياسة",
  },
  {
    id: "rH0NVA2my4E",
    title: "ياسر طاهري: موسيقى الراب، Python, تعلم البرمجة، Open Source, الفلسفة الإغريقية، Secure code, الزواج",
  },
  {
    id: "O2JhdJHNu28",
    title: "غيثة منير: العيش في كاليفورنيا، الشركات الناشئة، الفروسية، اللغات، الأمن المعلوماتي، التوازن، الشغف",
  },
  {
    id: "J0U_Ltj8P_8",
    title:
      "عبد الرزاق اليوسفي: إنشاء شركة ناجحة، الزواج، تمويل المشاريع، التوسع خارج المغرب، بناء علاقات مهنية",
  },
  {
    id: "Ea9QLEaazvI",
    title: "بدر بلاج: البيتكوين، ساتوشي، المال، التضخم، إيثيريوم، هيمنة الدولار، POW vs POS, Stablecoins, NFTs",
  },
   {
    id: "JJdRJR0EZBo",
    title: "محمد أبوالليث: الفشل، Geeks BlaBla، OSS، Java، Spotify، متلازمة المحتال، السياسة، مسلسل المكتوب",
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
