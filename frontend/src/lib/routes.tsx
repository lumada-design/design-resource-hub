import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Introduction = lazy(() => import("pages/Introduction"));
const Overview = lazy(() => import("pages/Overview"));
const Resource = lazy(() => import("pages/Resource"));
const NotFound = lazy(() => import("pages/NotFound"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Overview />} />
    <Route path="/intro" element={<Introduction />} />
    <Route path="/resource/:name" element={<Resource />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
