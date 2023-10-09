import { HvContainer } from "@hitachivantara/uikit-react-core";

import { TextSection } from "components/common";
import classes from "./styles";

export const Section2 = ({ data }: Record<string, any>) => {
  const { section_2_title, section_2_description } = data.attributes;

  return (
    <div className={classes.root}>
      <HvContainer className={classes.container} maxWidth="lg">
        <TextSection
          style={{ width: 650 }}
          title={section_2_title}
          description={section_2_description}
        />
      </HvContainer>
    </div>
  );
};
