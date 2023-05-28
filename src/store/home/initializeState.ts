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
    id: "JYmXDojq7rU",
    title: "زكرياء اجعيط — الشركات الناشئة، المغرب و قارة إفريقيا ، شركتا WAANDA و Xibit ، Networking، ألمانيا",
  },
  {
    id: "P2QVXiCHaQA",
    title: "نسيم القشيري— التسويق، Branding، قمع العقول المبدعة، احتكار السوق المغربي، الحاجة إلى قيادة",
  },
  {
    id: "I0mBMcm46m4",
    title: "هشام تيفلاتي — أحداث 16 ماي بالدار البيضاء، الإرهاب، الإصلاح في المغرب ،الهوية الدينية و العلمانية",
  },
  {
    id: "Ki9uGTBCtZs",
    title:
      "عثمان كينان — البرمجة، الاشتغال كـمدير تقني ، التوظيف التقني، .Net، شركة NimbleWays",
  },
  {
    id: "T5WcrjEY7kg",
    title: "Ask Me Anything — المغرب و الجزائر، البرمجة، فكرة البودكاست، العمل عن بعد، تنظيم الوقت، اختيار الكتب"
  },
  {
    id: "1V8ioQSBTe4",
    title: "يوسف البدوي — العادات، صناعة المحتوى، الاستمرارية، بكالوريا أحرار، مباريات ولوج المدارس، تعلم اللغات"
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
