"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { QrInputType } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export function PhoneInput() {
  const { phoneInput, setValue: setQrValue } = useQrCode();
  const { value, setValue } = phoneInput;

  useEffect(() => {
    setQrValue(`tel:${value}`);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="phone-input">{QrInputType.phone}</Label>
      <Input
        id="phone-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
