import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (
  element,
  { onSignIn, onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  const root = createRoot(element);
  root.render(<App onSignIn={onSignIn} history={history} />);

  return {
    onParentNavigate({ location: { pathname: nextPathname } }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
