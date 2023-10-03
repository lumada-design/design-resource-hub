import { Suspense } from "react";
import { HvContainer } from "@hitachivantara/uikit-react-core";

import { Loading, LoadingProps } from "components/common/Loading";
import classes from "./styles";

interface ContainerProps {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  children: NonNullable<React.ReactNode>;
  loadingProps?: LoadingProps;
  classes?: typeof classes;
}

export const Container = ({
  maxWidth,
  children,
  loadingProps,
  classes,
}: ContainerProps) => (
  <HvContainer
    maxWidth={maxWidth}
    classes={{ root: classes?.container, ...classes }}
    {...{ component: "main" }}
  >
    <Suspense fallback={<Loading {...loadingProps} />}>{children}</Suspense>
  </HvContainer>
);