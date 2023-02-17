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
    id: "jNTypmRsEes",
    title: "نسيمة الشرفي — ريادة الأعمال و المقاولة،شركة Beauthé Skin   ،أكاديمية Zedenya  ،صناعة المحتوى، المال",
  },
  {
    id: "KH5Ijt2RIzU",
    title:
      "زياد بندورو — تسلق الجبال، تحطيم رقم قياسي عالمي، التوجيه المدرسي في المغرب، التأمل، خسارة الوزن",
  },
  {
    id: "0VU-rZ6aJ5Y",
    title: "طارق المليح — 30 ماراثون في 30 يوم، التدريب، الزواج الواقعي، خرافة قانون الجذب، إنجاز المتخب في قطر"
  },
  {
    id: "9-BN2ojV7TI",
    title: "عبد الحق العيـبي — التدريس المنزلي، تربية الأطفال، التعليم النظامي، البرمجة، الإسلام، المنتخب الوطني"
  },
  {
    id: "jjWf4D-Z2GA",
    title:
      "نهيلة مرزوق — إنتحار طبيب متدرب، الملكية البرلمانية، الحكومة الموازية، طلبة الطب، المناظرات، الهجرة",
  },
  {
    id: "qozfnKtjux0",
    title: "منير بنشملاد — العملات المشفرة، المالية اللامركزية، البيتكوين، إيثيريوم، إنشاء شركة، تمويل المشاريع",
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
