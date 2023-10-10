import { Container, TextSection } from "components/common";
import classes from "./styles";

export const Section3 = ({ data }: Record<string, any>) => {
  const { section3_title } = data.attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          style={{ width: 650 }}
          title={section3_title}
        />
      </Container>
    </div>
  );
};
