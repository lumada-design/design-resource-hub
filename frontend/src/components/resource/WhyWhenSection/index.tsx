import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import styles from "./styles";

export const WhyWhenSection = ({ data }: Record<string, any>) => {
  const { why, when } = data[0].attributes;

  return (
    <div className={styles.root}>
      <HvContainer maxWidth="lg" className={styles.textContainer}>
        <TextSection title="Why should i use it?" description={why} />
        <TextSection title="When should i use it?" description={when} />
      </HvContainer>
    </div>
  );
};
