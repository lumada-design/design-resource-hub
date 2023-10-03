import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import classes from "./styles";

export const Section3 = ({ data }: Record<string, any>) => {
  const { section_3_title, section_3_description } = data.attributes;

  return (
    <div className={classes.root}>
      <HvContainer className={classes.container} maxWidth="lg">
        <TextSection style={{ width: 650 }} title={section_3_title} description={section_3_description} />
      </HvContainer>
    </div>
  );
};
