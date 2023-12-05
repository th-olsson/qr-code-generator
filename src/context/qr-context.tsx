"use client";

import { createContext, useContext, useMemo, useState } from "react";

const QrCodeContext = createContext({});
export enum WifiEncryption {
  wep = "WEP",
  wpa = "WPA",
  blank = "blank",
}
export type WifiHidden = "false" | "true";

type TextInput = { value: string; setValue: (value: string) => void };

type WifiInput = {
  ssid: string;
  encryption: WifiEncryption | "";
  password: string;
  hidden: WifiHidden;
};

type Context = TextInput & {
  textInput: TextInput;
  urlInput: TextInput;
  emailInput: TextInput;
  phoneInput: TextInput;
  wifiInput: { wifi: WifiInput; setWifi: (wifi: WifiInput) => void };
};

export function QrCodeProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("");
  const [text, setText] = useState("Your text here");
  const [url, setUrl] = useState("https://zqr.se/");
  const [email, setEmail] = useState("example@email.com");
  const [phone, setPhone] = useState("+1 (123) 456–7890");
  const [wifi, setWifi] = useState<WifiInput>({
    ssid: "wifi_name",
    encryption: WifiEncryption.wep,
    password: "wifi_password",
    hidden: "false",
  });

  const providerValue = useMemo<Context>(() => {
    return {
      value,
      setValue,
      textInput: { value: text, setValue: setText },
      urlInput: { value: url, setValue: setUrl },
      emailInput: { value: email, setValue: setEmail },
      phoneInput: { value: phone, setValue: setPhone },
      wifiInput: { wifi, setWifi },
    };
  }, [value, text, url, email, phone, wifi]);

  return (
    <QrCodeContext.Provider value={providerValue}>
      {children}
    </QrCodeContext.Provider>
  );
}

export const useQrCode = () => useContext(QrCodeContext) as Context;
