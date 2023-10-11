import { HvContainer, HvContainerProps, theme } from "@hitachivantara/uikit-react-core";

interface ContainerProps extends HvContainerProps {
  useLoading?: boolean;
}

export const Container = ({
  maxWidth = "lg",
  className,
  children,
  classes,
}: ContainerProps) => (
  <HvContainer
    maxWidth={maxWidth}
    className={className}
    classes={{ ...classes }}
    disableGutters
    style={{ padding: theme.space.md }}
  >
    {children}
  </HvContainer >
);
