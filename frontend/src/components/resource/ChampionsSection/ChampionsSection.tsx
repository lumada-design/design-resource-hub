import { HvContainer, HvTypography } from "@hitachivantara/uikit-react-core";

import { API_URL } from "lib/api/constants";
import styles from "./styles";

export const ChampionsSection = ({ data }: Record<string, any>) => {
  const { champions } = data[0].attributes;
  console.log('champions: ', champions);

  return (
    <div className={styles.root}>
      <HvContainer maxWidth="lg">
        <div style={{ width: "100%" }}>
          <HvTypography variant="title3">
            Resource Champions & Organization
          </HvTypography>
          <div className={styles.separator} />
          <div className={styles.champions}>
            {champions?.data.map((champion: Record<string, any>) => {
              console.log('champion: ', champion);
              const { name, job, organization, avatar } = champion.attributes;
              const avatarUrl = avatar.data.attributes.url;

              return (
                <div key={champion.id} className={styles.container}>
                  <img
                    src={`${API_URL}${avatarUrl}`}
                    alt="icon"
                    className={styles.picture}
                  />
                  <div className={styles.text}>
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
      </HvContainer>
    </div>
  );
};
