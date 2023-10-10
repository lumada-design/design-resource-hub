import { HvContainer, HvContainerProps } from "@hitachivantara/uikit-react-core";

export const Container = ({
  maxWidth = "lg",
  children,
  classes,
  className,
}: HvContainerProps) => (
  <HvContainer
    maxWidth={maxWidth}
    classes={{ ...classes }}
    className={className}
  >
    {children}
  </HvContainer >
);
