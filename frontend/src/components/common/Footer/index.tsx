import { HvTypography } from "@hitachivantara/uikit-react-core";

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

export const Footer = () => {
    const { data: brand } = useBrand();

    if (!brand) return null;

    const { brand_name, brand_lead, navigation } = brand.data.attributes;
    const menu: Item[] = parseLinks(navigation);

    return (
        <div className={classes.root}>
            <Container classes={{ root: classes.container }}>
                <div className={classes.brand}>
                    <HvTypography variant="label">{brand_name}</HvTypography>
                    <HvTypography>&nbsp;|&nbsp;</HvTypography>
                    <HvTypography>{brand_lead}</HvTypography>
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
            </Container>
        </div>
    );
};