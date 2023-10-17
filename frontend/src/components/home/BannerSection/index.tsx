import { HvTypography } from "@hitachivantara/uikit-react-core";

import { Container, LinkButton } from "components/common";
import { formatText, formatUrl } from "lib/utils";
import classes from "./styles";

export const BannerSection = ({ data }) => {
  const { title, description, button_label, button_target, image } =
    data?.attributes;
  const imageUrl = image.data?.attributes.url;

  return (
    <div
      className={classes.root}
      style={{
        background: `url(${formatUrl(imageUrl)}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Container classes={{ root: classes.container }}>
        <div className={classes.textContainer}>
          <HvTypography
            style={{ whiteSpace: "pre-line" }}
            className={classes.text}
            variant="title1"
          >
            {formatText(title)}
          </HvTypography>
          <HvTypography className={classes.text}>
            {formatText(description)}
          </HvTypography>
        </div>
        <LinkButton label={button_label} target={button_target} />
      </Container>
    </div>
  );
};
