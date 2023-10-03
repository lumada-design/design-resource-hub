import "lib/i18n";
import { SWRConfig } from "swr";
import { BrowserRouter as Router } from "react-router-dom";
import { HvProvider } from "@hitachivantara/uikit-react-core";

import Routes from "lib/routes";
import { fetcher } from "lib/api/fetcher";
import { Header } from "components/common";

const App = () => (
  <Router>
    <HvProvider rootElementId="hv-root">
      <Header />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Routes />
      </SWRConfig>
    </HvProvider>
  </Router>
);

export default App;
