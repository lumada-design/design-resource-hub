import {
  HvGrid,
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvCardMedia,
  HvTypography,
  HvEmptyState,
} from "@hitachivantara/uikit-react-core";
import { Info } from "@hitachivantara/uikit-react-icons";
import { useNavigate } from "react-router-dom";

import { Loading, TagsList } from "components/common";
import { useResources } from "lib/api/resource";
import { useFiltersStore } from "lib/store/filters";
import { formatUrl } from "lib/utils";
import classes from "./styles";

export const CardsSection = () => {
  const navigate = useNavigate();
  const { searchFilter, resourceFilters, resourceTypes } = useFiltersStore();
  const { data: resources, isLoading } = useResources(
    searchFilter,
    resourceFilters,
    resourceTypes,
  );

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <Loading />
      </div>
    );
  }

  if (!resources?.data.length) {
    return (
      <HvEmptyState
        title="No resources found"
        message="Try changing your filters or searching for something else"
        icon={<Info />}
        classes={{ root: classes.empty }}
      />
    );
  }

  return (
    <HvGrid container>
      {resources.data.map((resource) => {
        const { name, description, image, organization } = resource.attributes;

        const organizationName = organization.data?.attributes.name;
        const imageUrl = image.data?.attributes.url;
        const resourceUrl = `/resource/${resource.id}`;

        return (
          <HvGrid item md={4} sm={6} xs={12} key={resource.id}>
            <HvCard
              bgcolor="atmo1"
              statusColor="negative"
              className={classes.card}
              classes={{ semanticBar: classes.hide }}
              selectable
              onClick={() => navigate(resourceUrl)}
            >
              <HvCardMedia
                alt="Compressor"
                component="img"
                height={140}
                image={formatUrl(imageUrl)}
              />
              <HvCardHeader aria-label={name} title={name} />
              <HvCardContent>
                <HvTypography>{description}</HvTypography>
              </HvCardContent>
              <HvCardContent>
                <TagsList data={resource} />
                <HvTypography className={classes.org} variant="caption1">
                  By {organizationName}
                </HvTypography>
              </HvCardContent>
            </HvCard>
          </HvGrid>
        );
      })}
    </HvGrid>
  );
};
