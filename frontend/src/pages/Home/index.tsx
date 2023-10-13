import { ChangeEvent } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { HvGrid, HvInput } from "@hitachivantara/uikit-react-core";

import {
  BannerSection,
  CardsSection,
  FilterSection,
} from "components/home";
import { Container } from "components/common";
import { useHomeBanner } from "lib/api/homeBanner";
import { useFiltersStore } from "lib/store/filters";
import classes from "./styles";

const Resources = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { searchFilter, setSearchFilter } = useFiltersStore();
  const { data: homeBanner } = useHomeBanner();

  if (!homeBanner) return null;

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchFilter(event.target.value);
  };

  return (
    <>
      <BannerSection data={homeBanner.data} />
      <Container classes={{ root: classes.container }}>
        <HvGrid container>
          {isMdUp && (
            <HvGrid item md={3} xs={12}>
              <FilterSection />
            </HvGrid>
          )}
          <HvGrid item md={9} xs={12}>
            <HvGrid container>
              <HvGrid item md={4} sm={6} xs={12}>
                <HvInput
                  aria-label="search"
                  placeholder="Search"
                  type="search"
                  value={searchFilter}
                  onChange={handleSearch}
                />
              </HvGrid>
              <HvGrid item xs={12}>
                <CardsSection />
              </HvGrid>
            </HvGrid>
          </HvGrid>
        </HvGrid>
      </Container>
    </>
  )
};

export default Resources;
