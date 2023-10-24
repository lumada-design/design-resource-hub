import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import HitachiLogo from "assets/HitachiLogo";
import MailIcon from "assets/MailIcon";
import { Container, LinkNav } from "components/common";
import { useBrand } from "lib/api/brand";

import classes from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { data: brand } = useBrand();

  if (!brand) return <div className={classes.preload} />;

  const { brand_name, brand_tagline, main_menu, contact_email } = brand.data.attributes;
  return (
    <>
      <div className={classes.area1}>
        <Container>
          <div className={classes.logo}>
            <HitachiLogo onClick={() => navigate("/")} />
          </div>
          <button
            type="button"
            className={classes.actions}
            onClick={() => (window.location.href = `mailto:${contact_email}`)}
          >
            <MailIcon onClick={() => navigate("/")} />
            <p>Contact Us</p>
          </button>
        </Container>
      </div>
      <div className={classes.area2}>
        <Container>
          <div className={classes.brand}>
            <HvTypography variant="label">{brand_name}</HvTypography>
            <HvTypography>&nbsp;|&nbsp;</HvTypography>
            <HvTypography>{brand_tagline}</HvTypography>
          </div>
          <ul
            className={clsx(classes.menu, { [classes.smallScreen]: isMdDown })}
          >
            {main_menu.map((item) => (
              <li key={item?.label}>
                <LinkNav
                  label={item?.label}
                  target={item?.target}
                  variant="label"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
};
