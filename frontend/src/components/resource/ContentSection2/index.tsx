import { Container, TextSection } from "components/common";
import classes from "./styles";

export const ContentSection2 = ({ data }: Record<string, any>) => {
  const { why, when } = data[0].attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection title="Why should i use it?" description={why} />
        <TextSection title="When should i use it?" description={when} />
      </Container>
    </div>
  );
};
