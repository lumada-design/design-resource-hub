import {
  HvTypography,
  HvCheckBox,
  HvStack,
} from "@hitachivantara/uikit-react-core";

import { useFiltersStore } from "lib/store/filters";
import { useResources } from "lib/api/resource";
import { useTags } from "lib/api/tag";
import classes from "./styles";

interface Tags {
  data: Record<string, unknown>[];
  meta: Record<string, unknown>;
}

interface Tag {
  id: string;
  name: string;
}

const groupTags = (tags: Tags) => {
  return tags?.data.reduce((acc: any, tag: any) => {
    const { name: tagName } = tag.attributes;
    const { name: tagCategory } = tag.attributes.tag_category.data.attributes;

    if (!acc[tagCategory]) {
      acc[tagCategory] = [];
    }
    acc[tagCategory].push({ id: tag.id, name: tagName });
    return acc;
  }, {});
};

export const FilterSection = () => {
  const { data: resources, isLoading: isLoadingRes } = useResources();
  const { data: tags, isLoading: isLoadingTags } = useTags();
  const { tagsFilter, setTagsFilter } = useFiltersStore();

  const isReady = !isLoadingRes && !isLoadingTags;

  let groupedTags: Record<string, Tag[]> = {};

  if (isReady) {
    groupedTags = groupTags(tags);

    Object.keys(groupedTags).forEach((category: string) => {
      groupedTags[category].forEach((tag: Tag) => {
        const count = resources.data.filter((resource: any) => {
          return resource.attributes.tags.data.find(
            (t: Tag) => t.id === tag.id,
          );
        });
        tag.name = `${tag.name} (${count.length})`;
      });
    });
  }

  const handleCheck = (value: string) => {
    const opts: string[] = [...tagsFilter];

    if (opts.includes(value)) {
      opts.splice(opts.indexOf(value), 1);
    } else {
      opts.push(value);
    }

    setTagsFilter(opts);
  };

  return (
    isReady && (
      <HvStack direction="column" spacing="sm">
        {Object.keys(groupedTags).map((category: string) => (
          <span key={category}>
            <HvTypography paragraph className={classes.label} variant="label">{category}</HvTypography>
            {groupedTags[category].map((tag: Tag) => (
              <HvCheckBox
                key={tag.id}
                classes={{ root: classes.root }}
                label={tag.name}
                onChange={() => handleCheck(tag.id)}
                checked={tagsFilter.includes(tag.id)}
              />
            ))}
          </span>
        ))}
      </HvStack>
    )
  );
};
