"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { QrInputType } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export function PhoneInput() {
  const { phoneInput, setValue } = useQrCode();
  const { phone, setPhone } = phoneInput;

  useEffect(() => {
    setValue(`tel:${phone}`);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="phone-input">{QrInputType.phone}</Label>
      <Input
        id="phone-input"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}
