import { HvTypography } from "@hitachivantara/uikit-react-core";

import classes from "./styles";
import { formatText } from "lib/utils";

export const TextSection = ({ title, description }) => {
  return (
    <div>
      <HvTypography variant="title3" style={{ whiteSpace: "pre-wrap" }}>
        {formatText(title)}
      </HvTypography>
      <div className={classes.separator} />
      <HvTypography
        className={classes.description}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {formatText(description)}
      </HvTypography>
    </div>
  );
};
