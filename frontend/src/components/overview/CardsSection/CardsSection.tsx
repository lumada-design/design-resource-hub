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
import { styles } from "./styles";

interface Data {
  id: string;
  attributes: Record<string, any>;
}

interface CardsProps {
  data: Data[];
}

export const CardsSection = ({ data }: CardsProps) => {
  const navigate = useNavigate();

  return (
    <HvGrid container>
      {data.map((resource: Data) => {
        const { name, description, card_image, tags } = resource.attributes;
        const imageUrl = card_image.data.attributes.url;
        const resourceUrl = `/resource/${name}`;

        return (
          <HvGrid item md={4} sm={6} xs={12} key={resource.id}>
            <HvCard
              bgcolor="atmo1"
              statusColor="negative"
              className={styles.root}
              classes={{ semanticBar: styles.container }}
              selectable
              onClick={() => navigate(resourceUrl)}
            >
              <HvCardMedia
                alt="Compressor"
                component="img"
                height={140}
                image={`${API_URL}${imageUrl}`}
              />
              <HvCardHeader aria-label={name} title={name} />
              <HvCardContent>
                <HvTypography>{description}</HvTypography>
              </HvCardContent>
              <HvCardContent>
                {tags.data.map((tag: Data) => {
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
              </HvCardContent>
            </HvCard>
          </HvGrid>
        );
      })}
    </HvGrid>
  );
};
