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
    id: "1V8ioQSBTe4",
    title: "يوسف البدوي — العادات، صناعة المحتوى، الاستمرارية، بكالوريا أحرار، مباريات ولوج المدارس، تعلم اللغات"
  },
   {
    id: "ZH5B3vczMBE",
    title: "أحمد كشكاش — الذكاء الاصطناعي، مخاطره، Chat GPT،العمل بجوجل، Ranking Systems",
  },
  {
    id: "NLy5hweQ4Nk",
    title: "سلمى بن حدي شوقي — المرأة و الإسلام، الرسم، العلاج بالفن، الشعر، Sapiosexuality، الحب، Don Bigg",
  },
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
