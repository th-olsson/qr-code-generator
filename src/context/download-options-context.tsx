"use client";

import { createContext, useContext, useMemo, useState } from "react";

const DownloadOptionsContext = createContext({});

type Format = "PNG" | "SVG";

type Context = {
  size: number;
  setSize: (size: number) => void;
  transparent: boolean;
  setTransparent: (transparent: boolean) => void;
  format: Format;
  setFormat: (format: Format) => void;
};

export function DownloadOptionsProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<Context["size"]>(128);
  const [transparent, setTransparent] = useState<Context["transparent"]>(false);
  const [format, setFormat] = useState<Context["format"]>("PNG");

  const providerValue = useMemo<Context>(() => {
    return {
      size,
      setSize,
      transparent,
      setTransparent,
      format,
      setFormat,
    };
  }, [size, transparent, format]);

  return (
    <DownloadOptionsContext.Provider value={providerValue}>
      {children}
    </DownloadOptionsContext.Provider>
  );
}

export const useDownloadOptions = () => useContext(DownloadOptionsContext) as Context;
