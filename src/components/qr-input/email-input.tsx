"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { QrInputType } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export function EmailInput() {
  const { emailInput, setValue } = useQrCode();
  const { email, setEmail } = emailInput;

  useEffect(() => {
    setValue(`mailto:${email}`);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="email-input">{QrInputType.email}</Label>
      <Input
        id="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
