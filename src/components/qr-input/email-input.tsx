"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { QrInputType } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export function EmailInput() {
  const { emailInput, setValue: setQrValue } = useQrCode();
  const { value, setValue } = emailInput;

  useEffect(() => {
    setQrValue(`mailto:${value}`);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="email-input">{QrInputType.email}</Label>
      <Input
        id="email-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
