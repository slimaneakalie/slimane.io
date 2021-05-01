import { HomeState } from "../../types/home/store.home.types";
import { fetchLatestArticles } from "../../lib/graphql/fetchers/home";

export async function getHomeInitialState(): Promise<HomeState> {
  const state = { ...initialState };
  state.latestArticles = await fetchLatestArticles(3);
  return state;
}

const latestVideos = [
  {
    id: "oKpUy9wSZxU",
    title:
      "العمل عن بعد، التعلم الذاتي، Open-source، الشركات الناشئة، السفر و تنظيم الوقت | مع إسماعيل غالو",
  },
  {
    id: "AXLG39cSZgE",
    title:
      "العمل في جوجل، مسابقات البرمجة، الجيتار، Golang, GraalVM, Rust, Java, قراءة الكتب | مع مهدي شراشر",
  },
  {
    id: "VzNDxZ01nk0",
    title:
      "التكوين المهني، العمل في جوجل، توازن الحياة و العمل، Cloud computing و TEDx | عبد الفتاح الصغيور",
  },
  {
    id: "1HCu8Js32-o",
    title:
      "في 8 مارس أميمة دحوم تتحدث عن التحرش الجنسي, تعدد الزوجات, ناقصات عقل و دين و الثقافة المغربية",
  },
  {
    id: "rFRz_WVIg1s",
    title:
      "شنو تعلمت من الجامعة في المغرب بكل صراحة - What I've learned from college in Morocco (honestly)",
  },
  {
    id: "kAjGmkyMJbM",
    title: "eXtreme programming - البرمجة المتطرفة",
  },
];

const initialState: HomeState = {
  audioPlatforms: [
    {
      name: "Apple podcasts",
      url:
        "https://podcasts.apple.com/ma/podcast/kass-datay-podcast-%D9%83%D8%A7%D8%B3-%D8%AF%D8%A7%D8%AA%D8%A7%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1541529548",
      iconPath: "/apple-podcasts.png",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/6hg0nxGMK32GjxFR4Qwgqu",
      iconPath: "/spotify.png",
    },
    {
      name: "Google podcasts",
      url:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MTM4NDkzOC9wb2RjYXN0L3Jzcw==",
      iconPath: "/google-podcasts.png",
    },
    {
      name: "Deezer",
      url: "https://www.deezer.com/us/show/2111312",
      iconPath: "/deezer.png",
    },
  ],
  latestPodcastEmbedUrl:
    "https://anchor.fm/kass-atay-podcast/embed/episodes/Open-source-ev39gr",

  latestArticles: {},
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "1sM54FPUagk",
  latestVideos: latestVideos,
};
