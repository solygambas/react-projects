import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route
            path="/auth/signin"
            key="auth_O"
            element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
          />
          <Route
            path="/auth/signup"
            key="auth_1"
            element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
          />
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
