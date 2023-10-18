import {
  BannerSection,
  ContentSection1,
  ContentSection2,
  TemplatesSection,
  ChampionsSection,
} from "components/resource";

import { useResource } from "lib/api/resource";
import { useResourcePage } from "lib/api/page";

const Resource = () => {
  const { data: resource } = useResource();
  const { data: resourcePage } = useResourcePage();

  if (!resource || !resourcePage) return null;

  return (
    <div>
      <BannerSection data={resource.data} />
      <>
        <ContentSection1 data={resource.data} />
        <ContentSection2 data={resource.data} />
        <TemplatesSection data={resource.data} page={resourcePage.data} />
        <ChampionsSection data={resource.data} />
      </>
    </div>
  );
};

export default Resource;
