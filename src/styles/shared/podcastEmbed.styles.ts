import { makeStyles } from "@material-ui/core/styles";

export const usePodcastEmbedStyles = makeStyles((theme) => ({
  root: {
    width: 1280,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
}));
