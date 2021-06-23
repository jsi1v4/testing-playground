import React, { createContext, useContext } from "react";

import { Service } from "./mock-service";
import { IService } from "./types";

export const Context = createContext<IService>(null as never);

export const useTestContext = () => useContext(Context);

export function TestProvider({ children }) {
  return <Context.Provider value={new Service()}>{children}</Context.Provider>;
}
