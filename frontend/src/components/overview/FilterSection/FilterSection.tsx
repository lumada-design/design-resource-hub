import {
  HvTypography,
  HvCheckBox,
  HvStack,
} from "@hitachivantara/uikit-react-core";

import { useFiltersStore } from "lib/store";
import { useTags } from "lib/api";
import { styles } from "./styles";

interface Data {
  data: Record<string, unknown>[];
  meta: Record<string, unknown>;
}

interface Tag {
  id: string;
  name: string;
}

const groupTags = (tags: Data) => {
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
  const { tagsFilter, setTagsFilter } = useFiltersStore();
  const { data, isLoading } = useTags();
  const tags = groupTags(data);

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
    !isLoading && (
      <HvStack direction="column" spacing="sm">
        {Object.keys(tags).map((category: string) => (
          <span key={category}>
            <HvTypography variant="label">{category}</HvTypography>
            {tags[category].map((tag: Tag) => (
              <HvCheckBox
                key={tag.id}
                classes={{ root: styles.root }}
                label={tag.name}
                onChange={() => handleCheck(tag.name)}
                checked={tagsFilter.includes(tag.name)}
              />
            ))}
          </span>
        ))}
      </HvStack>
    )
  );
};
