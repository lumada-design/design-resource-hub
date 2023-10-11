import "lib/i18n";
import { BrowserRouter as Router } from "react-router-dom";
import { HvProvider } from "@hitachivantara/uikit-react-core";

import { Header, Footer } from "components/common";
import Routes from "lib/routes";

const App = () => (
  <Router>
    <HvProvider rootElementId="hv-root">
      <Header />
      <Routes />
      <Footer />
    </HvProvider>
  </Router>
);

export default App;
