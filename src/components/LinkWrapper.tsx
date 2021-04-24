import NextLink from "next/link";
import { LinkProps } from "../types/linkWrapper.types";

export default function LinkWrapper({
  isExternal,
  children,
  href,
}: LinkProps): JSX.Element {
  if (isExternal) {
    return <>{children}</>;
  }
  return <NextLink href={href}>{children}</NextLink>;
}
