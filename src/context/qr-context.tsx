"use client";

import { createContext, useContext, useMemo, useState } from "react";

const QrCodeContext = createContext({});

type Context = {
  value: string;
  setValue: (value: string) => void;
};

export function QrCodeProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<Context["value"]>("");

  const providerValue = useMemo(() => {
    return {
      value,
      setValue,
    };
  }, [value, setValue]);

  return (
    <QrCodeContext.Provider value={providerValue}>
      {children}
    </QrCodeContext.Provider>
  );
}

export const useQrCode = () => useContext(QrCodeContext) as Context;
