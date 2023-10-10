import { HvTypography } from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { API_URL } from "lib/api/constants";
import classes from "./styles";

export const ChampionsSection = ({ data }: Record<string, any>) => {
  const { champions } = data[0].attributes;

  return (
    <div className={classes.root}>
      <Container>
        <div style={{ width: "100%" }}>
          <HvTypography variant="title3">
            Resource Champions & Organization
          </HvTypography>
          <div className={classes.separator} />
          <div className={classes.champions}>
            {champions?.data.map((champion: Record<string, any>) => {
              const { name, job, organization, avatar } = champion.attributes;
              const avatarUrl = avatar.data.attributes.url;

              return (
                <div key={champion.id} className={classes.container}>
                  <img
                    src={`${API_URL}${avatarUrl}`}
                    alt="icon"
                    className={classes.picture}
                  />
                  <div className={classes.text}>
                    <HvTypography
                      variant="caption1"
                      style={{ fontWeight: 600 }}
                    >
                      {name}|{job}
                    </HvTypography>
                    <HvTypography variant="caption1">
                      {organization}
                    </HvTypography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
