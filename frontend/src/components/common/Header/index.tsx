import { useNavigate } from "react-router-dom";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import HitachiLogo from "assets/HitachiLogo";
import { useHeader } from "lib/api/header";

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
  const { data: header } = useHeader();

  if (!header) return null;

  const { brand_1, brand_2, links } = header.data.attributes;
  const menu: Item[] = parseLinks(links);

  return (
    <>
      <div className={classes.section1}>
        <div className={classes.logo}>
          <HitachiLogo onClick={() => navigate("/")} />
        </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.brand}>
          <HvTypography variant="label">{brand_1}</HvTypography>
          <HvTypography>&nbsp;|&nbsp;</HvTypography>
          <HvTypography>{brand_2}</HvTypography>
        </div>
        <ul className={classes.menu}>
          {menu.map((item) => (
            <li key={item?.label}>
              <HvTypography component="a" href={item?.href}>
                {item?.label}
              </HvTypography>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
