import {
  BannerSection,
  ContentSection1,
  ContentSection2,
  TemplatesSection,
  ChampionsSection,
} from "components/resource";

import { useResource } from "lib/api/resource";
import { useBanners } from "lib/api/banner";

const Resource = () => {
  const { data: resource } = useResource();
  const { data: banners } = useBanners();

  if (!resource || !banners) return null;

  const bannerData = banners.data.filter(
    (item) => item.attributes.type === "Resource",
  )[0];

  return (
    resource && (
      <>
        <BannerSection
          bannerData={bannerData}
          resourceData={resource.data[0]}
        />
        {/* <ContentSection1 data={resource.data} />
        <ContentSection2 data={resource.data} />
        <TemplatesSection data={resource.data} />
        <ChampionsSection data={resource.data} /> */}
      </>
    )
  );
};

export default Resource;
