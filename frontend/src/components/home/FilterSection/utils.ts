export const groupResourceTags = (tags) => {
  return tags.data?.reduce((acc, tag) => {
    const { name } = tag.attributes;
    const { name: category, type } =
      tag.attributes.resource_category.data?.attributes;

    acc[category] = acc[category] || [];
    acc[category].push({ id: tag.id, name, category, type, count: 0 });

    return acc;
  }, {});
};

export const setTagsCounter = (resources, resourceTypes, groupedTags) => {
  return resources?.data.forEach(({ attributes }) => {
    // Loop through resource types
    resourceTypes?.forEach((type) => {
      // Get the resource type data
      const resourceTypeData = attributes[`resource_${type}`]?.data;
      // Check if the resource type data is an array
      const resourceTags = Array.isArray(resourceTypeData)
        ? resourceTypeData
        : [resourceTypeData];

      resourceTags?.forEach((resourceTag) => {
        groupedTags &&
          Object.keys(groupedTags).forEach((key) => {
            groupedTags[key].forEach((tag) => {
              // Check if the tag name matches the resource tag name
              if (tag.name === resourceTag?.attributes.name) {
                // Increment the count if there's a match
                tag.count += 1;
              }
            });
          });
      });
    });
  });
};
