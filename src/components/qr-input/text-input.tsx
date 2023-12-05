"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { QrInputType } from "@/types";
import { useEffect } from "react";

export function TextInput() {
  const { textInput, setValue } = useQrCode();
  const { text, setText } = textInput;

  useEffect(() => {
    setValue(text);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="text-input">{QrInputType.text}</Label>
      <Textarea
        id="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
