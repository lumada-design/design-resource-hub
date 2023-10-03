import { HvTypography, HvTag } from "@hitachivantara/uikit-react-core";

import classes from "./styles";

export const TextSection = ({
  title,
  description,
  tags,
  style
}: Record<string, any>) => {
  return (
    <div className={classes.root} style={{ ...style }}>
      <HvTypography variant="title3">{title}</HvTypography>
      <div className={classes.separator} />
      <HvTypography className={classes.description}>{description}</HvTypography>
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
    </div >
  );
};
