import { AudioPlatform } from "../../types/shared/whereToListen.types";

export const audioPlatforms: AudioPlatform[] = [
  {
    name: "Apple podcasts",
    url:
      "https://podcasts.apple.com/ma/podcast/kass-datay-podcast-%D9%83%D8%A7%D8%B3-%D8%AF%D8%A7%D8%AA%D8%A7%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1541529548",
    iconPath: "/apple-podcasts.png",
    largeIconPath: "/apple-podcasts-large.png"
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/6hg0nxGMK32GjxFR4Qwgqu",
    iconPath: "/spotify.png",
    largeIconPath: "/spotify-large.png"
  },
  {
    name: "Google podcasts",
    url:
      "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MTM4NDkzOC9wb2RjYXN0L3Jzcw==",
    iconPath: "/google-podcasts.png",
    largeIconPath: "/google-podcasts-large.png"
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/us/show/2111312",
    iconPath: "/deezer.png",
    largeIconPath: "/deezer-large.png"
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/playlist?list=PLs2nvT0ypNWxqoPmyPMPNSmG8pq40E7xU",
    iconPath: "/youtube.png",
    largeIconPath: "/youtube-large.png"
  },
];
