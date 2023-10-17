import {
  BannerSection,
  Section1,
  Section2,
  Section3,
} from "components/introduction";

import { useIntroPage } from "lib/api/introPage";

const Resource = () => {
  const { data: introduction } = useIntroPage();

  return (
    introduction && (
      <>
        <BannerSection data={introduction.data} />
        <Section1 data={introduction.data} />
        <Section2 data={introduction.data} />
        <Section3 data={introduction.data} />
      </>
    )
  );
};

export default Resource;
