import { HvTypography, HvTag } from "@hitachivantara/uikit-react-core";

import styles from "./styles";

export const TextSection = ({
  title,
  description,
  tags,
}: Record<string, any>) => {
  return (
    <div className={styles.root}>
      <HvTypography variant="title3">{title}</HvTypography>
      <div className={styles.separator} />
      <HvTypography className={styles.description}>{description}</HvTypography>
      <span>
        {tags?.data.map((tag: Record<string, any>) => {
          const { name, color } = tag.attributes;
          return (
            <HvTag
              className={styles.tag}
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
