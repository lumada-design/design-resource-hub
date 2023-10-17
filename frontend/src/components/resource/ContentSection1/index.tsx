import { Container, TextSection } from "components/common";
import { formatUrl } from "lib/utils";
import classes from "./styles";

export const ContentSection1 = ({ data }) => {
  const { section_1, image } = data[0].attributes;
  const { url } = image.data.attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <div className={classes.imageContainer}>
          <img src={formatUrl(url)} alt="image" className={classes.image} />
        </div>
        <TextSection
          title={section_1.title}
          description={section_1.description}
        />
      </Container>
    </div>
  );
};
