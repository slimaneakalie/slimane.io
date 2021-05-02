import { makeStyles } from "@material-ui/core/styles";

export const usePodcastEmbedStyles = makeStyles((theme) => ({
  root: {
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    width: 1280,
    "@media (max-width: 1280px)": {
      width: "90%",
    },
  },
}));
