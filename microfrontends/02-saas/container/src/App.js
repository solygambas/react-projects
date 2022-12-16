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
          <Route path="/auth/signin" key="auth_O" element={<AuthLazy />} />
          <Route path="/auth/signup" key="auth_1" element={<AuthLazy />} />
          <Route path="/" key="marketing_O" element={<MarketingLazy />} />
          <Route
            path="/pricing"
            key="marketing_1"
            element={<MarketingLazy />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
