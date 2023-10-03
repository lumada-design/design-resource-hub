import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import classes from "./styles";

export const Section4 = ({ data }: Record<string, any>) => {
  const { section_4_title, section_4_description } = data.attributes;

  return (
    <div className={classes.root}>
      <HvContainer className={classes.container} maxWidth="lg">
        <TextSection style={{ width: 650 }} title={section_4_title} description={section_4_description} />
      </HvContainer>
    </div>
  );
};
