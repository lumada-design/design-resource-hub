import { ChangeEvent } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { HvGrid, HvInput } from "@hitachivantara/uikit-react-core";

import {
  BannerSection,
  CardsSection,
  FilterSection,
} from "components/overview";
import { Container, Footer } from "components/common";
import { useFiltersStore } from "lib/store/filters";
import { useOverview } from "lib/api/overview";
import { useResources } from "lib/api/resource";
import classes from "./styles";

const Resources = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const { searchFilter, setSearchFilter, tagsFilter } = useFiltersStore();
  const { data: resources } = useResources(searchFilter, tagsFilter);
  const { data: overview } = useOverview();

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchFilter(event.target.value);
  };

  const isReady = overview && resources;

  return (
    isReady && (
      <>
        <BannerSection data={overview.data} />
        <Container maxWidth="lg" classes={{ container: classes.container }}>
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
                  <CardsSection data={resources.data} />
                </HvGrid>
              </HvGrid>
            </HvGrid>
          </HvGrid>
        </Container>
        <Footer />
      </>
    )
  );
};

export default Resources;
