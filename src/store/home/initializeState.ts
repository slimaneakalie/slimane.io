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
    id: "jkXoDeV8s_8",
    title: "ادريس علاكي: التعليم في المغرب، البحث العلمي، الفرنسية، الأساتذة المتعاقدون، التوجيه، هندسة البرامج",
  },
  {
    id: "0JI4aM6Eg1k",
    title: "محمد الغيساني: YouCan، سيمولايف، سلطانة، الزواج، الفشل، إدارة الأعمال، العلاقات، الشغف، حب الوطن",
  },
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
