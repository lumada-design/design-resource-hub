import { HvTypography, HvTag } from "@hitachivantara/uikit-react-core";

import classes from "./styles";
import { formatText } from "lib/utils";

export const TextSection = ({
  title,
  description,
  tags,
  style,
}: Record<string, any>) => {
  return (
    <div className={classes.root} style={{ ...style }}>
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
      <span>
        {tags?.data.map((tag: Record<string, any>) => {
          const { name, color } = tag.attributes;
          return (
            <HvTag
              className={classes.tag}
              key={tag.id}
              label={name}
              color={color}
              type="categorical"
            />
          );
        })}
      </span>
    </div>
  );
};
