import { useNavigate } from "react-router-dom";
import { HvHeader, HvHeaderBrand } from "@hitachivantara/uikit-react-core";

import HitachiLogo from "assets/HitachiLogo";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HvHeader>
      <HvHeaderBrand
        style={{ cursor: "pointer" }}
        logo={<HitachiLogo />}
        name="Resources Library"
        onClick={() => navigate("/")}
      />
    </HvHeader>
  );
};
