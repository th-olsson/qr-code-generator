"use client";

import { WifiEncryption, WifiHidden, useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function WifiInput() {
  const { wifiInput, setValue: setQrValue } = useQrCode();
  const { wifi, setWifi } = wifiInput;
  const { ssid, encryption, password, hidden } = wifi;

  useEffect(() => {
    setQrValue(`WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden};`);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="wifi-ssid"> WiFi name (SSID)</Label>
      <Input
        id="wifi-ssid"
        value={wifi.ssid}
        onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
      />
      <Label htmlFor="wifi-encryption">Encryption</Label>
      <Select
        defaultValue={encryption}
        onValueChange={(v: WifiEncryption) => {
          if (v === WifiEncryption.blank) {
            setWifi({ ...wifi, encryption: "" });
            return;
          }
          setWifi({ ...wifi, encryption: v });
        }}
      >
        <SelectTrigger id="wifi-encryption">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={WifiEncryption.wep}>WEP</SelectItem>
          <SelectItem value={WifiEncryption.wpa}>WPA</SelectItem>
          <SelectItem value={WifiEncryption.blank}>No encryption</SelectItem>
        </SelectContent>
      </Select>
      <Label htmlFor="wifi-password">Password</Label>
      <Input
        id="wifi-password"
        value={wifi.password}
        onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
      />
      <Label htmlFor="wifi-hidden">WiFi is hidden</Label>
      <Select
        defaultValue={hidden}
        onValueChange={(v: WifiHidden) => {
          setWifi({ ...wifi, hidden: v });
        }}
      >
        <SelectTrigger id="wifi-hidden">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"false" as WifiHidden}>No</SelectItem>
          <SelectItem value={"true" as WifiHidden}>Yes</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
