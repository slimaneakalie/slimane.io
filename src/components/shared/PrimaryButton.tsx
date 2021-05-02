import { Button, ButtonProps, LinkBaseProps } from "@material-ui/core";
import { usePrimaryButtonStyles } from "../../styles/shared/primaryButton.styles";
import clsx from "clsx";

export function PrimaryButton(props: ButtonProps & LinkBaseProps): JSX.Element {
  const classes = usePrimaryButtonStyles();
  const propClassName = props.className;
  return (
    <Button
      {...props}
      className={clsx(propClassName, classes.root)}
      variant="contained"
    >
      {props.children}
    </Button>
  );
}
