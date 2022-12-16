import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path="/auth/signin" element={<AuthLazy />} />
          <Route path="/auth/signup" element={<AuthLazy />} />
          <Route path="/" element={<MarketingLazy />} />
          <Route path="/pricing" element={<MarketingLazy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
