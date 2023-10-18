import React from "react";
import { Status } from "components/common";

import classes from "./styles";

export const Suspense = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className={classes.suspense}>
          <Status />
        </div>
      }
    >
      <div className={classes.layout}>{children}</div>
    </React.Suspense>
  );
};
