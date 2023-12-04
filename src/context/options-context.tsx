"use client";

import { createContext, useContext, useMemo, useState } from "react";

const OptionsContext = createContext({});

export type Level = "L" | "M" | "Q" | "H";

type Context = {
  size: number;
  setSize: (size: number) => void;
  transparent: boolean;
  setTransparent: (transparent: boolean) => void;
  level: Level;
  setLevel: (level: Level) => void;
};

export function OptionsProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<Context["size"]>(128);
  const [level, setLevel] = useState<Context["level"]>("L");
  const [transparent, setTransparent] = useState<Context["transparent"]>(false);

  const providerValue = useMemo<Context>(() => {
    return {
      size,
      setSize,
      transparent,
      setTransparent,
      level,
      setLevel,
    };
  }, [size, transparent, level]);

  return (
    <OptionsContext.Provider value={providerValue}>
      {children}
    </OptionsContext.Provider>
  );
}

export const useOptions = () => useContext(OptionsContext) as Context;
