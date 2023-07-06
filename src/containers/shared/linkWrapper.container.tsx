import React from "react";
import NextLink from "next/link";
import { LinkProps } from "../../types/home/linkWrapper.types";

export default function LinkWrapper({
  isExternal,
  children,
  href,
}: LinkProps): JSX.Element {
  if (isExternal) {
    return <>{children}</>;
  }

  return (
    <NextLink href={href} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </NextLink>
  );
}
