import { useNavigate } from "react-router-dom";
import { HvButton, HvEmptyState } from "@hitachivantara/uikit-react-core";
import { Info } from "@hitachivantara/uikit-react-icons";

import classes from "./styles";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <HvEmptyState
        className={classes.empty}
        title="Not Found"
        message="The page you are looking for does not exist."
        icon={<Info />}
        action={
          <HvButton variant="primaryGhost" onClick={() => navigate(-1)}>
            Go Back
          </HvButton>
        }
      />
    </div>
  );
};

export default NotFound;
