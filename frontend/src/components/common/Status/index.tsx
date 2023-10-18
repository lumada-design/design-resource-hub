import { useState, useEffect } from "react";
import { HvLoading, HvEmptyState } from "@hitachivantara/uikit-react-core";
import { Info } from "@hitachivantara/uikit-react-icons";

import classes from "./styles";

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  hasError?: boolean;
  loadingLabel?: string;
  errorTitle?: string | React.ReactNode;
  errorMessage?: string | React.ReactNode;
  errorAction?: string | React.ReactNode;
}

export const Status = (props: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    delay = 0,
    hasError = false,
    loadingLabel,
    errorTitle = "Something went wrong",
    errorMessage = "Try refreshing the page or contact support",
    errorAction = "Refresh",
  } = props;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(true), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div className={classes.root}>
      {hasError && (
        <HvEmptyState
          title={errorTitle}
          message={errorMessage}
          action={errorAction}
          icon={<Info color="negative" />}
          classes={{ root: classes.status }}
        />
      )}
      {isLoading && (
        <HvLoading classes={{ root: classes.status }} label={loadingLabel} />
      )}
    </div>
  );
};
