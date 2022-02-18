import { createContext, useContext } from "react";
import { noop } from "utils";

export const LayoutPageContext = createContext({
  onMenuClick: noop,
});

export const useLayoutPageContext = () => {
  return useContext(LayoutPageContext);
};

export const LayoutPageProvider = LayoutPageContext.Provider;
