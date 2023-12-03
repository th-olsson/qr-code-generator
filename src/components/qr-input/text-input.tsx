"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { QrInputType } from "@/types";
import { useEffect } from "react";

export function TextInput() {
  const { textInput, setValue: setQrValue } = useQrCode();
  const { value, setValue } = textInput;

  useEffect(() => {
    setQrValue(value);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="text-input">{QrInputType.text}</Label>
      <Textarea
        id="text-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
