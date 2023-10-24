import clsx from "clsx";
import { useMediaQuery, useTheme } from "@mui/material";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import { Container, LinkNav } from "components/common";
import { useBrand } from "lib/api/brand";

import classes from "./styles";

export const Footer = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { data: brand } = useBrand();

  if (!brand) return null;

  const { brand_name, brand_tagline, main_menu, secondary_menu, copyright } =
    brand.data.attributes;

  return (
    <div>
      <div className={classes.area1}>
        <Container>
          <div className={classes.brand}>
            <HvTypography variant="title4">{`${brand_name} | ${brand_tagline}`}</HvTypography>
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
      <div className={classes.area2}>
        <Container>
          <div className={classes.brand}>
            <HvTypography variant="caption1">{copyright}</HvTypography>
          </div>
          <ul
            className={clsx(classes.menu, { [classes.smallScreen]: isMdDown })}
          >
            {secondary_menu.map((item) => (
              <li key={item?.label}>
                <LinkNav
                  label={item?.label}
                  target={item?.target}
                  variant="caption1"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};
