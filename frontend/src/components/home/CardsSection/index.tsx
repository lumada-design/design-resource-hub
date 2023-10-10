import {
  HvGrid,
  HvCard,
  HvCardHeader,
  HvCardContent,
  HvCardMedia,
  HvTypography,
  HvTag,
} from "@hitachivantara/uikit-react-core";
import { useNavigate } from "react-router-dom";

import { API_URL } from "lib/api/constants";
import { useFiltersStore } from "lib/store/filters";
import { useResources } from "lib/api/resource";
import classes from "./styles";

export const CardsSection = () => {
  const navigate = useNavigate();
  const { searchFilter, tagsFilter } = useFiltersStore();
  const { data: resources, isLoading } = useResources(searchFilter, tagsFilter);

  return (
    !isLoading && <HvGrid container>
      {resources.data.map((resource) => {
        const { title, description, card_image, tags, organization } = resource.attributes;
        console.log('organization: ', organization);
        const organizationName = organization.data?.attributes.name;
        const imageUrl = card_image.data?.attributes.url;
        const resourceUrl = `/resource/${title}`;

        return (
          <HvGrid item md={4} sm={6} xs={12} key={resource.id}>
            <HvCard
              bgcolor="atmo1"
              statusColor="negative"
              className={classes.root}
              classes={{ semanticBar: classes.hide }}
              selectable
              onClick={() => navigate(resourceUrl)}
            >
              <HvCardMedia
                alt="Compressor"
                component="img"
                height={140}
                image={`${API_URL}${imageUrl}`}
              />
              <HvCardHeader aria-label={title} title={title} />
              <HvCardContent>
                <HvTypography>{description}</HvTypography>
              </HvCardContent>
              <HvCardContent>
                {tags.data.map((tag) => {
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
                <HvTypography className={classes.org} variant="caption1">By {organizationName}</HvTypography>
              </HvCardContent>
            </HvCard>
          </HvGrid>
        );
      })}
    </HvGrid>
  );
};
