import { HvTypography } from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { formatUrl } from "lib/utils";
import classes from "./styles";

export const ChampionsSection = ({ data }) => {
  const { champions } = data[0].attributes;

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <HvTypography variant="title3">
          Resource Champions & Organization
        </HvTypography>
        <div className={classes.separator} />
        <div className={classes.champions}>
          {champions?.data.map((champion) => {
            const { name, job, organization, avatar } = champion.attributes;
            const avatarUrl = avatar.data?.attributes.url;
            const orgName = organization?.data?.attributes.name;

            return (
              <div key={champion.id} className={classes.content}>
                <img
                  src={formatUrl(avatarUrl)}
                  alt="icon"
                  className={classes.picture}
                />
                <div className={classes.text}>
                  <HvTypography variant="caption1" style={{ fontWeight: 600 }}>
                    {name}|{job}
                  </HvTypography>
                  <HvTypography variant="caption1">{orgName}</HvTypography>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
