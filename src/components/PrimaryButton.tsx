import { Button, ButtonProps, LinkBaseProps } from "@material-ui/core";
import { usePrimaryButtonStyles } from "../styles/primaryButton.styles";

export function PrimaryButton(props: ButtonProps & LinkBaseProps): JSX.Element {
  const classes = usePrimaryButtonStyles();
  const propClassName = props.className;
  return (
    <Button
      {...props}
      className={`${propClassName} ${classes.root}`}
      variant="contained"
    >
      {props.children}
    </Button>
  );
}
