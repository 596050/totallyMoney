import React, { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

import { StoreProvider } from "../../context";
import { theme, ThemeProvider } from "..";

export const WrapWithProviders = (
  {
    initialEntries = ["/"],
  }: {
    initialEntries?: string[];
  } = {
    initialEntries: ["/"],
  }
) => ({ children }: { children: ReactElement }) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={theme}>
        <StoreProvider>{children}</StoreProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};
