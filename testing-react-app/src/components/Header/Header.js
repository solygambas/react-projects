import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header-1">
        {title}
      </h1>
      <h3 title="Header" className="header">
        Share your todos
      </h3>
    </>
  );
}
