import clsx from "clsx";
import { useMediaQuery, useTheme } from "@mui/material";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { useBrand } from "lib/api/brand";
import { parseLinks } from "lib/utils";

import classes from "./styles";

type Item = {
  label: string;
  href: string;
} | null;

export const Footer = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { data: brand } = useBrand();

  if (!brand) return null;

  const { brand_name, brand_tagline, main_menu, secondary_menu, copyright } =
    brand.data.attributes;

  const mainMenu: Item[] = parseLinks(main_menu);
  const secondaryMenu: Item[] = parseLinks(secondary_menu);

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
            {mainMenu.map((item) => (
              <li key={item?.label}>
                <HvTypography variant="label" component="a" href={item?.href}>
                  {item?.label}
                </HvTypography>
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
            {secondaryMenu.map((item) => (
              <li key={item?.label}>
                <HvTypography
                  variant="caption1"
                  component="a"
                  href={item?.href}
                >
                  {item?.label}
                </HvTypography>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};
