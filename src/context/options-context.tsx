"use client";

import { createContext, useContext, useMemo, useState } from "react";

const OptionsContext = createContext({});

type Context = {
  size: number;
  setSize: (size: number) => void;
  transparent: boolean;
  setTransparent: (transparent: boolean) => void;
};

export function OptionsProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<Context["size"]>(128);
  const [transparent, setTransparent] = useState<Context["transparent"]>(false);

  const providerValue = useMemo<Context>(() => {
    return {
      size,
      setSize,
      transparent,
      setTransparent,
    };
  }, [size, transparent]);

  return (
    <OptionsContext.Provider value={providerValue}>
      {children}
    </OptionsContext.Provider>
  );
}

export const useOptions = () => useContext(OptionsContext) as Context;
