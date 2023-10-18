import {
  BannerSection,
  ContentSection1,
  ContentSection2,
  ContentSection3,
} from "components/introduction";

import { useIntroPage } from "lib/api/page";

const Resource = () => {
  const { data: intro } = useIntroPage();

  if (!intro) return null;

  return (
    <div>
      <BannerSection data={intro.data} />
      <>
        <ContentSection1 data={intro.data} />
        <ContentSection2 data={intro.data} />
        <ContentSection3 data={intro.data} />
      </>
    </div>
  );
};

export default Resource;
