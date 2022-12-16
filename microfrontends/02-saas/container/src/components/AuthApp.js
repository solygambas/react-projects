import React, { useContext, useEffect, useRef } from "react";
import { useLocation, UNSAFE_NavigationContext } from "react-router-dom";
import { mount } from "auth/AuthApp";

const AuthApp = () => {
  const ref = useRef(null);
  // doesn't work with react-router-dom 6.4
  const { navigator } = useContext(UNSAFE_NavigationContext);
  const location = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ location: { pathname: nextPathname } }) => {
        const { pathname } = location;
        if (pathname !== nextPathname) {
          navigator.push(nextPathname);
        }
      },
    });
    navigator.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
