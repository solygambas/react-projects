import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ location: { pathname: nextPathname } }) => {
        const { pathname } = location;
        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });
  });

  return <div ref={ref} />;
};

export default MarketingApp;
