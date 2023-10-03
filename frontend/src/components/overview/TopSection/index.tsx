import { HvTypography, HvContainer } from "@hitachivantara/uikit-react-core";

import styles from "./styles";

export const TopSection = () => {
  return (
    <div className={styles.root}>
      <HvContainer maxWidth="lg" className={styles.container}>
        <div className={styles.textContainer}>
          <HvTypography className={styles.text} variant="title1">
            Unlock Your Creativity and Accelerate Your Work
          </HvTypography>
          <HvTypography className={styles.text}>
            Explore the Design Resources Library using the categorization
            available to find the right resource for your use case.
          </HvTypography>
        </div>
      </HvContainer>
    </div>
  );
};
