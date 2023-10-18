import { BrowserRouter as Router } from "react-router-dom";
import { HvProvider } from "@hitachivantara/uikit-react-core";

import { Header, Footer, Suspense } from "components/common";
import Routes from "lib/routes";

const App = () => (
  <HvProvider rootElementId="hv-root">
    <Router>
      <Header />
      <Suspense>
        <Routes />
      </Suspense>
      <Footer />
    </Router>
  </HvProvider>
);

export default App;
