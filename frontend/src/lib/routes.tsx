import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Introduction = lazy(() => import("pages/Introduction"));
const Home = lazy(() => import("pages/Home"));
const Resource = lazy(() => import("pages/Resource"));
const TermsUse = lazy(() => import("pages/TermsUse"));
const TermsContribute = lazy(() => import("pages/TermsContribute"));
const NotFound = lazy(() => import("pages/NotFound"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/intro" element={<Introduction />} />
    <Route path="/resource/:id" element={<Resource />} />
    <Route path="/terms-use" element={<TermsUse />} />
    <Route path="/terms-contribute" element={<TermsContribute />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
