import {
  BannerSection,
  WhatSection,
  WhyWhenSection,
  TemplatesSection,
  ChampionsSection,
} from "components/resource";
import { Footer } from "components/common";

import { useResource } from "lib/api/resource";

const Resource = () => {
  const { data: resource } = useResource();

  return (
    resource && (
      <>
        <BannerSection data={resource.data} />
        <WhatSection data={resource.data} />
        <WhyWhenSection data={resource.data} />
        <TemplatesSection data={resource.data} />
        <ChampionsSection data={resource.data} />
        <Footer />
      </>
    )
  );
};

export default Resource;
