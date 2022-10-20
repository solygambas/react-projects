import React from "react";

import { global as designSystemGlobal } from "@solygambas/learnstorybook-design-system";

const { GlobalStyle } = designSystemGlobal;

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
