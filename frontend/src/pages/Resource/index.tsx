import {
  BannerSection,
  ContentSection1,
  ContentSection2,
  TemplatesSection,
  ChampionsSection,
} from "components/resource";

import { useResource } from "lib/api/resource";
import { useResourcePage } from "lib/api/resourcePage";
import classes from "./styles";

const Resource = () => {
  const { data: resource } = useResource();
  const { data: resourcePage } = useResourcePage();

  if (!resource || !resourcePage) return null;
  console.log("resource: ", resource);

  return (
    <>
      <BannerSection data={resource.data} />
      <div className={classes.container}>
        <ContentSection1 data={resource.data} />
        <ContentSection2 data={resource.data} />
        <TemplatesSection data={resource.data} page={resourcePage.data} />
        <ChampionsSection data={resource.data} />
      </div>
    </>
  );
};

export default Resource;
