import {
  TopSection,
  WhatSection,
  WhyWhenSection,
  TemplatesSection,
  ChampionsSection,
} from "components/resource";
import { Footer } from "components/common";

import { useResource } from "lib/api";

const Resource = () => {
  const { data: resource } = useResource();
  console.log('resource: ', resource);

  return (
    resource && (
      <>
        <TopSection data={resource?.data} />
        <WhatSection data={resource?.data} />
        <WhyWhenSection data={resource?.data} />
        <TemplatesSection data={resource?.data} />
        <ChampionsSection data={resource?.data} />
        <Footer />
      </>
    )
  );
};

export default Resource;
