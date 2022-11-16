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
    id: "qozfnKtjux0",
    title: "منير بنشملاد — العملات المشفرة، المالية اللامركزية، البيتكوين، إيثيريوم، إنشاء شركة، تمويل المشاريع",
  },
  {
    id: "y0oCdZ2OGZI",
    title: "سليمان أقليع — كيف تنتج بودكاست احترافي بالتفصيل",
  },
  {
    id: "W4KUfu6KNi4",
    title:
      "هند لبداوي — البنوك الإسلامية، القروض الربوية، جامعة الأخوين، العيش في الصين، تربية الأطفال، الكتب",
  },
  {
    id: "4LeiQ9gdlts",
    title: "عبد الواحد الشبيهي — الهندسة، الماستر، هجرة الأدمغة، مفهوم الوطن، الزواج، صناعة المحتوى، التوازن",
  },
  {
    id: "-ELmGkZQNfc",
    title: "مهدي شراشر: أساسيات البرمجة، Golang، Rust، العمل في Meta، ليونيل ميسي، الزواج، الموسيقى، السعادة",
  },
  {
    id: "R0G_xRYWlEA",
    title:
      "يوسف التبالي: الحلم المغربي، البودكاست، الزواج، العلاقات، المرأة في الإسلام، الطب، الشهرة، السياسة",
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
