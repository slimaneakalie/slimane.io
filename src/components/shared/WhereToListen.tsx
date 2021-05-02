import { Typography } from "@material-ui/core";
import { WhereToListenProps } from "../../types/shared/whereToListen.types";
import { useWhereToListenStyles } from "../../styles/shared/whereToListen.styles";

export default function WhereToListen({
  audioPlatforms,
  className,
}: WhereToListenProps): JSX.Element {
  const classes = useWhereToListenStyles();
  return (
    <div className={`${classes.root} ${className}`}>
      <Typography variant="h6" component="h1">
        Where to listen:
      </Typography>
      {audioPlatforms.map((platform) => (
        <a
          href={platform.url}
          className={classes.audioPlatformsLink}
          key={platform.name}
          target={"_blank"}
        >
          <img
            src={platform.iconPath}
            title={platform.name}
            alt={platform.name}
          />
        </a>
      ))}
    </div>
  );
}
