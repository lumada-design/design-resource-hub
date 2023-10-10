import {
  BannerSection,
  Section1,
  Section2,
  Section3,
} from "components/introduction";
import { Footer } from "components/common";

import { useIntroduction } from "lib/api/introduction";

const Resource = () => {
  const { data: introduction } = useIntroduction();

  return (
    introduction && (
      <>
        <BannerSection data={introduction.data} />
        <Section1 data={introduction.data} />
        <Section2 data={introduction.data} />
        <Section3 data={introduction.data} />
        <Footer />
      </>
    )
  );
};

export default Resource;
