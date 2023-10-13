import clsx from "clsx";
import { HvContainer, HvContainerProps } from "@hitachivantara/uikit-react-core";

import classes from "./styles";

interface ContainerProps extends HvContainerProps {
  useLoading?: boolean;
  styles?: React.CSSProperties;
}

export const Container = ({
  maxWidth = "lg",
  className,
  children,
  classes: classesProp,
  styles: stylesProp
}: ContainerProps) => <HvContainer
  maxWidth={maxWidth}
  className={clsx(classes.container, className)}
  disableGutters
  style={{ ...stylesProp }}
  classes={{ ...classesProp }}
>
    {children}
  </HvContainer >;
