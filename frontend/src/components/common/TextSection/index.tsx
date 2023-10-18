import clsx from "clsx";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import classes from "./styles";
import { formatText } from "lib/utils";

interface TextSectionProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const TextSection = ({
  title,
  description,
  children,
}: TextSectionProps) => {
  return (
    <div>
      {title && (
        <>
          <HvTypography variant="title3" style={{ whiteSpace: "pre-wrap" }}>
            {formatText(title)}
          </HvTypography>
          <div className={classes.separator} />
        </>
      )}
      <HvTypography
        className={clsx(classes.description, { [classes.noTitle]: !title })}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {formatText(description)}
      </HvTypography>
      {children}
    </div>
  );
};
