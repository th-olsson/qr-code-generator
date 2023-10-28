"use client";

import { createContext, useContext, useMemo, useState } from "react";

const SettingsContext = createContext({});

type Context = {
  size: number;
  setSize: (size: number) => void;
  bgColor: string;
  setBgColor: (bgColor: string) => void;
};

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<Context["size"]>(128);
  const [bgColor, setBgColor] = useState<Context["bgColor"]>("white");

  const providerValue = useMemo(() => {
    return {
      size,
      setSize,
      bgColor,
      setBgColor,
    };
  }, [size, bgColor]);

  return (
    <SettingsContext.Provider value={providerValue}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext) as Context;
