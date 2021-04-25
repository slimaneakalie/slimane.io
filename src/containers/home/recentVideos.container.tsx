import RecentVideos from "../../components/home/RecentVideos";
import { Video } from "../../types/home/videoCard.types";

const videos: Video[] = [
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
];

const allVideosExternalLink =
  "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos";

export default function RecentVideosContainer(): JSX.Element {
  return (
    <RecentVideos
      videos={videos}
      allVideosExternalLink={allVideosExternalLink}
    />
  );
}
