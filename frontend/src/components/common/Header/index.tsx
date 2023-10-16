import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import HitachiLogo from "assets/HitachiLogo";
import { Container } from "components/common";
import { useBrand } from "lib/api/brand";

import classes from "./styles";

type Item = {
  label: string;
  href: string;
} | null;

const parseLinks = (links: string) => {
  return links
    .split(";")
    .map((link: string) => {
      const [label, href] = link.replace(/(\r\n|\n|\r)/gm, "").split("|");
      return label.length ? { label, href } : null;
    })
    .filter(Boolean);
};

export const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { data: brand } = useBrand();

  if (!brand) return <div className={classes.preload} />;

  const { brand_name, brand_tagline, main_menu } = brand.data.attributes;
  const menu: Item[] = parseLinks(main_menu);

  return (
    <>
      <div className={classes.area1}>
        <Container>
          <div className={classes.logo}>
            <HitachiLogo onClick={() => navigate("/")} />
          </div>
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
            {menu.map((item) => (
              <li key={item?.label}>
                <HvTypography variant="label" component="a" href={item?.href}>
                  {item?.label}
                </HvTypography>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
};
