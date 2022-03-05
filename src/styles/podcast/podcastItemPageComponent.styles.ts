import { makeStyles } from "@material-ui/core/styles";

export const usePodcastItemPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleContainer: {
    width: 1280,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1280px)": {
      width: "90%",
      margin: "50px 0px",
    },
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "3rem",
  },
  bodyContainer: {
    margin: "40px 0px",
    width: 1280,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 40,
    "@media (max-width: 1280px)": {
      width: "90%",
      paddingLeft: 0,
    },
  },
  videoContainer: {
    margin: "35px 0px 45px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  platformsContainer: {
    width: "55%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  youtubeContainer: {
    width: "40%",
    "@media (max-width: 900px)": {
      width: "100%",
      marginBottom: 40,
    },
  },
  podcastEmbed: {
    margin: "35px 0px 45px 0px",
    width: "100%",
  },
  description: {
    fontSize: 24,
    lineHeight: 1.8,
    textAlign: "justify",
    whiteSpace: "pre-wrap",
  },
  arabicText: {
    direction: "rtl",
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    "& > div": {
      width: "47%",
      "@media (max-width: 900px)": {
        width: "100%",
      },
    },
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  }
}));
