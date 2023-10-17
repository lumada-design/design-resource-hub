import hexToRgba from "hex-to-rgba";
import { HvTag } from "@hitachivantara/uikit-react-core";

import { getResourceTypes } from "lib/utils";
import classes from "./styles";

export const TagsList = ({ data }) => {
  const resourceTypes = getResourceTypes(data);
  const tagsList: Record<string, any>[] = [];

  resourceTypes?.map((type) => {
    const tags = data.attributes[`resource_${type}`]?.data;

    if (tags) {
      Array.isArray(tags) ? tagsList.push(...tags) : tagsList.push(tags);
    }
  });

  return tagsList.map((tag) => {
    const { name, color } = tag.attributes;

    const tagColor = color ? hexToRgba(color, 0.3) : undefined;

    return (
      <HvTag
        className={classes.tag}
        key={`${tag.id}-${name}`}
        label={name}
        type="categorical"
        style={{ backgroundColor: tagColor }}
      />
    );
  });
};
