import { useEffect } from "react";
import merge from "deepmerge";
import {
  HvTypography,
  HvCheckBox,
  HvStack,
} from "@hitachivantara/uikit-react-core";

import { useFiltersStore } from "lib/store/filters";
import { getResourceTypes } from "lib/utils";
import { useResources, useResourceTags } from "lib/api/resource";
import classes from "./styles";
import { groupResourceTags, setTagsCounter } from "./utils";

export const FilterSection = () => {
  const {
    resourceTypes,
    setResourceTypes,
    resourceFilters,
    setResourceFilters,
  } = useFiltersStore();
  const { data: resources } = useResources();

  useEffect(() => {
    if (!resources) return;
    const types = getResourceTypes(resources.data[0]);
    setResourceTypes(types);
  }, [resources]);

  const { data: resourceTags } = useResourceTags(resourceTypes || []);
  const groupedTags = groupResourceTags(merge.all(resourceTags || []));

  setTagsCounter(resources, resourceTypes, groupedTags);

  const handleCheck = (value: string) => {
    const opts: string[] = [...resourceFilters];

    if (opts.includes(value)) {
      opts.splice(opts.indexOf(value), 1);
    } else {
      opts.push(value);
    }

    setResourceFilters(opts);
  };

  return (
    <HvStack direction="column" spacing="sm">
      {groupedTags &&
        Object.keys(groupedTags).map((category: string) => (
          <span key={category}>
            <HvTypography paragraph className={classes.label} variant="label">
              {category}
            </HvTypography>
            {groupedTags[category].map((tag) => (
              <HvCheckBox
                key={tag.id}
                classes={{ root: classes.root }}
                label={`${tag.name} (${tag.count})`}
                onChange={() => handleCheck(tag.name)}
                checked={resourceFilters.includes(tag.name)}
                disabled={tag.disabled}
              />
            ))}
          </span>
        ))}
    </HvStack>
  );
};
