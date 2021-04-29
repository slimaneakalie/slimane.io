import HomePageContainer from "../src/containers/home/homePage.container";
import { NextPageContext } from "next";
import { HomeState } from "../src/types/home/store.home.types";
import { setState } from "../src/store/home/slice";

import { useDispatch } from "react-redux";

export default function Home(props: HomeState) {
  const dispatch = useDispatch();
  dispatch(setState(props));

  return <HomePageContainer />;
}

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
  podcastEmbedUrl:
    "https://anchor.fm/kass-atay-podcast/embed/episodes/Open-source-ev39gr",
  latestArticles: {
    "125": {
      id: "125",
      thumbnailURL: "https://picsum.photos/200/300",
      title: "Article title",
      shortDescription: "Article description",
      readingTimeInMinute: 9,
      publishingDateStr: new Date().toLocaleDateString(),
    },
    "126": {
      id: "126",
      thumbnailURL: "https://picsum.photos/200/300",
      title: "Article title 2",
      shortDescription: "Article description 2",
      readingTimeInMinute: 6,
      publishingDateStr: new Date().toLocaleDateString(),
    },
    "127": {
      id: "127",
      thumbnailURL: "https://picsum.photos/200/300",
      title: "Article title 2",
      shortDescription: "Article description 2",
      readingTimeInMinute: 6,
      publishingDateStr: new Date().toLocaleDateString(),
    },
  },
  latestVideos: [
    {
      id: "oKpUy9wSZxU",
      thumbnailURL: "http://i3.ytimg.com/vi/oKpUy9wSZxU/hqdefault.jpg",
      title:
        "العمل عن بعد، التعلم الذاتي، Open-source، الشركات الناشئة، السفر و تنظيم الوقت | مع إسماعيل غالو",
    },
    {
      id: "AXLG39cSZgE",
      thumbnailURL: "http://i3.ytimg.com/vi/AXLG39cSZgE/hqdefault.jpg",
      title:
        "العمل في جوجل، مسابقات البرمجة، الجيتار، Golang, GraalVM, Rust, Java, قراءة الكتب | مع مهدي شراشر",
    },
    {
      id: "VzNDxZ01nk0",
      thumbnailURL: "http://i3.ytimg.com/vi/VzNDxZ01nk0/hqdefault.jpg",
      title:
        "التكوين المهني، العمل في جوجل، توازن الحياة و العمل، Cloud computing و TEDx | عبد الفتاح الصغيور",
    },
    {
      id: "1HCu8Js32-o",
      thumbnailURL: "http://i3.ytimg.com/vi/1HCu8Js32-o/hqdefault.jpg",
      title:
        "في 8 مارس أميمة دحوم تتحدث عن التحرش الجنسي, تعدد الزوجات, ناقصات عقل و دين و الثقافة المغربية",
    },
    {
      id: "VzNDxZ01nk0",
      thumbnailURL: "http://i3.ytimg.com/vi/VzNDxZ01nk0/hqdefault.jpg",
      title:
        "التكوين المهني، العمل في جوجل، توازن الحياة و العمل، Cloud computing و TEDx | عبد الفتاح الصغيور",
    },
    {
      id: "1HCu8Js32-o",
      thumbnailURL: "http://i3.ytimg.com/vi/1HCu8Js32-o/hqdefault.jpg",
      title:
        "في 8 مارس أميمة دحوم تتحدث عن التحرش الجنسي, تعدد الزوجات, ناقصات عقل و دين و الثقافة المغربية",
    },
  ],
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "1sM54FPUagk",
};

export async function getStaticProps(context: NextPageContext) {
  return {
    props: initialState,
  };
}
