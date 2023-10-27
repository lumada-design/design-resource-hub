import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import { useTermsUsePage } from "lib/api/page";
import { Container } from "components/common";
import classes from "./styles";

const TermsUse = () => {
  const { data: termsUse } = useTermsUsePage();

  if (!termsUse) return null;

  const { title, content } = termsUse.data.attributes;

  return (
    <Container classes={{ root: classes.container }}>
      <HvTypography variant="title1">{title}</HvTypography>
      <br />
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <HvTypography style={{ marginTop: 10 }} variant="title3">
              {children}
            </HvTypography>
          ),
          h4: ({ children }) => (
            <HvTypography style={{ marginTop: 20 }} variant="title4">
              {children}
            </HvTypography>
          ),
          p: ({ children }) => (
            <HvTypography style={{ marginTop: 10 }} variant="body">
              {children}
            </HvTypography>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Container>
  );
};

export default TermsUse;
