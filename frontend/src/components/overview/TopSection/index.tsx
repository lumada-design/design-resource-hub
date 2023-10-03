import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvContainer,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import classes from "./styles";

export const TopSection = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <HvContainer maxWidth="lg" className={classes.container}>
        <div className={classes.textContainer}>
          <HvTypography className={classes.text} variant="title1">
            Unlock Your Creativity and Accelerate Your Work
          </HvTypography>
          <HvTypography className={classes.text}>
            Explore the Design Resources Library using the categorization
            available to find the right resource for your use case.
          </HvTypography>
        </div>
        <HvButton style={{ marginTop: 20 }} variant="primary" onClick={() => navigate("/intro")}>
          Learn More
        </HvButton>
      </HvContainer>
    </div>
  );
};
