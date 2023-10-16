import { useNavigate } from "react-router-dom";
import { HvButton } from "@hitachivantara/uikit-react-core";

export const LinkButton = ({ label, target }) => {
  const navigate = useNavigate();

  return (
    <HvButton
      style={{ marginTop: 20 }}
      variant="primary"
      onClick={() => navigate(target)}
    >
      {label}
    </HvButton>
  );
};
