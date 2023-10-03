import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import classes from "./styles";

export const WhyWhenSection = ({ data }: Record<string, any>) => {
  const { why, when } = data[0].attributes;

  return (
    <HvContainer maxWidth="lg" className={classes.textContainer}>
      <TextSection title="Why should i use it?" description={why} />
      <TextSection title="When should i use it?" description={when} />
    </HvContainer>
  );
};
