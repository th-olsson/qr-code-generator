"use client";

import { createContext, useContext, useMemo, useState } from "react";

const QrCodeContext = createContext({});

type State = { value: string; setValue: (value: string) => void };

type Context = State & {
  textInput: State;
  urlInput: State;
  emailInput: State;
  phoneInput: State;
};

export function QrCodeProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("");
  const [textValue, setTextValue] = useState("Your text here");
  const [urlValue, setUrlValue] = useState("https://zqr.se/");
  const [emailValue, setEmailValue] = useState("example@mail.com");
  const [phoneValue, setPhoneValue] = useState("+1 (123) 456–7890");

  const providerValue = useMemo<Context>(() => {
    return {
      value,
      setValue,
      textInput: { value: textValue, setValue: setTextValue },
      urlInput: { value: urlValue, setValue: setUrlValue },
      emailInput: { value: emailValue, setValue: setEmailValue },
      phoneInput: { value: phoneValue, setValue: setPhoneValue },
    };
  }, [value, textValue, urlValue, emailValue, phoneValue]);

  return (
    <QrCodeContext.Provider value={providerValue}>
      {children}
    </QrCodeContext.Provider>
  );
}

export const useQrCode = () => useContext(QrCodeContext) as Context;
