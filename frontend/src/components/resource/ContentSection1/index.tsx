import { Container, TextSection } from "components/common";
import classes from "./styles";

export const ContentSection1 = ({ data }: Record<string, any>) => {
  const { title, what, tags } = data[0].attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          title={`What is ${title}?`}
          description={what}
          tags={tags}
        />
      </Container>
    </div>
  );
};
