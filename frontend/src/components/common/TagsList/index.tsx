import { HvTag } from "@hitachivantara/uikit-react-core";

import { useFiltersStore } from "lib/store/filters";
import classes from "./styles";

export const TagsList = ({ data }) => {
  const { resourceTypes } = useFiltersStore();
  const tagsList: Record<string, any>[] = [];

  resourceTypes?.map((type) => {
    const tags = data.attributes[`resource_${type.name}`]?.data;

    if (tags) {
      Array.isArray(tags) ? tagsList.push(...tags) : tagsList.push(tags);
    }
  });

  return tagsList.map((tag) => {
    const { name, color } = tag.attributes;

    return (
      <HvTag
        className={classes.tag}
        key={`${tag.id}-${name}`}
        label={name}
        type="categorical"
        style={{ backgroundColor: color }}
      />
    );
  });
};
