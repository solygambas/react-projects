import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

function Root() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      return navigate("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <>
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
          <Route
            path="/dashboard"
            element={
              !isSignedIn ? <Navigate to="/" replace /> : <DashboardLazy />
            }
          />
          <Route path="/" key="marketing_O" element={<MarketingLazy />} />
          <Route
            path="/pricing"
            key="marketing_1"
            element={<MarketingLazy />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
};

export default App;
