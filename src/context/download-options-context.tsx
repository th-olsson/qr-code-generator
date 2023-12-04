"use client";

import { createContext, useContext, useMemo, useState } from "react";

const DownloadOptionsContext = createContext({});

type Context = {
  size: number;
  setSize: (size: number) => void;
  transparent: boolean;
  setTransparent: (transparent: boolean) => void;
};

export function DownloadOptionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <DownloadOptionsContext.Provider value={providerValue}>
      {children}
    </DownloadOptionsContext.Provider>
  );
}

export const useDownloadOptions = () =>
  useContext(DownloadOptionsContext) as Context;
