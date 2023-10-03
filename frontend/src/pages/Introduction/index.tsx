import {
  TopSection,
  Section1,
  Section2,
  Section3,
  Section4,
} from "components/introduction";
import { Footer } from "components/common";

import { useIntro } from "lib/api/intro";

const Resource = () => {
  const { data: intro } = useIntro();

  return (
    intro && (
      <>
        <TopSection data={intro?.data} />
        <Section1 data={intro?.data} />
        <Section2 data={intro?.data} />
        <Section3 data={intro?.data} />
        <Section4 data={intro?.data} />
        <Footer />
      </>
    )
  );
};

export default Resource;
