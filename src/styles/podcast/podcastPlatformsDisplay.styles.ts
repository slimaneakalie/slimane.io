import { makeStyles } from "@material-ui/core/styles";

export const usePodcastPlatformsPageDisplayStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "minmax(100px, auto)",
    columnGap: 30,
    rowGap: 10,
  },
  platformElement: {
  }
}));
