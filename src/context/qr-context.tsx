"use client";

import { createContext, useContext, useMemo, useState } from "react";

const QrCodeContext = createContext({});

type State = { value: string; setValue: (value: string) => void };

type Context = State & {
  textInput: State;
  urlInput: State;
  emailInput: State;
};

export function QrCodeProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("");
  const [textValue, setTextValue] = useState("Your text here");
  const [urlValue, setUrlValue] = useState("https://zqr.se/");
  const [emailValue, setEmailValue] = useState("example@mail.com");

  const providerValue = useMemo<Context>(() => {
    return {
      value,
      setValue,
      textInput: { value: textValue, setValue: setTextValue },
      urlInput: { value: urlValue, setValue: setUrlValue },
      emailInput: { value: emailValue, setValue: setEmailValue },
    };
  }, [value, textValue, urlValue, emailValue]);

  return (
    <QrCodeContext.Provider value={providerValue}>
      {children}
    </QrCodeContext.Provider>
  );
}

export const useQrCode = () => useContext(QrCodeContext) as Context;
