import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import classes from "./styles";

export const Section1 = ({ data }: Record<string, any>) => {
  const { section_1_title, section_1_description } = data.attributes;

  return (
    <div className={classes.root}>
      <HvContainer className={classes.container} maxWidth="lg">
        <TextSection style={{ width: 650 }} title={section_1_title} description={section_1_description} />
      </HvContainer>
    </div>
  );
};
